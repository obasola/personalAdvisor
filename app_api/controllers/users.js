/*
 * /personalAdvisor
 *      /app_api
 *         /controllers
 *            /users.js
 *
 * CONTROLLER for User access
 */

var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports.userCreate = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.userDelete = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.userFindById = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.userListAll = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.userUpdate = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}


var sendJsonResponse = function(res, status, content) {
    res.status = 200;
    res.json(content);
}
