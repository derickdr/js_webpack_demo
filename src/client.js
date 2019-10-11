// import './a';
// console.log('hellowurld~!');

import React from 'react';
import ReactDOM from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import WebpackLogo from './images/webpack_logo.png';
import './css/master.css';

const App = () => {
    const position = [49.2125028, -122.9235534];
    return (
        <div>
            <Map center={position} zoom={13} height={800}>
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                    Codecore College.
                    <br />
                    New Westminster BC, V3M 6Z1
                    </Popup>
                </Marker>
            </Map>
        </div>
    );
  };

// document.addEventListener('DOMCContentLoaded', () => {
//     const img = document.createElement('img');
//     img.src = WebpackLogo;
//     document.body.append(img);
// });

document.addEventListener('DOMCContentLoaded', () => {
    const root = document.createElement('div');
    document.body.append(root);
    ReactDOM.render(<App />, root);
});