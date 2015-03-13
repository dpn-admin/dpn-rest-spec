## Overview

A Registry Entry represents the metadata about a specific DPN object, also called a DPN Bag. Its primary use is as a convenience for reporting and aggregating metadata held inside each bag.  If there is ever a conflict the metadata in a validated DPN bag is always consider authoritative.

## Registry Data Structure

**Fields:**
* **first_node** - String of the [node](https://github.com/APTrust/EarthDiver/wiki/API-Endpoint:-Node) namespace.
* **brightening_objects** - Empty Array or Array of Strings listing the DPN Object ID of the brightening objects.
* **rights_objects** - Empty Array or Array of Strings listing the DPN Object ID of the rights objects.
* **replicating_nodes** - Empty Array or Array of Strings listing the node namespaces of nodes with confirmed transfers.
* **dpn_object_id** - String of the globally unique identifier for this DPN object.
* **local_id** - null or String of the primary local identifier.
* **version_number** - Int of the order of this object in any version chain, starting at 1.
* **creation_date** - String of DPN Format DateTime this record was first created by the First Node.
* **last_modified_date** - String of DPN Format DateTime this record was last updated by the First Node.
* **bag_size** - Int of the size of the DPN Bag in bytes.
* **object_type** - Single character String of the code for the type of object.
    * 'D' - Data
    * 'B' - Brightening
    * 'R' - Rights
* **previous_version** - null or String of the previous version DPN Object ID.
* **forward_version** - null or String of the forward version DPN Object ID.
* **first_version** - String of first version DPN Object ID.

**Example Registry Entry:**
```json
{
    "first_node":"sdr",
    "brightening_objects":[],
    "rights_objects":[],
    "replicating_nodes":[],
    "dpn_object_id":"892c3cca-4e18-4873-9c7e-758f5d17a5e9",
    "local_id":null,
    "version_number":1,
    "creation_date":"2014-11-11T00:27:16.206545Z",
    "last_modified_date":"2014-11-11T00:27:16.206550Z",
    "bag_size":2158502848,
    "object_type":"D",
    "previous_version":null,
    "forward_version":null,
    "first_version":"892c3cca-4e18-4873-9c7e-758f5d17a5e9"
}
```

## Supported HTTP Methods

### **Endpoint** `/api-v1/registry/`

#### GET Operation (EXTERNAL)

Returns a list of Registry Entries.

**Restrictions**
* Standard

**Querystring Options**
* **before** = DPN DateTime string to FILTER results by last_modified_date earlier than this.
* **after** = DPN DateTime String to FILTER result by last_modified_date later than this.
* **first_node** = String to FILTER by node namespace.
* **object_type** = String character to FILTER by object type.
* **ordering** = Comma separated list of String field names to ORDER return by (accepted values: last_modified_date)
* **page_size** = Number of max results per page.

**Example Return for url:** `/api-v1/registry/?page_size=2`
```json
{
    "count":1000,
    "next":"http://localhost:8000/api-v1/registry/?page_size=2&page=2",
    "previous":null,
    "results":[
        {
            "first_node":"sdr",
            "brightening_objects":[],
            "rights_objects":[],
            "replicating_nodes":[],
            "dpn_object_id":"892c3cca-4e18-4873-9c7e-758f5d17a5e9",
            "local_id":null,
            "version_number":1,
            "creation_date":"2014-11-11T00:27:16.206545Z",
            "last_modified_date":"2014-11-11T00:27:16.206550Z",
            "bag_size":2158502848,
            "object_type":"D",
            "previous_version":null,
            "forward_version":null,
            "first_version":"892c3cca-4e18-4873-9c7e-758f5d17a5e9"
        },
        {
            "first_node":"tdr",
            "brightening_objects":[],
            "rights_objects":[],
            "replicating_nodes":[],
            "dpn_object_id":"4d9dd207-43d4-441c-b499-e88f0ceb07ed",
            "local_id":null,
            "version_number":1,
            "creation_date":"2014-11-11T00:27:16.209216Z",
            "last_modified_date":"2014-11-11T00:27:16.209221Z",
            "bag_size":3034407863,
            "object_type":"D",
            "previous_version":null,
            "forward_version":null,
            "first_version":"4d9dd207-43d4-441c-b499-e88f0ceb07ed"
        }
    ]
}
```

#### POST Operation (INTERNAL)

This allows the creation of a single registry entry through a post body.  The post body is the same as the sample data structure for a Registry Entry.

**Restrictions**
* API Admins only.

### **Endpoint** `/api-v1/registry/<dpn_object_id>/`

#### GET Operation (EXTERNAL)

Returns the data for a single Registry Entry matching the dpn_object_id.  The return value is the JSON representation of the Registry Entry.

**Restrictions**
* Standard

#### PUT Operation (INTERNAL)

Updates a single registry entry matching the dpn_object_id.  The body of the put is the same as the datastructure listed for a single record above.

**Restrictions**
* API Admins Only.
