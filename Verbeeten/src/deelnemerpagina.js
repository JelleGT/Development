import React from 'react';
import ReactDOM from 'react-dom';
import './deelnemerpagina.css';

class Doneren extends React.Component{
  render(){
    return(
      <section id="doneren">
        <h1>Doneren</h1>
        <p>Iedere euro brengt ons dichterbij het doel: kanker effectief bestrijden in eigen regio. Wij schenken de opbrengst aan het Verbeeten Fonds, dat er op toeziet dat het geld optimaal wordt besteed. Wij stellen elke donatie enorm op prijs.</p>
        <p>Als je klaar bent met betalen, klik niet weg, maar wacht tot je weer terug bent op de Verbeeten Challenge site. Dan pas is je account volledig geactiveerd in ons systeem.</p>
        <ul>
          <li>Sponsor een deelnemer</li>
          <li>Sponsor een team</li>
          <li>Sponsor direct</li>
          <li>Word vriend van de Verbeeten Challenge</li>
        </ul>
        <form>
          <div id="bedragKnoppen">
            <button className="bedragKnop">&euro;5</button>
            <button className="bedragKnop">&euro;10</button>
            <button className="bedragKnop">&euro;15</button>
          </div>
          <input id ="textBedrag" type="text" placeholder="Ander bedrag invullen"/>
          <select>
            <optgroup label="Kies deelnemer, team of sponsor direct">
              <option value="">Kies deelnemer, team of sponsor direct</option>
              <option value="deelnemer">Deelnemer</option>
              <option value="team">Team</option>
              <option value="direct">Direct</option>
            </optgroup>
          </select>
          <select>
            <optgroup label="Kies uw bank">
              <option value="">Kies uw bank</option>
              <option value="rabobank">Rabobank</option>
              <option value="abnamro">ABN Amro</option>
              <option value="ing">ING</option>
              <option value="bunq">Bunq</option>
              <option value="triodos">Triodos</option>
            </optgroup>
          </select>
          <h2>Gegevens</h2>
          <input type="text" placeholder="Naam"/>
          <input type="text" placeholder="Bedrijfsnaam"/>
          <input type="text" placeholder="E-Mailadres"/>
          <textarea placeholder="Persoonlijk bericht" rows="3" cols="20">
          </textarea>
          <input type="checkbox" id="anodo" value="anoniem doneren"/>
          <label> Anoniem doneren</label>
          <button id="doneerKnop"></button>
        </form>
      </section>
    );
  }
}
class Deelnemers extends React.Component{
  render(){
    return(
      <section id="deelnemers">
        <article id="searchBar">
          <input id="zoekInput" type="text" placeholder="Zoek deelnemers/teams/kids/vrijwilligers" name="search"/>
          <button className="zoekKnop">Deelnemers</button><button className="zoekKnop">Teams</button><button className="zoekKnop">Kids</button><button className="zoekKnop">Vrijwilligers</button>
        </article>
        <div className="deelnemerVak">
          <img src="" alt="Afbeelding van de desbetreffende deelnemer"/>
          <h3>Susanne Stadhouders</h3>
          <p></p>
          <button></button>
        </div>
        <div className="deelnemerVak">
          <img src="" alt="Afbeelding van de desbetreffende deelnemer"/>
          <h3>Patrik van Herp</h3>
          <p></p>
          <button></button>
        </div>
        <div className="deelnemerVak">
          <img src="" alt="Afbeelding van de desbetreffende deelnemer"/>
          <h3>Nick van der Wal</h3>
          <p></p>
          <button></button>
        </div>
        <div className="deelnemerVak">
          <img src="" alt="Afbeelding van de desbetreffende deelnemer"/>
          <h3>Emma Pulles</h3>
          <p></p>
          <button></button>
        </div>
        <div className="deelnemerVak">
          <img src="" alt="Afbeelding van de desbetreffende deelnemer"/>
          <h3>Marieke van de Rijt</h3>
          <p></p>
          <button></button>
        </div>
        <div className="deelnemerVak">
          <img src="" alt="Afbeelding van de desbetreffende deelnemer"/>
          <h3>Susanne Stadhouders</h3>
          <p></p>
          <button></button>
        </div>
      </section>
    );
  }
}
export default Doneren;
export {
  Deelnemers
};
