import React from 'react';
import Home from './Home';
import { Route, Link, Routes, BrowserRouter} from "react-router-dom";
import Adresa from './Adresa';
import About from './About';

const Kontakt = () => {
    return (
      <div>
        <h2>Kontakt</h2>
        <p>Tel: +385 1 2332 861</p>
        <p>E-mail: info@algebra.hr</p>
      </div>);
  }

export default function AppRouter() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adresa/">Adresa</Link>
          </li>
          <li>
            <Link to="/kontakt/">Kontakt</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/adresa/" element={<Adresa/>} />
        <Route path="/about/" element={<About/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}