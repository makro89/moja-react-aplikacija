import React from "react";
import KorisnikKomponenta from `.KorisniKomponenta`;
import NoviKorisnikKomponenta from `.NoviKorisnikKomponenta`;

export default class AppForme2 extends React.Component {
    state = {
        korisnici: [
            {id: 1, ime: 'Ivan', godine: 30},
            {id: 2, ime: 'Marko', godine: 35},
            {id: 3, ime: 'Ana', godine: 25},
        ],
    };

   handleButtonPress = () => {
       const { korisnici } = this.state;

       const noviKorisnici = korisnici.map(korisnik) => {
           return {...korisnik, godine: korisnik.godine + 1};
       
   });
    
this.setState({ korisnici: noviKorisnici});
   };

   handleNameChange = (event, index) => {
       const { korisnici } = this.state;
       const noviKorisnici = [...korisnici];

       noviKorisnici[index].ime = event.target.value;
       this.setState({ korisnici: noviKorisnici});
   };

   handleDeleteUser = index => {
       let noviKorisnici = [...this.state.korisnici];
       noviKorisnici.splice(index, 1);

       this.setState({ korisnici: noviKorisnici});
   }

addNewUser = ({ ime, godine}) => {
    const noviKorisnik = {
        id: `${ime}_${new.Date().getMilliseconds}`,
        ime,
        godine,
    };
    this.setState({ korisnici: [...this.state.korisnici, noviKorisnik]});
};

render( {
    const { korisnici } = this.state;

    return (
        <div>
        <h1React aplikacija</div>
        <p>5.15 - Forme 2</p>
        <button onClick={this.handleButtonPress}>Promjena godina</button>
        </div>
    )
})





  