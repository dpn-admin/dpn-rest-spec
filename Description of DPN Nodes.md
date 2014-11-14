# Overview

The term Node refers to any DPN member acting to send, manage or receive content for preservation in the DPN Federation.  A node may act as a First Node, a Replicating Node and frequently it acts in both roles.  Note that Nodes may have more responsibilities than those listed here but these are the most relevant to the design of the API.

## First Node: 

A DPN Node acting as the entry point for content into the DPN Network. 

It is responsible for:
* Establishing workflows to properly receive content from DPN Depositors it represents.
* Providing a valid DPN Bag for deposit into the DPN Network.
* Selecting an appropriate number of Replicating Nodes to copy the DPN Bag based on DPN policy for geographic distribution and technical diversity of storage.
* Staging DPN Bags for transfer to selected Replicating Nodes.
* Notifying Replicating Nodes of content that is ready to be transferred.
* Validating a fixity receipt from the Replicating Node after transfer and recording it for future auditing.
* Recording the Replicating Nodes confirmation of any required Bag validation.
* Providing a Registry Entry for the DPN Bag with descriptive metadata and listing the nodes that it has confirmed transfer with.

## Replicating Node:

A DPN Node acting to receive content from a First Node for including in its local preservation environment.

It is responsible for:
* Monitoring First Nodes for DPN Bag Transfers.
* Notifying First Nodes weather it will accept or reject any DPN Bags staged for transfer.
* Transferring DPN Bags it has accepted for transfer from a First Node.
* Calculating a fixity value for the transferred DPN Bag and reporting it back to the First Node for validation.
* Retrying or rejecting any transfers that have failed fixity as needed.
* Validating the contents of a DPN Bag and reporting the result back to the First Node.
* Rejecting any transfer that cannot produce a validated bag.
* Periodically querying all First Nodes for any Registry Entries that have been modified or created since the last query.
* Depositing any successfully transferred and validated DPN Bags into its local preservation environment.