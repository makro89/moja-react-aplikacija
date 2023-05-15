import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import AppAPI from './components/AppAPI';
//import App from './components/App';
// ovdje radimo switch izmedju singlepage app, konkretno za zadatak Liste ucitavamo App iz AppLista
// 5.13 - Liste
//import App from './components/AppLista';
// 5.14 - Forme 1
//import App from './components/AppForme1';
// 5.15 - Forme 2
//import AppForme2 from './components/AppForme2';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppAPI/>);