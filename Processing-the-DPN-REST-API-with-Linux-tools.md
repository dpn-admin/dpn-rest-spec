## Using CURL

The Linux curl command can be useful for experimenting with the DPN Rest API.
Another useful Linux tool (for processing Json) is jq http://stedolan.github.io/jq/

For these examples - set your security token and the hostname of the DPN Rest server into environment variables.

Be sure to put a trailing slash on your URLs.

To use jq to pretty print the output of one of the commands just pipe to 'jq "." '

## Get a list of nodes
`curl  --header  "Authorization: token $token"  http:/${host}/api-v1/node/`

## Get a list of my all of my transfers
`curl  --header  "Authorization: token $token"  http://${host}/api-v1/transfer/`

## Get the JSON for a specific transfer
(Assuming event id such as aptrust-2 is in environment variable event_id)
`curl  --header  "Authorization: token $token"  http://${host}/api-v1/transfer/${event_id}`



## Change status of a transfer
