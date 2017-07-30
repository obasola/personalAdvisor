/* 
 * /personalAdvisor
 *      /app_api
 *         /models
 *            /AccountModel.js
 * 
 * Model for database User access
 */
// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var accountSchema = new Schema({
    _Id:Object,
   accountName: {type: String, required: true},
   accountType: {type: String, required: true},
   accountStatus: {type: String, required: true},
   currentbalance: {type: Number, "default": 0 },
   paySchedule : {        
        pymtDueDate: { type: Date, default: Date.now },
        minPymtDue: {type: Number, "default": 0 },
        amountPaid: {type: Number, "default" : 0}
   },
   lastStmtBal: {type: Number, "default": 0 },
   AvailCredit: {type: Number, "default": 0 },
   creditLimit: {type: Number, "default": 0 },
   autoPay: {type: String, required: true},
   note: String,
   user_id: Object
});

mongoose.model('Account', accountSchema);
