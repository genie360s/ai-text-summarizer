// generate_image.js
require('dotenv').config();
const axios = require('axios');

async function describeImage(imageurl) {

  // INSERT CODE SNIPPET FROM POSTMAN BELOW
  let data = JSON.stringify({
    "inputs": imageurl,
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer ' + process.env['ACCESS_TOKEN']
    },
    data : data
  };
  
    
      try {
        const response = await axios.request(config);
        return response.data[0].generated_text;
      }
      catch (error) {
        console.log(error);
      }


}


module.exports = describeImage;