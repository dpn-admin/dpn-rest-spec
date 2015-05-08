## Overview

A Node represents the metadata and configuration data for a specific node in the DPN Federation.

## Node Data Structure

The following is a data structure for an individual Node.
* **name** - String of human readable name for node.
* **namespace** - String of lowercase identifier used to unambigously reference this node in DPN. _(read_only)_
* **api_root** - null or String of the root location of this nodes server.
* **ssh_pubkey** - null or String of the ssh public key this node.
* **replicate_from** - Array of namespaces of nodes that this node will replicate from.
* **replicate_to** - Array of namespaces of nodes that this node will replicate to. 
* **restore_from** - Array of namespaces of nodes that this node will restore from.
* **restore_to** - Array of namespaces of nodes that this node will restore to.
* **protocols** - Array of Strings identifying what transfer protocols this node supports.
* **fixity_algorithms** - Array of Strings identifying which fixity algorithms this node supports.
* **created_at** - String formatted DPN Datetime of when this record was created. _(read_only)_
* **updated_at** - String formatted DPN Datetime of when this record was last updated. 
* **storage** - Hash with the following fields:
    * **region** - String code of DPN-defined region.
    * **type** - String code of DPN-defined storage type.

**Example Node Entry:**
```json
        {
            "protocols": [
                "rsync"
            ],
            "storage": {
                "region": "central",
                "type": "proprietary-chron"
            },
            "replicate_from": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust",
                "test"
            ],
            "replicate_to": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust",
                "test"
            ],
            "restore_from": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust",
                "test"
            ],
            "restore_to": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust",
                "test"
            ],
            "fixity_algorithms": [
                "sha256"
            ],
            "name": "Chronopolis",
            "namespace": "chron",
            "api_root": "https://chronopolis01.umiacs.umd.edu/",
            "ssh_pubkey": "",
            "created_at": "2015-02-25T15:27:39Z",
            "updated_at": "2015-03-06T14:21:50Z"
        }
```
