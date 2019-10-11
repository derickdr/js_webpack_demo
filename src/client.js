// import './a';
// console.log('hellowurld~!');

import React from 'react';
import ReactDOM from 'react-dom'
import WebpackLogo from './images/webpack_logo.png';
import './css/master.css'

// document.addEventListener('DOMCContentLoaded', () => {
//     const img = document.createElement('img');
//     img.src = WebpackLogo;
//     document.body.append(img);
// });

document.addEventListener('DOMCContentLoaded', () => {
    const root = document.createElement('div');
    document.body.append(root);
    ReactDOM.render(<img src={WebpackLogo} width="500px" height="100px" />, root);
});