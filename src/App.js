import logo from './logo.svg';
import './App.css';
import QRCode from "react-qr-code";
import { useState } from 'react';

import collegeLogo from './img/logo.png';

function App() {
  const [text, setText] = useState("");
  function generateQR(e) {
    setText()
  }
  
  function handleChange(e) {
    setText(e.target.value)
  }
  <div class="max-w-5xl m-auto">
    <div class="text-xl font-bold text-white">QR Code Generator</div>
  </div>
  return (

    <div classname="App">
      <div>
        <img className='logo' src={collegeLogo} alt='college-logo' />
      </div>
      <h1>
        QR CODE GENERATOR
      </h1>
      <QRCode value={text} />
      <div classname="input-here">
        <p>Enter the generate code</p>
        <input types="text" value={text} onChange={(e) => { handleChange(e) }} />
        <form id="generate-form" class="mt-4">
          <h3 class="my-2">Have A Nice Day</h3>
        </form>
      </div>
      <div class="w-1/3 self-center">
        <img src="img/qr-code.svg" alt="" />
      </div>

    </div>

  );
}

export default App;