const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cheerio = require('cheerio');
// const dbConnect = require("./db/dbConnect");
const app = express();
const port = 3002;

const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://Missy1409:Allison_63@quotes.lv6nkbj.mongodb.net/?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// dbConnect();

function extractTextFromHTML(html) {
    const $ = cheerio.load(html);
    return $.text();
  }

  async function connectToMongoDB() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    try {
      // Connect to MongoDB
      await client.connect();
  
      console.log('Connected to MongoDB');
      
     // You can now perform database operations here
     // Example: Create a collection
        const db = client.db('mydatabase2');
        const collection = db.collection('mycollection2');

        // Define the document to insert
    const newDocument = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com',
      };
  
      // Insert the document
      const result = await collection.insertOne(newDocument);
      console.log('Inserted document:', result.ops[0]);
      
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    } finally {
      // Close the MongoDB connection when done
      await client.close();
    }
  }
  
  // Call the function to connect to MongoDB
  connectToMongoDB();


// POST endpoint to handle incoming data
app.post('/api/endpoint', (req, res) => {
  try {
    // Access the data sent from the frontend
    const { data } = req.body;

    // Process the data (e.g., save it to a database)
    // In this example, we'll simply log it
    console.log('Received data from the frontend:', extractTextFromHTML(data));
    
    //connect to gcp
    //answer = sendToGCP()

    //connect to mongodb

    //connect to twilio
    

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

function sendToGCP(){

}

function sendToMongoDB(){ 
    ourString = "mongodb+srv://Missy1409:Allison_63@quotes.lv6nkbj.mongodb.net/?retryWrites=true&w=majority"
}