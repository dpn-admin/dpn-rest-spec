### API Calls

### **Endpoint:** `/api-v1/restore/`

#### GET Operation (EXTERNAL)

Returns a paged list of Restore requests.

**Querystring Options**
* **uuid** - FILTER by DPN Object ID
* **status** - FILTER by status code.
* **node** - FILTER by node namespace.
* **order_by** - Comma separated list of strings to ORDER the return.  Accepted values are 'created_at' and 'updated_at'

```json
{
    "count": 8,
    "next": "http://localhost:8000/api-v1/restore/?page_size=2&page=2",
    "previous": null,
    "results": [
        {
            "from_node": "tdr",
            "to_node": "aptrust",
            "bag": "6078e948-d561-42b4-b13b-cf0404575cf7",
            "restore_id": "aptrust-64",
            "status": "Requested",
            "protocol": "R",
            "link": null,
            "created_at": "2015-02-25T15:27:40.426645Z",
            "updated_at": "2015-02-25T15:27:40.427711Z"
        },
        {
            "from_node": "chron",
            "to_node": "aptrust",
            "bag": "6078e948-d561-42b4-b13b-cf0404575cf7",
            "restore_id": "aptrust-65",
            "status": "Requested",
            "protocol": "R",
            "link": null,
            "created_at": "2015-02-25T15:27:40.432741Z",
            "updated_at": "2015-02-25T15:27:40.433824Z"
        }
    ]
}
```

#### POST Operation (EXTERNAL)

Creates a new restore record on the local node. 

**Restriction**
* API Users
* API Admins

**Post Body Example:**
```json
{
    "from_node": "tdr",
    "to_node": "chron",
    "bag": "8287ee9e-74f1-490b-8209-800985361134",
    "protocol": "R"
}
```

### **Endpoint:** `/api-v1/restore/<restore_id>/`

### GET Operation (EXTERNAL)

Returns the record for a single restore as identified by the restore_id.

### PUT Operation (INTERNAL)

Updates a specific restore as identified by the event_id.

**Restrictions**
* API Admins
