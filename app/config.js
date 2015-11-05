var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));

// if(process.env.NODE_ENV === 'production') {
  mongoose.connect('mongodb://bjarke:bjarke@ds052408.mongolab.com:52408/shrty');
// } else {
//   mongoose.connect('mongodb://localhost:27017/shrty');
// }

module.exports = mongoose;
