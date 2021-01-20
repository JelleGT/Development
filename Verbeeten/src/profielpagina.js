import React from 'react'
import ReactDOM from 'react-dom';
import './profielpagina.css';
import image from './Woman.jpeg';

class Profiel extends React.Component{
  render(){
    return(
      <section id="headerProfiel">  {/*De hele sectie voor de profielinformatie*/}
        <div id="imageProfiel"> {/*Aparte div voor ruimte tussen de foto, maakt de werking van de flex iets makkelijker*/}
          <img src={image} alt="Profielfoto van betreffend persoon"/>
        </div>
        <div id="informatieProfiel">
          <h1 id="naamProfiel">Carla</h1>
          <p id="introProfiel">Hoi ik ben Carla! ik werk in het ziekenhuis bij de oncologie afdeling. Hier zie ik elke dag mensen leiden aan kanker. Ik loop elk jaar mee met de Verbeeten Challenge
          omdat ik wil dat er betere behandelmethodes komen tegen kanker. Ik zou het heel erg waarderen als jullie mij hier in willen steunen met een bijdrage of door met mij mee
          te lopen en zelf nog meer geld op te halen! </p>
          <div id="buttons"> {/*Aparte div voor de buttons zodat deze een eigen flex hebben*/}
            <button type="button">Steun Mij</button>
            <button type="button">Login</button>
          </div>
        </div>
      </section>
    );
  }
}
class Donaties extends React.Component{
  render(){
    return(
      <main>  {/*Het hele gedeelte van de donaties*/}
        <h2 id="kopDonaties">Donaties</h2>
        <div className="donatieAan">  {/*Iedere div is een aparte donatie*/}
          <section className="dataDonatie">
            <h2 className="naamPersoon">Anoniem</h2>
            <p className="datumDonatie">28 0ktober 2020</p>
          </section>
          <p className="berichtDonatie">Geen bericht achtergelaten</p>
          <h2 className="bedragDonatie">&euro;5.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Gerard</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Heel veel succes! Je kan het :)</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div><div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Mandy</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">succes!</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Anoniem</h2>
            <p className="datumDonatie">28 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Geen bericht achtergelaten</p>
          <h2 className="bedragDonatie">&euro;5.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Gerard</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Heel veel succes! Je kan het :)</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div><div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Mandy</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">succes!</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Anoniem</h2>
            <p className="datumDonatie">28 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Geen bericht achtergelaten</p>
          <h2 className="bedragDonatie">&euro;5.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Gerard</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Heel veel succes! Je kan het :)</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div><div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Mandy</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">succes!</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Anoniem</h2>
            <p className="datumDonatie">28 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Geen bericht achtergelaten</p>
          <h2 className="bedragDonatie">&euro;5.00</h2>
        </div>
        <div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Gerard</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">Heel veel succes! Je kan het :)</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div><div className="donatieAan">
          <section className="dataDonatie">
            <h2 className="naamPersoon">Mandy</h2>
            <p className="datumDonatie">3 oktober 2020</p>
          </section>
          <p className="berichtDonatie">succes!</p>
          <h2 className="bedragDonatie">&euro;10.00</h2>
        </div>
      </main>
    );
  }
}
export {
  Profiel, Donaties
};
