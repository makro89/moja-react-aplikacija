import react from "react";

export default class KorisnikKlasa extends react.Component{
    render() {
        const {ime, godine, onButtonClick} = this.props;
        return (
            <div>
               <p>Moje ime je {ime} i imam {godine} godina.</p>
            <button onClick={onButtonClick}>
                Klikni me!
                </button>
            </div>
        );
    }
} 