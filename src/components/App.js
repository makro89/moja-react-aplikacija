import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';
 
import randomstring from 'randomstring';
import { broj1, broj2, Osoba, pi, imeAplikacije as mojaVarijabla, sum, oduzmi  } from './utilities';

//import Osoba from './utilities/Person';
//import { sum, pi, imeAplikacije as mojaVarijabla, num1 as broj1, num2 as broj2 } from './Utility';

// 5.5
import { Komponenta1 } from'./Komponenta1';
import { Komponenta2 } from './Komponenta2';
import Komponenta3 from './Komponenta3';

import { GlavnaKomponenta } from './GlavnaKomponenta';
//import React from "react";
import {WelcomeFunkcija} from './WelcomeFunkcija';
import {WelcomeKlasa} from './WelcomeKlasa';
import React from 'react';
import KorisnikKlasa from './KorisnikKlasa';
import KorisnikFunkcija from './KorisnikFunkcija';
import KorisnikDijete from './KorisnikDijete';



// function WelcomeFunkcija() {
//   return (
//     <h2>Welcome! Komponenta definirana funckijom.</h2>
//   );
// }

// class WelcomeKlasa extends React.Component {
//  render() {
//    return (
//     <h6>Welcome! Komponenta definirana klasom.</h6>
//    );
//  }
// }

class App extends React.Component {
  state = {
    korisnici : [
      {ime: "MArko", godine: 27 },
      {ime: "Katarina", godine: 21 },
      {ime: "Nataša", godine: 20 },
      {ime: "Sunčica", godine: 5 },
    ],
    dodatni_tekst : "Ona voli plivati i gnjuriti."
    };

    promijeniGodine = () => {
     // console.log("kliknuli smo na button");
      const {korisnici} = this.state;
      const novikorisnici = korisnici.map( korisnik =>
        {
          return {...korisnik, godine: korisnik.godine + 1 }}
        );
        this.setState({korisnici: novikorisnici});
    }
  render() {

    const {korisnici, dodatni_tekst} = this.state;

  var zbroj = sum(10, 12) * pi + (broj1 * broj2);
  var rndStr =randomstring.generate({
    length: 8
  });
  console.log("Random string = " + rndStr);
  var od = oduzmi(broj2, broj1);
  ////////
  //5.5
  var prva = "prvi-text";
  var druga = "drugi-text";

  //return (<Komponenta1/>);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
        {mojaVarijabla}, {rndStr}, {Osoba.name}, Godine: {Osoba.godine}, {zbroj}, {od}
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
      </header>
      <Komponenta1/>
      <Komponenta2 podatak1={prva}/>
      <Komponenta3 podatak1={prva} podatak2={druga}/>

      <GlavnaKomponenta/>
      <WelcomeFunkcija />
      <WelcomeKlasa/>

<KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine} onButtonClick={this.promijeniGodine}/>
<KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine}onButtonClick={this.promijeniGodine}/>

<KorisnikFunkcija ime={korisnici[2].ime} godine={korisnici[2].godine}/>

<KorisnikDijete ime={korisnici[3].ime} godine={korisnici[3].godine}>
{dodatni_tekst}
</KorisnikDijete>


    </div>
  );
}
}

export default App;
