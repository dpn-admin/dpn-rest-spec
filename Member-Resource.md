## Overview
A Member represents an institution who deposits data into DPN.

## Member Data Structure

The following is a data structure for an individual Node.
* **uuid** - String of the unique (UUIDv4) identifier for this member. _(read only)_
* **name** - The name the member goes by.
* **email** - A contact email for the member.

**Example Member Entry:**
```json
    {
        "uuid": "5e4bc824-9be2-44ea-a22c-d1e74afb30c3",
        "name": "test-lib",
        "email": "test-lib@library.edu"
    }
```
