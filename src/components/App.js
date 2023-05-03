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
import Korisnik from './Korisnik';


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





const {korisnici} = state;
  
function handleNameChanged (event, index) {
  console.log("handleNameChanged");
  const { korisnici } = state;
  const noviKorisnici = [...korisnici];
  noviKorisnici[index].name = event.target.value;
  // setState ({korisnici: noviKorisnici});
  state = {korisnici: noviKorisnici};
  App(state);
}


function App(state){

  if state === undefined 
  var state = {
    korisnici: [
      {id: 1, name: "Marko", years: 34},
      {id: 2, name: "Nataša", years: 20},
      {id: 3, name: "Pero", years: 28},
      {id: 4, name: "Iva", years: 37}
    ]
  }


    
    return (

      <div className='App'>
      {
        korisnici.map((korisnik, index) => (
        
        <Korisnik 
        key={korisnik.id}
        name={korisnik.name}
        years={korisnik.years}
        onNameChanged={event => handleNameChanged(event, index)}
        /> 
        ))
        }
    </div>
    )
      }

  
//   const [korisnici, setKorisnici] = React.useState ([
//       {ime: "Marko", godine: 27 },
//       {ime: "Katarina", godine: 21 },
//       {ime: "Nataša", godine: 20 },
//       {ime: "Sunčica", godine: 5 },
    
//     //dodatni_tekst : "Ona voli plivati i gnjuriti."
//   ]);

//     const promijeniGodine = () => {
//      // console.log("kliknuli smo na button");
//      // const {korisnici} = this.state;
//       const novikorisnici = korisnici.map( korisnik =>
//         {
//           return {...korisnik, godine: korisnik.godine + 1 }}
//         );
//         setKorisnici(novikorisnici);
//     }

//     const promijeniIme = event => {
//       console.log("test");
//     }
 

//     //const {korisnici, dodatni_tekst} = this.state;

//   var zbroj = sum(10, 12) * pi + (broj1 * broj2);
//   var rndStr =randomstring.generate({
//     length: 8
//   });
//   console.log("Random string = " + rndStr);
//   var od = oduzmi(broj2, broj1);
//   ////////
//   //5.5
//   var prva = "prvi-text";
//   var druga = "drugi-text";

//   //return (<Komponenta1/>);
  
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
        
//         <p>
//         {mojaVarijabla}, {rndStr}, {Osoba.name}, Godine: {Osoba.godine}, {zbroj}, {od}
//         </p>
        
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//           </a>
//       </header>
//       <Komponenta1/>
//       <Komponenta2 podatak1={prva}/>
//       <Komponenta3 podatak1={prva} podatak2={druga}/>

//       <GlavnaKomponenta/>
//       <WelcomeFunkcija />
//       <WelcomeKlasa/>

// <KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine} onButtonClick={promijeniGodine}/>
// <KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine}onButtonClick={promijeniGodine}/>

// <KorisnikFunkcija ime={korisnici[2].ime} godine={korisnici[2].godine} onNameChange={promijeniIme}/>

// <KorisnikDijete ime={korisnici[3].ime} godine={korisnici[3].godine}>
// neki tekst
// </KorisnikDijete>


//     </div>
//   );
// }


export default App;
