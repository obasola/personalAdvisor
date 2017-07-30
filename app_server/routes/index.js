/*   
 * /personalAdvisor
 *      /app_server
 *         /routes
 *            /index.js
 *            
 *   SERVER-SIDE Routes         
 */
var express = require('express');
var ctrlMain = require('../controllers/main');
var router = express.Router();



/* GET home page. */
router.get('/', ctrlMain.index);



module.exports = router;
