// import './a';
// console.log('hellowurld~!');

import WebpackLogo from '.images/webpack_logo.';

document.addEventListener('DOMCContentLoaded', () => {
    const img = document.createElement('img');
    img.src = WebpackLogo;
    document.body.append(img);
});