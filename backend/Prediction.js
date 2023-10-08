const {GoogleAuth} = require('google-auth-library');

async function authenticateAndMakeRequest(Quote) {
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
}

// Call the function to authenticate and make the request
authenticateAndMakeRequest("Patience is a virtue");
