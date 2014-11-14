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

**Example Node Entry:**
```json
{
    "port_set":[
        "127.0.0.1: 22",
        "127.0.0.1: 443"
    ],
    "storage_set":[
        "Solaris In Memory [TX]"
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