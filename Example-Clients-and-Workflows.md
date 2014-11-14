## Overview

The purpose of the API is to build a central standard for communicating and reporting between nodes in the federation.  This frees each node up to implement local services as they see fit on the backend through a series of clients that mediate interactions between their local infrastructure and the DPN API.

There are many ways a node can choose to implement their back end clients but I wanted to document examples of how I am doing it using both the Internal and External endpoints in EarthDiver.

## Staging Client

This client is responsible for packaging content into DPN Bags, Gathering the appropriate Metadata for a Registry Entry, Picking which nodes to transfer to and staging the content in the appropriate locations.

*  Starting with a valid DPN Bag and it's metadata.
*  POST the bag metadata to `/api-v1/registry/?replicate_to=True` to create the registry entry.
*  GET data about the nodes at `/api-v1/node/`
*  Select 2 nodes to copy with based on diversity of `storage.region` and `storage.type`.
*  Copy or symlink the content to the appropriate location.
*  POST to `/api-v1/transfer` for each node selected to create the transfer.

## Replication Client

* GET a list of nodes I choose to replicate_from at `/api-v1/node/?replicate_from=True`
* Select the First node in the list.
* GET a list of content I've agreed to pull but haven't sent a receipt for from `<Node.api_root>/api-v1/transfer/?status=A&fixity=False`
* If this returns any results:
    * Rsync using the link provided in `Transfer.link` running as many concurrent downloads as I allow.
    * Perform a fixity check on the bag after it arrives.
    * PUT the the transfer record endpoint with the fixity receipt `<Node.api_endpoint>/api-v1/transfer/<event_id>/`
    * Confirm the PUT returns a value of True for `Transer.fixty` or retry if False.
    * Repeat until there are no more transfers I have agreed to.
* If there are no transfers I have agreed to:
    * GET a lit of pending transfers from `<Node.api_root>/api-v1/transfer/?status=P`
    * Iterate through a number of pending results I wish to accept (~10 or 20).
    * PUT each transfer setting it's status to Accept.
    * Begin Rsync on each item I have agreed to copy.


## Restore Client