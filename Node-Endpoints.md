## Endpoints and Supported Methods

### GET `/api-<version>/node/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Authorization Failed|401|

#### Description

Returns a list of Nodes.

#### Permissions
* Standard

#### Querystring Options
* **page_size** = Number of max results per page.

#### Example Return For: `/api-1.0/node/?page_size=2`
```json
{
    "count": 5,
    "next": "http://localhost:8000/api-1.0/node/?page=2&page_size=2",
    "previous": null,
    "results": [
        {
            "protocols": [
                "rsync"
            ],
            "storage": {
                "region": "central",
                "type": "chron-proprietary"
            },
            "replicate_from": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "replicate_to": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "restore_from": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "restore_to": [
                "sdr",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "fixity_algorithms": [
                "sha256"
            ],
            "name": "Chronopolis",
            "namespace": "chron",
            "api_root": "https://chronopolis01.umiacs.umd.edu/",
            "ssh_pubkey": null,
            "created_at": "2015-02-25T15:27:39.819647Z",
            "updated_at": "2015-02-25T15:27:39.824840Z"
        },
        {
            "protocols": [
                "rsync"
            ],
            "storage": {
                "region": "central",
                "type": "chron-proprietary"
            },
            "replicate_from": [
                "chron",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "replicate_to": [
                "chron",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "restore_from": [
                "chron",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "restore_to": [
                "chron",
                "tdr",
                "hathi",
                "aptrust"
            ],
            "fixity_algorithms": [
                "sha256"
            ],
            "name": "SDR",
            "namespace": "sdr",
            "api_root": "https://dpn.stanford.edu/dpnrest/",
            "ssh_pubkey": null,
            "created_at": "2015-02-25T15:27:39.826296Z",
            "updated_at": "2015-02-25T15:27:39.830339Z"
        }
    ]
}
```

### GET `/api-<version>/node/<node:namespace>/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Authorization Failed|401|

#### Description

Returns data on a a specific Node as determined by namespace.


#### Permissions
* Standard

#### Querystring Options
* None


#### Example Return:
```json
{
    "protocols": [
        "rsync"
    ],
    "storage": {
        "region": "central",
        "type": "chron-proprietary"
    },
    "replicate_from": [
        "chron",
        "sdr",
        "tdr",
        "hathi"
    ],
    "replicate_to": [
        "chron",
        "sdr",
        "tdr",
        "hathi"
    ],
    "restore_from": [
        "chron",
        "sdr",
        "tdr",
        "hathi"
    ],
    "restore_to": [
        "chron",
        "sdr",
        "tdr",
        "hathi"
    ],
    "fixity_algorithms": [
        "sha256"
    ],
    "name": "APTrust",
    "namespace": "aptrust",
    "api_root": "https://devops.aptrust.org/dpnode/",
    "ssh_pubkey": null,
    "created_at": "2015-02-25T15:27:39.842493Z",
    "updated_at": "2015-02-25T15:27:39.846688Z"
}
```
