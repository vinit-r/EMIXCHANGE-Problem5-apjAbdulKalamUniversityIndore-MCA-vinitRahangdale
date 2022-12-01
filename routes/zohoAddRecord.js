var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/addRecord', async function (req, res, next) {
  let response;

  try {
   const AccessToken = await axios.post('https://accounts.zoho.in/oauth/v2/token?refresh_token=1000.32734a850f7aa3c31f2849a1b5a5490f.c21cfb6d8744ff3e221aafd142ceb836&client_id=1000.K6EB64KBF3VDDSSDJRCJS7YM56CUYV&client_secret=48ee8f2c6aa8e4f8fd07390604cc4ed2dae4978e29&grant_type=refresh_token')

    const Data = req.body;
    response = await axios.post('https://www.zohoapis.in/crm/v3/Leads',Data , {headers:{Authorization:`Zoho-oauthtoken ${AccessToken.data.access_token}`}});
     
  } catch (error) {
    throw error;
  }
    res.send({
    message:"success",
    data:response.data
  });
});

module.exports = router;
