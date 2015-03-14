## Overview

A Bag represents the metadata about a specific DPN object, also called a DPN Bag. Its primary use is as a convenience for reporting and aggregating metadata held inside each bag.  If there is ever a conflict the metadata in a validated DPN bag is always consider authoritative.

## Bag Structure

* **uuid** - String of the unique (UUIDv4) identifier for this DPN object. _(read only)_
* **local_id** - String of the primary local identifier.
* **size** - Size of the bag in bytes. _(read only)_
* **first_version_uuid** - String of first version uuid (UUIDv4).
* **ingest_node** - String of the [[node|Node:-Resource]] namespace that originally ingested this bag. _(read only)_
* **admin_node** - String of the [[node|Node:-Resource]] namespace that currently administers this bag.
* **version** - Unsigned integer of this bag's version number, starting with 1. _(read only)_
* **bag_type** - Single character String of the code for the type of object. _(read only)_
    * 'D' - Data
    * 'I' - Interpretive
    * 'R' - Rights
* **interpretive** - Empty Array or Array of Strings listing the uuid of the interpretive bags.
* **rights** - Empty Array or Array of Strings listing the uuid of the rights bags.
* **replicating_nodes** - Empty Array or Array of Strings listing the node namespaces of nodes that are storing the bag.
* **fixities** - Hash of fixity algorithm : fixity value pairs, minimum of one.  _(add only)_
* **created_at** - String of DPN Format DateTime this record was first created. _(read only)_
* **updated_at** - String of DPN Format DateTime this record was last updated.

**Example Registry Entry:**
```json
        {
            "uuid": "9998e960-fc6d-44f4-9d73-9a60a8eae609",
            "ingest_node": "aptrust",
            "interpretive": [],
            "rights": [],
            "replicating_nodes": [],
            "admin_node": "aptrust",
            "fixities": {"sha256": "someshafixityvalue" },
            "local_id": "my_bag",
            "size": 2526492640,
            "first_version_uuid": "9998e960-fc6d-44f4-9d73-9a60a8eae609",
            "version": 1,
            "bag_type": "D",
            "created_at": "2015-02-25T16:24:02.475138Z",
            "updated_at": "2015-02-25T16:24:02.475178Z"
        }
```
