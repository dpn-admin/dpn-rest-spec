// https://github.com/mohsen1/multi-file-swagger-example

var resolve = require('json-refs').resolveRefs;
var YAML = require('yaml-js');
var fs = require('fs');

var root = YAML.load(fs.readFileSync('index.yml').toString());
var options = {
  filter        : ['relative', 'remote'],
  loaderOptions : {
    processContent : function(res, cb) {
      cb(null, YAML.load(res.text));
    }
  }
};
resolve(root, options).then(function (results) {
  console.log(YAML.dump(results.resolved));
});
