## Endpoints and Supported Methods

### GET `/<api_version>/replicate/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Authorization Failed|401|

#### Description

Returns a list of Replication Transfers from the server node and additional fields needed for counting and paging through the return list.

#### Permissions
Standard

#### Querystring Options
* **uuid** = <exact id> to FILTER by exact bag UUID value.
* **status** = to FILTER by status
* **fixity_accept** = [true|false|null] to FILTER by fixity status.
* **bag_valid** = [true|false|null] to FILTER by validation status.
* **from_node** = <exact name> FILTER by the namespace of the from_node. (i.e. "aptrust"|"chron"|"sdr"...)
* **to_node** = <exact name> FILTER by the namespace of the to_node. (i.e. "aptrust"|"chron"|"sdr"...)
* **order_by** - Comma separated list of strings to ORDER the return.  Accepted values are 'created_at' and 'updated_at'
* **page_size** = <int> to set the max number of results per page.
* **page** = Page number to return, starting at 1.  For use with page_size.

#### Example Return for: `/1.0/replication/?page_size=2`

```json
{
    "count": 8,
    "next": "http://localhost:8000/1.0/replicate/?page=2&page_size=2",
    "previous": null,
    "results": [
        {
            "from_node": "aptrust",
            "to_node": "chron",
            "uuid": "cfd167a0-baad-4235-b896-041e710e6c62",
            "replication_id": "aptrust-77",
            "fixity_algorithm": "sha256",
            "fixity_nonce": "YQR5BL1V",
            "fixity_value": "",
            "fixity_accept": null,
            "bag_valid": null,
            "status": "requested",
            "protocol": "rsync",
            "link": "dpn.chron@dpn.nodename.org:outgoing/cfd167a0-baad-4235-b896-041e710e6c62.tar",
            "created_at": "2015-02-25T15:27:40Z",
            "updated_at": "2015-02-25T15:27:40Z"
        },
        {
            "from_node": "aptrust",
            "to_node": "hathi",
            "uuid": "cfd167a0-baad-4235-b896-041e710e6c62",
            "replication_id": "aptrust-76",
            "fixity_algorithm": "sha256",
            "fixity_nonce": "55YWZI6C",
            "fixity_value": "",
            "fixity_accept": null,
            "bag_valid": null,
            "status": "requested",
            "protocol": "rsync",
            "link": "dpn.hathi@dpn.nodename.org:outgoing/cfd167a0-baad-4235-b896-041e710e6c62.tar",
            "created_at": "2015-02-25T15:27:40Z",
            "updated_at": "2015-02-25T15:27:40Z"
        }
    ]
}
```
---
### POST `/<api_version>/replicate/<replication_id>`

|HTTP Method|API Type|
|--------|-----------|
|POST|INTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|201|
|Bad Resource|400|
|Duplicate|409|
|Authorization Failed|401|
|Authorized, Not Permitted|403|

#### Description

Creates new Replication Transfers.  It requires the following data in the body of the post in order to create the transfer.

#### Permissions
* API Admins only.

---
### GET `/<api_version>/replication/<replication_id>/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Authorization Failed|401|

#### Description

This displays data about a single Replication Transfer based in its replication_id.

#### Permissions
Standard

---
### PUT `/<api_version>/replication/<replication_id>/`

|HTTP Method|API Type|
|--------|-----------|
|PUT|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Bad Resource|400|
|Illegal Transition|400|
|Authorization Failed|401|
|Authorized, Not Permitted|403|

#### Description

Updates the transfer indicated by the event_id in the URL. RESTRICTIONS BELOW NEED TO BE VERIFIED!

#### Permissions
* API Users belonging to the to_node.
* API Admins.

