## Overview

A Transfer represents the exchange of a content between the Node API Server to a specific Node API Client.

## DPN REST API
**Endpoint:** `/api-v1/transfer/`
Supports listing through GET operations.

### GET Operations

Returns a list of Transfers from the server node.

**Restrictions**
* By default transfers must be filtered to only the requesting users node.
* API Admins have no node Filter applied and can see all transfers.

**Querystring Options**
* **dpn_object_id** = <exact id> to FILTER by exact DPN Object ID value.
* **status** = [P|A|R|C] to FILTER by Pending, Accept, Reject or Confirmed status
* **fixity** = [true|false|none] to FILTER by fixity status.
* **valid** = [true|false|none] to FILTER by validation status.
* **node** = <exact name> FILTER by the namespace used for the node. (i.e. "aptrust"|"chron"|"sdr"...)
* **created_on** = <dpn date format> to ORDER the return by record creation date. (prepend with '-' to reverse order)
* **updated_on** = <dpn date format> to ORDER the return by last update. (prepend with '-' to reverse order)
* **page_size** = <int> to set the max number of results per page.

**Example Return:**

**url:** `/api-v1/transfer/?page_size=2`
```json
{
    "count":110,
    "next":"http://localhost:8000/api-v1/transfer/?page=2",
    "previous":null,
    "results":[
        {
            "node":"chron",
            "dpn_object_id":"8287ee9e-74f1-490b-8209-800985361134",
            "status":"P",
            "event_id":"aptrust-1665",
            "protocol":"R",
            "link":"chrondpn@dpn.nodename.org:outgoing/8287ee9e-74f1-490b-8209-800985361134.tar",
            "size":543891175,
            "receipt":null,
            "fixity":null,
            "valid":null,
            "created_on":"2014-11-11T00:27:20.295603Z",
            "updated_on":"2014-11-11T00:27:20.297468Z"
        },
        {
            "node":"chron",
            "dpn_object_id":"8044ea1a-cba5-44e7-a4d5-122f649f81a4",
            "status":"A",
            "event_id":"aptrust-1664",
            "protocol":"R",
            "link":"chrondpn@dpn.nodename.org:outgoing/8044ea1a-cba5-44e7-a4d5-122f649f81a4.tar",
            "size":3239653228,
            "receipt":null,
            "fixity":null,
            "valid":null,
            "created_on":"2014-11-11T00:27:20.266521Z",
            "updated_on":"2014-11-13T17:18:28.245754Z"
        }
    ]
}
```