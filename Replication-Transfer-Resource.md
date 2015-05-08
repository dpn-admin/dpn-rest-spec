## Overview

A Replication Transfer represents the exchange of a bag from an administrative node to another node, which then becomes a replicating node for the bag.

## Replication Transfer Data Structure

The following is the data structure for an individual transfer:
* **replication_id** - The unique id of this replication request. Typically consists of the node namespace plus a numeric ID, in the format "chron-2501". _(read_only)_
* **from_node** - String of the namespace of the node sending the bag.  This is the node that generated this request resource. _(read_only)_
* **to_node** - String of the namespace of the node receiving the bag.  Must be neither the admin nor a replicating node for the bag being transferred. _(read_only)_
* **uuid** - The uuid (UUIDv4) of the bag to be transferred. _(read_only)_
* **fixity_algorithm** - String of the fixity algorithm expected for the receipt. _(read_only)_
* **fixity_nonce** - null or a string of the nonce to be used for verification. _(read_only)_
* **fixity_value** - null or string of the fixity calculated by the to_node after transferring the bag to its staging area.
* **fixity_accept** - null or boolean set by the from_node to indicate whether the to_node's fixity digest was correct.
* **bag_valid** - null or boolean set by to_node to record results of bag validation. 
* **status** - String status of the transfer.
    * 'requested' - set by the from_node to indicate the bag is staged for transfer and awaiting response from to_node.
    * 'rejected' - set by the to_node to indicate it will not perform the transfer.
    * 'received' - set by the to_node to indicate it has performed the transfer.
    * 'confirmed' - set by the from_node after it receives all data to confirm a good transfer.
    * 'stored' - set by the to_node to indicate the bag has been transferred into its storage repository from the staging area.  The to_node promises to fulfill replicating node duties by setting this status.
    * 'cancelled' - set by either node to indicate the transfer was cancelled.
* **protocol** - String used to identify the transfer protocol. _(read_only)_
* **link** - String of transfer link to be used for the specified protocol. _(read_only)_
* **created_at** - String in DPN DateTime Format of the record creation date. _(read_only)_
* **updated_at** - String in DPN DateTime Format of last record update. 

**Example Replication Transfer:**

```json
        {
            "from_node": "aptrust",
            "to_node": "chron",
            "bag": "cfd167a0-baad-4235-b896-041e710e6c62",
            "replication_id": "aptrust-77",
            "fixity_algorithm": "sha256",
            "fixity_nonce": "YQR5BL1V",
            "fixity_value": "",
            "fixity_accept": null,
            "bag_valid": null,
            "status": "Requested",
            "protocol": "R",
            "link": "dpn.chron@dpn.nodename.org:outgoing/cfd167a0-baad-4235-b896-041e710e6c62.tar",
            "created_at": "2015-02-25T15:27:40Z",
            "updated_at": "2015-02-25T15:27:40Z"
        }
```
