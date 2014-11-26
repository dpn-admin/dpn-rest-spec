## Overview

A Restore represents a request for the local node to create a transfer with the requesting node to restore content.

## Restore Data Structure

* **node** - String of [node](https://github.com/APTrust/EarthDiver/wiki/API-Endpoint:-Node) namespace that requested the Restore.
* **dpn_object_id** - String of the DPN Object ID.
* **status** - Single character String of the status of the request.
    * 'Q' - Requsted:  Default status used when record first created.
    * 'S' - Staging:  Set by the local node when it agrees and begins to stage the content for transfer.
    * 'R' - Ready:  Set by the local node when the content has been staged for transfer and a Transfer record has been created.
    * 'X' - Cancel:  Set by the local node when it does not agree to restore the content.
* **event_id** - String of the globally unique identifier for this restore record.
* **transfer** - null or String of the Transfer event_id created once the restore has been marked Ready.
* **created_on** - String in DPN DateTime format of when the record was created.
* **updated_on** - String in DPN DateTime format of when the record was last updated.

**Example Restore:**

### API Calls

### **Endpoint:** `/api-v1/restore/`

#### GET Operation (EXTERNAL)

Returns a paged list of Restore requests.

**Restrictions**
* By default, return must be filtered to display only restores with the request users node.
* API Admins have no filter applied and can see all node restores.

**Querystring Options**
* **dpn_object_id** - FILTER by DPN Object ID
* **status** - FILTER by status code.
* **node** - FILTER by node namespace.
* **ordered** - Comma separated list of strings to ORDER the return.  Accepted values are 'created' and 'updated'

#### POST Operation (EXTERNAL)

Creates a new restore record on the local node.  The request body only uses the DPN Object ID for the request.  Information about the node should be read from the users Authentication Token.

**Restriction**
* API Users
* API Admins

**Post Body Example:**
```json
{
    "dpn_object_id": "8287ee9e-74f1-490b-8209-800985361134"
}
```

### **Endpoint:** `/api-v1/restore/<event_id>/`

### GET Operation (EXTERNAL)

Returns the record for a single restore as identified by the event_id.

** Restrictions**
* API Users can only see restore records for their own node.
* SuperUsers can see any restore record.

### PUT Operation (INTERNAL)

Updates a specific restore as identified by the event_id.

**Restrictions**
* API Admins

