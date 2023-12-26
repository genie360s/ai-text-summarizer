const express = require('express');
const app = express();
const port = 3000;

const summarizeText = require('./summarize.js');
const describeImage = require('./describe_image.js');

// Parses JSON bodies (as sent by API clients)
app.use(express.json());

// Serves static files from the 'public' directory
app.use(express.static('public'));

// Handle POST requests to the '/summarize' endpoint

app.post('/summarize', (req, res) => {
  // get the text_to_summarize property from the request body
   const text = req.body.text_to_summarize;
 
  // call your summarizeText function, passing in the text from the request
   summarizeText(text) 
     .then(response => {
        res.send(response); // Send the summary text as a response to the client
     })
     .catch(error => {
       console.log(error.message);
     });
 });

 // Handle POST requests to the '/describe' endpoint

 app.post('/describe_image', (req, res) => {

  // TODO: handle POST /describe_image request
   // get the image_to_text_property from the request body
   const imageurl = req.body.image_to_text_prompt;

   // call your generateImage function, passing in the text from the request
    describeImage(imageurl) 
      .then(response => {
         res.send(response); // Send the image as a response to the client
         console.log(response);
      })
      .catch(error => {
        console.log(error.message);
      });


});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});