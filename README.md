# DPN-REST-Wiki

This is the authoritative specification for DPN RESTful designs.  All implementations must meet this spec.

This repo and all content are the property of DPN.

The current swagger ui can be viewed temporarily at http://chronopolis01.umiacs.umd.edu

## Compiling the Spec

In order to compile, you'll need [nodejs](https://nodejs.org/en/). I was able to install 
it in my home directory and run it straight out of there

We use npm to do both pull dependencies and compile the spec. There's a `resolve` script defined
in package.json which is used to compile the script and print it to stdout.
```
npm install
npm start
```

### Outputting to a file

There's a `build` script in the package.json that lets us build the spec into the dist
directory. As it's a script it needs to be called from the `run` command.

```
npm run build
```

### Running with a local swagger

The swagger-ui is included in the package.json as one of the projects dependencies.
Using it is now as simple as running:
```
npm run serve
```

We use gulp to serve the swaggerui on localhost:8080. The compiled yaml is located 
on `http://localhost:8080/swagger.yaml`, and can be used by swagger.
