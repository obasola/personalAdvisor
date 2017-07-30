/*
  * /personalAdvisor
 *      /app_api
 *         /controllers
 *            /accounts.js
 *
 * CONTROLLER for Account access
 */

var mongoose = require('mongoose');
var Account = mongoose.model('Account');

module.exports.accountCreate = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.accountDelete = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.accountFindById = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.accountListAll = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

module.exports.accountUpdate = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}
module.exports.accountSchedules = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}
module.exports.accountScheduleById = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}
module.exports.accountPaymentsById = function(req,res) {
    sendResponse(res, 200, {"status":"success"});
}

var sendResponse = function(res, status, content) {
    res.status = 200;
    res.json(content);
}
