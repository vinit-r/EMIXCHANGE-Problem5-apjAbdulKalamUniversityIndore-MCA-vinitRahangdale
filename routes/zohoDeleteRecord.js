const { default: axios } = require('axios');
const { save } = require('debug/src/browser');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.delete('/deleteRecord', async function(req, res, next) {
let response;
try {
    const AccessToken= await axios.post('https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.32734a850f7aa3c31f2849a1b5a5490f.c21cfb6d8744ff3e221aafd142ceb836&client_id=1000.K6EB64KBF3VDDSSDJRCJS7YM56CUYV&client_secret=48ee8f2c6aa8e4f8fd07390604cc4ed2dae4978e29&grant_type=refresh_token')
    
    let id = req.query.id;
    response = await axios.delete(`https://www.zohoapis.in/crm/v3/Leads?ids=${id}`,{headers:{Authorization:`Zoho-oauthtoken ${AccessToken.data.access_token}`}})
   
}   catch (error) {
    throw error;
}
    res.send({
    message:"Success",
    data:response.data
    
  });
});

module.exports = router;
