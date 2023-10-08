import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import React, { useState } from 'react';
import axios from 'axios';
//import MainBody from ""


function App() {

  const editorRef = useRef();

  // Define a state variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value when it changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // const onClickHandler = async () => {
  //   try {
  //     // Send a POST request to the Node.js backend
  //     console.log('sent')
  //     alert(editorRef.current.getContent()+inputValue);

  //     const response = axios.post('/api/sendData', {
  //       key1: editorRef.current.getContent(),
  //       key2: inputValue,
  //     });

  //     alert('main test');

  //     // Handle the response from the backend
  //     console.log('Response from backend:', response.data);
  //   } catch (error) {
  //     console.error('Error sending data:', error);
  //   }
  // };

  const onClickHandler = (e) => {
    e.preventDefault();
    // Send the inputValue to the backend here
    // Example fetch request:
    fetch('http://localhost:3002/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: editorRef.current.getContent() }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Response from backend:', data);
        // Handle the response from the backend as needed
        alert('went well');
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle errors, such as network issues or server errors
        alert('did not go well');
      });
  };


    // Define CSS styles for the Editor
    const editorStyles = {
      width: '400px', // Adjust the width as needed
      height: '300px', // Adjust the height as needed
      border: '1px solid #ccc',
      padding: '100px',
    };
  

  return (
    <div>
      <div style={editorStyles}>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
        />
      </div>

      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />

      <button 
        type="button"
        onClick = {onClickHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
