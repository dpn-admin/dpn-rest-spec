var SwaggerParser = require('swagger-parser');

SwaggerParser.bundle('dist/swagger.yaml')
  .then(function(api) {
    console.log(JSON.stringify(api));
  })
  .catch(function(err) {
    console.error(err);
  });

