var mongoose = require('../config');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var linkSchema = new Schema({
  url: {type: String, },
  base_url: {type: String},
  code: {type: String},
  title: {type: String},
  visits: Number
});

linkSchema.methods.createCode = function() {
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0, 5);
};

linkSchema.pre('save', function(next) {
  this.createCode();
  next();
});

var Link = mongoose.model('Link', linkSchema);
module.exports = Link;
