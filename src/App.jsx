import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [generatedId, setGeneratedId] = useState('');

  const generateId = () => {
    const id = uuidv4();
    setGeneratedId(id); 
    localStorage.setItem('lastGeneratedId', id); 
    console.log('Generated ID:', id);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedId);
    console.log('Copied to clipboard:', generatedId);
    alert('ID copied to clipboard!');
  };

  return (
    <>
      <div className='wrap'>
        <textarea placeholder='ID' name="text" id="idgenerator" value={generatedId} readOnly  ></textarea>
        <div className='box'>
        <button className='btn' onClick={generateId}>Generate</button>
        <button className='btn' onClick={copyToClipboard}>Copy to Clipboard</button>
        </div>
      </div>
    </>
  );
}

export default App;

