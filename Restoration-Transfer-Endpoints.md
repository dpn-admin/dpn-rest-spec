## Endpoints and Supported Methods

### GET `/<api_version>/restore/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Authorization Failed|401|

#### Description

Returns a paged list of Restore requests.

#### Querystring Options

* **uuid** - FILTER by DPN Object ID
* **status** - FILTER by status code.
* **to_node** - FILTER by node namespace.
* **order_by** - Comma separated list of strings to ORDER the return.  Accepted values are 'created_at' and 'updated_at'
* **page_size** = Number of max results per page.
* **page** = Page number to return, starting at 1.  For use with page_size.

#### Example Return For: `/1.0/restore/`

```json
{
    "count": 8,
    "next": "http://localhost:8000/1.0/restore/?page_size=2&page=2",
    "previous": null,
    "results": [
        {
            "from_node": "tdr",
            "to_node": "aptrust",
            "uuid": "6078e948-d561-42b4-b13b-cf0404575cf7",
            "restore_id": "aptrust-64",
            "status": "requested",
            "protocol": "rsync",
            "link": null,
            "created_at": "2015-02-25T15:27:40Z",
            "updated_at": "2015-02-25T15:27:40Z"
        },
        {
            "from_node": "chron",
            "to_node": "aptrust",
            "uuid": "6078e948-d561-42b4-b13b-cf0404575cf7",
            "restore_id": "aptrust-65",
            "status": "requested",
            "protocol": "rsync",
            "link": null,
            "created_at": "2015-02-25T15:27:40Z",
            "updated_at": "2015-02-25T15:27:40Z"
        }
    ]
}
```

---
### POST `/<api_version>/restore/<restore_id>`

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

Creates a new restore record on the local node. 

#### Permissions
* API Users
* API Admins

---
### GET `/<api_version>/restore/<restore_id>/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Authorization Failed|401|

#### Description

Returns the record for a single restore as identified by the restore_id.

#### Permissions
* Standard

---
### PUT `/<api_version>/restore/<restore_id>/`

|HTTP Method|API Type|
|--------|-----------|
|PUT|INTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Bad Resource|400|
|Illegal Transition|400|
|Authorization Failed|401|
|Authorized, Not Permitted|403|

#### Description

Updates a specific restore as identified by the restore_id.

#### Permissions
* API Admins
