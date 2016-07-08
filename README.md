# DPN-REST-Wiki

This is the authoritative specification for DPN RESTful designs.  All implementations must meet this spec.

This repo and all content are the property of DPN.

The current swagger ui can be viewed temporarily at http://chronopolis01.umiacs.umd.edu

## Compiling the Spec

In order to compile, you'll need [nodejs](https://nodejs.org/en/). I was able to install 
it in my home directory and run it straight out of there

We use npm to do both pull dependencies and compile the spec. There's a `start` script defined
in package.json which is used to compile the script.
```
npm install
npm start
```

### Outputting to a file

A basic redirect can be used to push the compiled schema to a file:
`npm start | tail -n+5 > swagger.yaml`

### Running with a local swagger

1. Clone the [swagger-ui](https://github.com/swagger-api/swagger-ui) repository
2. Use npm to install dependencies and run swagger-ui
  * `npm install`
  * `npm run serve`
3. Copy the compiled spec to `swagger-ui/dist/html/yaml/swagger.yaml`
4. Check the swagger ui
  1. Navigate to localhost:8080
  2. Explore `http://localhost:8080/yaml/swagger.yaml`

Alternativelty, the index.html for swagger can be updated to point straight at the local swagger
spec instead of navigating to it.
