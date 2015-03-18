## Overview

A Restoration Transfer represents a request for a replicating node to transfer a bag to another replicating node or the admin node.

## Restoration Transfer Data Structure

* **restore_id** - The unique id of this restoration request. Typically consists of the node namespace plus a numeric ID, in the format "chron-2501". _(read_only)_
* **from_node** - String of namespace of node from which the bag will be restored.
* **to_node** - String of namespace of node to which the bag will be restored. This is the node that generated this request resource. _(read_only)_
* **uuid** - The uuid (UUIDv4) of the bag to be transferred. _(read_only)_
* **protocol** - String used to identify the transfer protocol. _(read_only)_
* **link** - Null or string of transfer link to be used for the specified protocol, set by from_node.
* **status** - String status of the request.
    * 'requested':  Default status used when record first created.
    * 'accepted':  Indicates the to_node has accepted the request to restore the bag.
    * 'rejected':  Set by the from_node if it cannot or will not restore the bag.
    * 'prepared':  Set by the from_node when the content has been restored locally and staged for transfer back to the to_node. 
    * 'finished':  Set by the to_node after it has retrieved the restored bag from the from_node.
    * 'cancelled':  Set by either node to indicate the restore operation was cancelled.
* **created_at** - String in DPN DateTime format of when the record was created. _(read_only)_
* **updated_at** - String in DPN DateTime format of when the record was last updated.

**Example Restore:**

