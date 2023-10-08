const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cheerio = require('cheerio');
const app = express();
const port = 3003;

// Middleware
app.use(cors());
app.use(bodyParser.json());


function extractTextFromHTML(html) {
    const $ = cheerio.load(html);
    return $.text();
  }

  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://Missy1409:Allison_63@quotes.lv6nkbj.mongodb.net/?retryWrites=true&w=majority";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function sendToMongoDB(number, message, sent) {
    console.log('we here')
    const jsonData = {
      number: number,
      message: message,
      sent: sent
    };
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
  
      const database = client.db("QuoteoftheDay");
      const collection = database.collection("List_Quotes");
  
      const result = await collection.insertOne(jsonData);
      console.log("Number of documents inserted: " + result.insertedCount);
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      console.log("Disconnected from MongoDB!");
    }
  }
  
  // Call the function to connect to MongoDB
  //connectToMongoDB();

  const sendTwilioMessage = async (messageBody, toPhoneNumber) => {
      const accountSid = 'AC10fe88aec3f156f0bc460ddfa3ef7e04';
      const authToken = '5953ba9ac38f1a1f1a941598a254b9de';
    
      const twilio = require('twilio');
      const client = twilio(accountSid, authToken);
    
      try {
        const message = await client.messages.create({
          body: messageBody,
          from: '+18556601642',
          to: toPhoneNumber
        });
        console.log(`Message sent with SID: ${message.sid}`);
      } catch (error) {
        console.error(error);
      }
    };

    const {GoogleAuth} = require('google-auth-library');
    async function sendToGCP(Quote){
      const auth = new GoogleAuth({
        keyFile: '/Users/misaalsingh/Documents/Mongo_Read_Wrie/Quote-Of-The-Day/backend/thematic-garage-401321-1a3da50f8c79.json', // Path to your JSON key file
        scopes: ['https://www.googleapis.com/auth/cloud-platform'],
      });
    
      // Get an authenticated client
      const client = await auth.getClient();
    
      // Now you can use the `client` object to make authenticated requests
      const apiUrl = "https://us-central1-aiplatform.googleapis.com/v1/projects/307435115889/locations/us-central1/endpoints/3240078248125661184:predict";
      const jsonData = {
        instances: [[Quote]]
      };
    
      const response = await client.request({
        url: apiUrl,
        method: 'POST',
        data: jsonData,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      console.log('Response data:', response.data);
    
      const prediction = response.data.predictions[0][0];

      if (prediction > 0.001 ){
        return 0

      }
      else{
        return 0;
      }


      return Math.round(prediction);
    }

    async function handlePrediction(message, number) {
      try {
        // Call the sendToGCP function with a quote
        const prediction = await sendToGCP(message);
    
        // Use the prediction value in your code
        console.log('Received Prediction:', prediction);
    
        // Perform further actions based on the prediction value
        if (prediction == 0) {
          console.log('Prediction indicates a positive sentiment.');
          sendTwilioMessage(message, number);
          console.log('Sent to Twilio')
          alert('Message positively received!');
          // Send a Twilio message

          // Do something for positive sentiment
        } else {
          console.log('Prediction indicates a negative sentiment.');
          alert('Message not positive enough :(');

          // Do something for negative sentiment
        }
        return prediction;

      } catch (error) {
        // Handle errors that might occur during the API request
        console.error('Error:', error);
      }
    }
    
    // Call the function
    
    
    

// POST endpoint to handle incoming data
// POST endpoint to handle incoming data
app.post('/api/endpoint', (req, res) => {
  try {
    // Access the data sent from the frontend
    const { data } = req.body;
    const { data2 } = req.body;

    // Process the data (e.g., save it to a database)
    // In this example, we'll simply log it
    console.log('Received data from the frontend:', extractTextFromHTML(data));
    console.log('Received data from the  also:', extractTextFromHTML(data2));

    message = extractTextFromHTML(data)
    phoneNumber = extractTextFromHTML(data2)

    pred = handlePrediction(message, phoneNumber);
    sendToMongoDB(message, phoneNumber, pred).catch(console.dir);

    
    // Use the prediction value in your code

    // Perform further actions based on the prediction value

    // Send a response back to the frontend
    res.status(200).json({ message: 'Data received and processed successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


function sendToMongoDB(){ 
    ourString = "mongodb+srv://Missy1409:Allison_63@quotes.lv6nkbj.mongodb.net/?retryWrites=true&w=majority"
}