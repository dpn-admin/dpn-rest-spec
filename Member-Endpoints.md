## Endpoints and Supported Methods

### GET `/<api_version>/member/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Authorization Failed|401|

#### Description

Returns a list of Members.

#### Permissions
* Standard

#### Querystring Options
* **page_size** = Number of max results per page.
* **page** = Page number to return, starting at 1.  For use with page_size.


#### Example Return For: `/api-v1/member/`
```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "uuid": "5e4bc824-9be2-44ea-a22c-d1e74afb30c3",
      "name": "test-user",
      "email": "test@test.calm"
    },
    {
      "uuid": "a58231cd-6573-4451-b767-f380ee08922c",
      "name": "HathiTrust",
      "email": "bhock@umich.edu"
    }
  ]
}
```

---
### GET `/<api_version>/member/<member:uuid>/`

|HTTP Method|API Type|
|--------|-----------|
|GET|EXTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Authorization Failed|401|

#### Description

Returns data on a Member as determined by the uuid.


#### Permissions
* Standard

#### Querystring Options
* None

#### Example Return for: `/api-v1/member/5e4bc824-9be2-44ea-a22c-d1e74afb30c3/`
```json
{
  "uuid": "5e4bc824-9be2-44ea-a22c-d1e74afb30c3",
  "name": "test-user",
  "email": "test@test.calm"
}
```

---
### POST `/<api_version>/member/`

|HTTP Method|API Type|
|--------|-----------|
|POST|INTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|201|
|Bad Resource|400|
|Duplicate|409|
|Authorization Failed|401|
|Authorized, Not Permitted|403|

#### Description

Creates a Member. The body is the same as the data structure for the Member.

#### Permissions
* API Admins only.

---
### PUT `/<api_version>/member/<uuid>/`

|HTTP Method|API Type|
|--------|-----------|
|PUT|INTERNAL|

|Case|HTTP Code|
|----|---------|
|Success|200|
|Not Found|404|
|Bad Resource|400|
|Illegal Transition|400|
|Authorization Failed|401|
|Authorized, Not Permitted|403|

Updates a single Member matching the uuid. The body of the put is the same as the data structure listed for a single record above.

#### Permissions
* API Admins Only.

