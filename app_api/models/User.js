/* 
 *  /personalAdvisor
 *      /app_api
 *         /models
 *            /UserModel.js
 * 
 * MODEL for User database access
 */

// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
    _id: Object,
   logonId: {type: String, required: true},
   firstName: {type: String, required: true},
   lastName: {type: String, required: true}
});

mongoose.model('User', userSchema);
