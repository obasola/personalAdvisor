/*
 * /personalAdvisor
 *      /app_api
 *         /routes
 *            /index.js
 *
 * PRIMARY ROUTER for Account and USER api access
 */
var express = require('express');
var router = express.Router();
var ctrlAccounts = require('../controllers/accounts');
//var ctrlSchedules = require('../controllers', 'schedules');
var ctrlUsers = require('../controllers/users');

// Accounts
router.get('/accounts/list', ctrlAccounts.accountListAll);
router.post('/accounts/create', ctrlAccounts.accountCreate);
router.get('/accounts/find/:actId', ctrlAccounts.accountFindById);
router.put('/accounts/update/:actId', ctrlAccounts.accountUpdate);
router.delete('/accounts/delete/:actId', ctrlAccounts.accountDelete);

// Schedules
router.get('/accounts/schedules', ctrlAccounts.accountSchedules);
router.get('/accounts/schedule/:actId', ctrlAccounts.accountScheduleById);
router.get('/accounts/payments/:actId', ctrlAccounts.accountPaymentsById);

// Users
router.get('/users', ctrlUsers.userListAll);
router.post('/users', ctrlUsers.userCreate);
router.get('/users/:userId', ctrlUsers.userFindById);
router.put('/users/:userId', ctrlUsers.userUpdate);
router.delete('/users/:userId', ctrlUsers.userDelete);


module.exports = router;
