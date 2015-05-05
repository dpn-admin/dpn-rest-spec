## Description

This page defines standard values for various fields.  

### DPN Format Date Time

All times are UTC.  DPN does not synchronize clocks, but instead expects clocks to be reasonably accurate within a few seconds.  DPN nodes must not rely on other nodes' clocks being accurate.  

The format is as follows:

    YYYY-MM-DDTHH:MM:SSZ

Example:
    
    2015-03-13T15:40:05Z

### Fixity Algorithms

Field: "fixity_algorithm"

|Name|Representation|
|----|--------------|
|SHA256|"sha256"|

The fixity is **always** calculated on the tagmanifest-<algorithm>.txt file.  

### Protocols

Field: "protocol"

|Name|Representation|
|----|--------------|
|Rsync|"rsync"|

### Storage Regions

Field: "storage": { "region" }

|Name|Representation|
|----|--------------|
|Default|"default"|

Any two nodes with the "default" storage region are considered to be in a separate region for the purposes of 
allowing / disallowing replication to or from those nodes.

### Storage Types

Field: "storage": { "type" }

|Name|Representation|
|----|--------------|
|Default|"default"|

Any two nodes with the "default" storage type are considered to use a different type for the purposes of 
allowing / disallowing replication to or from those nodes.
