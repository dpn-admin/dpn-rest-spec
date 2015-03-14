## Supported HTTP Methods

### **Endpoint** `/api-v1/bag/`

#### GET Operation (EXTERNAL)

Returns a list of Registry Entries.

**Restrictions**
* Standard

**Querystring Options**
* **before** = DPN DateTime string to FILTER results by last_modified_date earlier than this.
* **after** = DPN DateTime String to FILTER result by last_modified_date later than this.
* **original_node** = String to FILTER by node namespace.
* **bag_type** = String character to FILTER by object type.
* **ordering** = Comma separated list of String field names to ORDER return by (accepted values: updated_at)
* **page_size** = Number of max results per page.

**Example Return for url:** `/api-v1/registry/?page_size=2`
```json
{
    "count": 27,
    "next": "http://localhost:8000/api-v1/bag/?page=2&page_size=2",
    "previous": null,
    "results": [
        {
            "uuid": "9998e960-fc6d-44f4-9d73-9a60a8eae609",
            "original_node": "aptrust",
            "brightening": [],
            "rights": [],
            "replicating_nodes": [],
            "admin_node": "aptrust",
            "fixities": [],
            "local_id": null,
            "size": 2526492640,
            "first_version_uuid": "9998e960-fc6d-44f4-9d73-9a60a8eae609",
            "version": 1,
            "bag_type": "D",
            "created_at": "2015-02-25T16:24:02.475138Z",
            "updated_at": "2015-02-25T16:24:02.475178Z"
        },
        {
            "uuid": "9998e960-fc6d-44f4-9d73-9a60a8eaea09",
            "original_node": "aptrust",
            "brightening": [],
            "rights": [],
            "replicating_nodes": [],
            "admin_node": "aptrust",
            "fixities": [],
            "local_id": null,
            "size": 2526492640,
            "first_version_uuid": "9998e960-fc6d-44f4-9d73-9a60a8eaea09",
            "version": 1,
            "bag_type": "D",
            "created_at": "2015-02-25T16:22:44.648807Z",
            "updated_at": "2015-02-25T16:22:44.649091Z"
        }
    ]
}
```

#### POST Operation (INTERNAL)

This allows the creation of a single bag through a post body.  The post body is the same as the sample data structure for a Bag.

**Restrictions**
* API Admins only.

### **Endpoint** `/api-v1/bag/<uuid>/`

#### GET Operation (EXTERNAL)

Returns the data for a single Registry Entry matching the uuid.  The return value is the JSON representation of the Bag.

**Restrictions**
* Standard

#### PUT Operation (INTERNAL)

Updates a single bag matching the uuid.  The body of the put is the same as the data structure listed for a single record above, minus rights, brightening and replicating nodes.

**Restrictions**
* API Admins Only.