import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';

function App() {

  const [value, setValue] = useState()

  const editorRef = useRef();

  // Define a state variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value when it changes
  const handleInputChange = (event) => {
    console.log('hia')
    console.log(inputValue)
    setInputValue(event.target.value);
  };

  // const onClickHandler = async () => {
  //   try {
  //     // Send a POST request to the Node.js backend
  //     console.log('sent')
  //     alert(editorRef.current.getContent()+inputValue);

  //     const response = axios.post('/api/sendData', {
  //       key1: editorRef.current.getContent(),
  //       key2: inputValue,
  //     });

  //     alert('main test');

  //     // Handle the response from the backend
  //     console.log('Response from backend:', response.data);
  //   } catch (error) {
  //     console.error('Error sending data:', error);
  //   }
  // };

  const onClickHandler = (e) => {
    console.log('Sah dude')
    e.preventDefault();
    // Send the inputValue to the backend here
    // Example fetch request:
    fetch('http://localhost:3003/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: editorRef.current.getContent(), data2: inputValue}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from backend:', data);
        //console.log('Other response from b')
        // Handle the response from the backend as needed


        alert('Your message is being reviewed');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, such as network issues or server errors
        alert('Not enough Positivity from you :(');
      });
  };


    // Define CSS styles for the Editor
    const editorStyles = {
    };
  
  

  return (

    
    <div>
      <head>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
        {/* Include the plugins script */}
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/plugins/emoticons/plugin.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/plugins/autolink/plugin.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/plugins/autoresize/plugin.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/plugins/casechange/plugin.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/plugins/powerpaste/plugin.min.js"></script>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/plugins/quickimage/plugin.min.js"></script>
      </head>

      <div style={editorStyles}>
        <script src="https://cdn.tiny.cloud/1/445rii5o9318335hqvknsr52sj438b1ka0sluid7btzo0w96/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>

        <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          
          initialValue=
                    "
                    <center><h1>Welcome to RUforPositivity! 😊</h1>
                    <h5>Welcome to a place dedicated to spreading positivity and sharing uplifting stories and quotes with the Rutgers campus community. 💕</h5>
                    <h2>How it Works 🏗</h2>
                    <h5>Here at RUforPositivity, we believe in the power of positivity to brighten someone's day. You can join us in making a difference by sending a positive message to a fellow student or friend.</h5>
                
                    <h2>Share Positivity 📤 & Spread the Love ❤️</h2>
                    <h5>Use this text box here to craft your positive message. It can be a kind word, an inspiring quote, or a personal story that has uplifted you.</h5>
               
                    <h5>The positive words you write here will be anonymously sent to the phone number you provide below, bringing a ray of positivity into someone's life. Together, we can make Rutgers campus a happier place!</h5>
                
                    <h2>Got Questions or Need Help? 🤔</h2>
                    <h5>If you have any questions or need assistance with the RUforPositivity service, please feel free to contact us. We're here to help and support you. Contact us at ruforpositivity@rutgers.edu </h5>
                    <h5>If you require immediate medical or counseling assistance, please use the following contacts: Health Services: 848-932-7402 or Counseling Services: 848-932-7884 </h5>
                    <h5>We are committed to your well-being and are here to assist you in any way we can.</h5></center>
          
                "
          init={{
            selector: 'textarea',
            plugins: [
              'advlist lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
              'emoticons', // Add 'emoticons' plugin here
              'autolink',
              'spellchecker',
              'autoresize',
              'casechange',
              'powerpaste',
              'quickimage', 
            ],
            toolbar: 'undo redo emoticons casechange | blocks fontfamily fontsize | casechange bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons  charmap | removeformat | linkchecker | autoresize | powerpaste | quickimage',
            height: '560px',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
        />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter phone number... ie. +17326667264"
        style={{
          padding: '10px',             // Add padding for spacing
          border: '1px solid #ccc',    // Add a border
          borderRadius: '4px',         // Add some border radius for rounded corners
          boxShadow: 'none',           // Remove any box shadow
          fontSize: '16px',            // Increase font size
          width: '100%',               // Make the input span the entire width
          boxSizing: 'border-box',     // Include padding and border in the width
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '6vh' }}>
            <button
              type="button"
              onClick={onClickHandler}
              style={{
                backgroundColor: '#007bff', // Blue background color
                color: 'white',             // White text color
                border: '1px solid #007bff', // Add a border
                borderRadius: '4px',        // Add some border radius for rounded corners
                padding: '10px 20px',       // Add padding to make the button larger
                cursor: 'pointer',          // Show a pointer cursor on hover
                
              }}
            >
              Submit
            </button>
      </div>
    </div>
  );
}

export default App;