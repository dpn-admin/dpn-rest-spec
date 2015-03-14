## Supported HTTP Methods

### **Endpoint:** `/api-v1/replicate/`

#### GET Operation (EXTERNAL)

Returns a list of Replication Transfers from the server node and additional fields needed for counting and paging through the return list.

**Restrictions**
* API Admins have no node Filter applied and can see all transfers.

**Querystring Options**
* **bag** = <exact id> to FILTER by exact bag UUID value.
* **status** = to FILTER by Pending, Accept, Reject or Confirmed status
* **fixity_accept** = [true|false|none] to FILTER by fixity status.
* **valid** = [true|false|none] to FILTER by validation status.
* **from_node** = <exact name> FILTER by the namespace of the from_node. (i.e. "aptrust"|"chron"|"sdr"...)
* **to_node** = <exact name> FILTER by the namespace of the to_node. (i.e. "aptrust"|"chron"|"sdr"...)
* **created_at** = <dpn date format> to ORDER the return by record creation date. (prepend with '-' to reverse order)
* **updated_at** = <dpn date format> to ORDER the return by last update. (prepend with '-' to reverse order)
* **page_size** = <int> to set the max number of results per page.

**Example Return:**

**url:** `/api-v1/replication/?page_size=2`

```json
{
    "count": 8,
    "next": "http://localhost:8000/api-v1/replicate/?page=2&page_size=2",
    "previous": null,
    "results": [
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
            "created_at": "2015-02-25T15:27:40.469359Z",
            "updated_at": "2015-02-25T15:27:40.471294Z"
        },
        {
            "from_node": "aptrust",
            "to_node": "hathi",
            "bag": "cfd167a0-baad-4235-b896-041e710e6c62",
            "replication_id": "aptrust-76",
            "fixity_algorithm": "sha256",
            "fixity_nonce": "55YWZI6C",
            "fixity_value": "",
            "fixity_accept": null,
            "bag_valid": null,
            "status": "Requested",
            "protocol": "R",
            "link": "dpn.hathi@dpn.nodename.org:outgoing/cfd167a0-baad-4235-b896-041e710e6c62.tar",
            "created_at": "2015-02-25T15:27:40.463484Z",
            "updated_at": "2015-02-25T15:27:40.465401Z"
        }
    ]
}
```

#### POST Operation (INTERNAL)

Creates new Replication Transfers.  It requires the following data in the body of the post in order to create the transfer.

Data strucutre:
* **bag:** String of the bag uuid to look up the registry entry.
* **link** String of the link to use for downloading the file.
* **from_node** String of the node namespace requesting the replication. This should be YOUR node.
* **to_node** String of the node namespace to replicate to.
* **fixity_algorithm** String of algorithm name to use for fixity check. ("sha256")
* **fixity_nonce** Nullable string indicating the nonce value to use when calculating the fixity digest.

**Restrictions**
*  This operation is limited to api_admin users only.

**POST Body Example:**
```json
{
    "bag":"8044ea1a-cba5-44e7-a4d5-122f649f81a4",
    "link":"sshaccount@dpnserver.test.org:8044ea1a-cba5-44e7-a4d5-122f649f81a4.tar",
    "from_node":"chron",
    "to_node":"hathi",
    "fixity_algorithm":"sha256",
    "fixity_nonce":"SDjhoi754"
}
```

### **Endpoint:** `/api-v1/replication/<replication_id>/`

#### GET Operation (EXTERNAL)

This displays data about a single Replication Transfer based in its replication_id.

**Restrictions**
* Authenticate Users 

#### PUT Operation (EXTERNAL)

Updates the transfer indicated by the event_id in the URL. RESTRICTIONS BELOW NEED TO BE VERIFIED!

**Restrictions**
* API Users belonging to the to_node.
* API Admins.
* READ ONLY FIELDS: "link", "fixity_algorithm", "fixity_nonce", "replication_id", "protocol", "created_at", "updated_at", "fixity_valid", "bag", "from_node", "to_node"
* API Users can only set status of Rejected, Received, or Cancelled.
