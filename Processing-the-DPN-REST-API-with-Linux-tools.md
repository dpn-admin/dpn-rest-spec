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
Do a PUT operation back to the transfer object - setting the status to 'A'.

`curl -vX PUT  --header "Content-Type: application/json" --header  "Authorization: token $token"  -d '{"node": "tdr", "dpn_object_id": "36ca7c35-3903-4cc9-bb8e-f201451c44a6", "status": "A", "event_id": "aptrust-372", "protocol": "R", "link": "tdrdpn@dpn.nodename.org:outgoing/36ca7c35-3903-4cc9-bb8e-f201451c44a6.tar", "size": 1712739275, "receipt": null, "fixity": null, "valid": null, "created_on": "2014-11-14T20:06:42.061256Z", "updated_on": "2014-11-14T20:06:42.073742Z"}' http://${host}/api-v1/transfer/aptrust-372/`
