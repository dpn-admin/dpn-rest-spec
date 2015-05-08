## Endpoints and Supported Methods

### GET `/<api_version>/bag/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Authorization Failed|401|

#### Description

Returns a list of Registry Entries.  If the requested resource is too large, the server should
set the page_size parameter to an acceptable value.

#### Permissions
Standard

#### Querystring Options

* **before** = DPN DateTime string to FILTER results by last_modified_date earlier than this, inclusive.
* **after** = DPN DateTime String to FILTER result by last_modified_date later than this, inclusive.
* **admin_node** = String to FILTER by administrative node namespace.
* **bag_type** = String character to FILTER by bag type.
* **ordering** = Comma separated list of String field names to ORDER return by (accepted values: updated_at)
* **page_size** = Number of max results per page.
* **page** = Page number to return, starting at 1.  For use with page_size.

#### Example Return For: `/1.0/bag/?page_size=2`
```json
{
    "count": 27,
    "next": "http://localhost:8000/1.0/bag/?page=2&page_size=2",
    "previous": null,
    "results": [
        {
            "uuid": "9998e960-fc6d-44f4-9d73-9a60a8eae609",
            "ingest_node": "aptrust",
            "interpretive": [],
            "rights": [],
            "replicating_nodes": [],
            "admin_node": "aptrust",
            "fixities": {"sha256": "someshafixityvalue" },
            "local_id": "some_local_id",
            "size": 2526492640,
            "first_version_uuid": "9998e960-fc6d-44f4-9d73-9a60a8eae609",
            "version": 1,
            "bag_type": "D",
            "created_at": "2015-02-25T16:24:02Z",
            "updated_at": "2015-02-25T16:24:02Z"
        },
        {
            "uuid": "9998e960-fc6d-44f4-9d73-9a60a8eaea09",
            "ingest_node": "aptrust",
            "interpretive": [],
            "rights": [],
            "replicating_nodes": [],
            "admin_node": "aptrust",
            "fixities": [],
            "local_id": "some-other-local-id",
            "size": 2526492640,
            "first_version_uuid": "9998e960-fc6d-44f4-9d73-9a60a8eaea09",
            "version": 1,
            "bag_type": "D",
            "created_at": "2015-02-25T16:22:44Z",
            "updated_at": "2015-02-25T16:22:44Z"
        }
    ]
}
```

---
### POST `/<api_version>/bag/`

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

This allows the creation of a single bag through a post body.  The post body is the same as the sample data structure for a Bag.  If successful, the response will be identical to that of a GET request.

#### Permissions
* API Admins only.

---
### GET `/<api_version>/bag/<uuid>/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Authorization Failed|401|


#### Description

Returns the data for a single Bag record matching the uuid.  The return value is the JSON representation of the Bag.

#### Permissions
* Standard

---
### PUT `/<api_version>/bag/<uuid>/`

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

Updates a single bag matching the uuid.  The body of the put is the same as the data structure listed for a single record above.

#### Permissions
* API Admins Only.
