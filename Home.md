# Overivew

EarthDiver is an implementation of a recommended REST API for use in the DPN Federated network of Nodes.  It serves as an example of how a common REST API could be implemented for a DPN First Node.  

Documentation of the API will designate specific as either EXTERNAL or INTERNAL

*EXTERNAL* endpoints MUST be implemented as documented by any node to honor the DPN REST API contract.  The common portion of the API is purposefully kept to a minimum so as to provide a simple common later that grants implementations the flexibility to address localized or optional features as best suites them.

*INTERNAL* endpoints will cover optional api endpoints, calls or returns that are part of the localized implementation and workflows surrounding using EarthDiver as your API server if you so choose.

See Pages on specific topics or API calls for more information.

#  Benefits of Approach

There are a number of benefits of this approach to solving this problem.  Some are listed here in no particular order.

*  The system focuses on data over system state, which enables better recovery 
*  It exposes data for all operations to any client that wishes to interact with or audit the system.
*  It allows on demand direct access to data through calls to any endpoint without blocking.
*  It adopts a pull paradigm for moving content which allows nodes to throttle as needed.
*  It tracks data on the state and process of individual transfers and registry updates. 
*  It adds the concept of explicit Node profiles for decision making.
*  It adopts an explicitly request/response protocol that results in either a timeout or status code response for better handling.
*  Broad support for REST across all major code libraries and strong best practices community.
*  It uses client/server communication with individual user contexts and authorization/authentication.