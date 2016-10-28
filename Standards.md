## Description

This page defines standard values for various fields.  

### DPN Format Date Time

All times are UTC.  DPN does not synchronize clocks, but instead expects clocks to be reasonably accurate within a few seconds.  DPN nodes must not rely on other nodes' clocks being accurate.  

The format is as follows:

    YYYY-MM-DDTHH:MM:SSZ


[All DPN Date Time values must conform to ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm)


Example:
    
    2015-03-13T15:40:05Z

### Fixity Algorithms

Field: "fixity_algorithm"

|Name|Representation|
|----|--------------|
|SHA256|"sha256"|

The fixity is **__always__** calculated on the tagmanifest-<algorithm>.txt file.  
This includes both transfer and in-place fixity.

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

### Space Calculations

All DPN space calculations will use the base 10 representation.

|Metric|Value   |
|------|--------|
|KB    |1000    |
|MB    |1000**2 |
|GB    |1000**3 |
|TB    |1000**4 |
|PB    |1000**5 |

Reference: https://en.wikipedia.org/wiki/Gigabyte
