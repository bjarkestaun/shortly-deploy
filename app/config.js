var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));

// if(process.env.NODE_ENV === 'production') {
  mongoose.connect('mongodb://MongoLab-l:zeJPQzbSoEPpww0FLheAvTPTffOL5aU1625E5bFeq1g-@ds052408.mongolab.com:52408/MongoLab-l');
// } else {
//   mongoose.connect('mongodb://localhost:27017/shrty');
// }

module.exports = mongoose;
