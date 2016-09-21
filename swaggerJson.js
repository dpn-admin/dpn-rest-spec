var SwaggerParser = require('swagger-parser');

var options = {
  '$refs': {
    'internal': true,
    'external': true,
    'circular': true
  },
  'allow': {
    'yaml': true
  },
  'validate': {
    'schema': true,
    'spec': true
  }
}

SwaggerParser.validate('dist/swagger.yaml', options)
  .then(function(api) {
    var str = JSON.stringify(api, null, 2); // indent 2 spaces
    console.log(str);
  })
  .catch(function(err) {
    console.error(err);
  });




