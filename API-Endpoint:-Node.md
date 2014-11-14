## Overview

A Node represents the metadata and configuration data for a specific node in the DPN Federation.

## Node Data Structure

The following is a data structure for an individual Node.
* **name** - String of human readable name for node.
* **namespace** - String of lowercase identifier used to disambigously reference this node in DPN.
* **api_root** - null or String of the root location of this nodes API server.
* **ssh_pubkey** - null or String of the ssh public key this node uses for rsync over ssh.
* **replicate_from** - Boolean of weather the local node chooses to replicate content from this node.
* **replicate_to** - Boolean of weather the local node chooses to repilcate content to this node.
* **restore_from** - Boolean of weather the local node chooses to restore content from this node.
* **restore_to** - Boolean of weather the local node chooses to restore content to this node.
* **protocols** - Array of Strings identifying what transfer protocols this node supports.
* **created_on** - String formatted DPN Datetime of when this record was created.
* **updated_on** - String formatted DPN Datetime of when this record was last updated.
* **storage** - Empty Array or Array of storage objects. structured as:
    * **region** - String of two character state code for the storage location.
    * **type** - null or String describing the type of storage layer.

**Example Node Entry:**
```json
{
    "storage":[
        {
            "region":"TX",
            "type":"Solaris In Memory"
        }
    ],
    "protocols":[
        "rsync"
    ],
    "name":"TDR",
    "namespace":"tdr",
    "api_root":"https://dpn.utexas.edu/dpnrest/",
    "ssh_pubkey":null,
    "replicate_from":true,
    "replicate_to":true,
    "restore_from":false,
    "restore_to":false,
    "created_on":"2014-11-11T00:27:16.070135Z",
    "updated_on":"2014-11-11T00:27:16.070417Z"
}
```

## Endpoints and Supported Methods

### Endpoint `/api-v1/node/`

GET Operation (EXTERNAL)

Returns a list of Nodes.

**Restrictions**
* Standard

**Querystring Options**
* page_size = Number of max results per page.

**Example of return for url:** `/api-v1/node/?page_size=2`
```json
{
    "count":5,
    "next":"http://localhost:8000/api-v1/node/?page=2&page_size=2",
    "previous":null,
    "results":[
        {
            "storage":[
                {
                    "region":"TX",
                    "type":"Solaris In Memory"
                }
            ],
            "protocols":[
                "rsync"
            ],
            "name":"TDR",
            "namespace":"tdr",
            "api_root":"https://dpn.utexas.edu/dpnrest/",
            "ssh_pubkey":null,
            "replicate_from":true,
            "replicate_to":true,
            "restore_from":false,
            "restore_to":false,
            "created_on":"2014-11-11T00:27:16.070135Z",
            "updated_on":"2014-11-11T00:27:16.070417Z"
        },
        {
            "storage":[
                {
                    "region":"CA",
                    "type":"CDROM under David's Desk"
                }
            ],
            "protocols":[
                "rsync"
            ],
            "name":"Chronopolis",
            "namespace":"chron",
            "api_root":"https://dpn.chronopolis.org/dpnrest/",
            "ssh_pubkey":null,
            "replicate_from":true,
            "replicate_to":true,
            "restore_from":false,
            "restore_to":false,
            "created_on":"2014-11-11T00:27:16.078881Z",
            "updated_on":"2014-11-11T00:27:16.078921Z"
        }
    ]
}
```

**Endpoint `/api-v1/node/aptrust/`

Returns data on a a specific Node as determined by namespace.

**Example Return:**
```json
{
    "storage":[
        {
            "region":"VA",
            "type":"Amazon S3"
        }
    ],
    "protocols":[
        "rsync"
    ],
    "name":"APTrust",
    "namespace":"aptrust",
    "api_root":"https://dpn-dev.aptrust.org/dpnrest/",
    "ssh_pubkey":null,
    "replicate_from":true,
    "replicate_to":true,
    "restore_from":false,
    "restore_to":false,
    "created_on":"2014-11-11T00:27:16.093555Z",
    "updated_on":"2014-11-11T00:27:16.093586Z"
}
```