import React from 'react';
import ReactDOM from 'react-dom';
import brainImage from './brainscans.png';

class OverOns extends React.Component{
  render(){
    return(
      <section>
        <h1>Algemeen</h1>
        <h2>Waarom mee doen?</h2>
        <p>
          Bijna iedereen kent wel iemand die kanker heeft (gehad) of heeft zelf deze ervaring. De Verbeeten Challenge biedt
          een podium voor iedereen om zich ‘samen sportief tegen kanker’ in te zetten.
          Je hoeft niet per sé over een ijzeren conditie te beschikken. Probeer gewoon naast je inschrijfgeld extra sponsorgeld
          te werven. En doe mee aan het sportieve onderdeel waarmee jij jezelf uitdaagt. Dat is wat telt!<br/>
          SAMEN SPORTIEF TEGEN KANKER
        </p>
        <h1>Ons doel</h1>
        <h2>Geld voor onderzoek</h2>
        <p>
          Alle opbrengsten van de Verbeeten Challenge gaan naar het Verbeeten Fonds. Zij stimuleren onderzoek naar
          patiëntvriendelijke behandelmethodes door het Instituut Verbeeten, het regionaal kankerbehandelcentrum in
          Tilburg, Breda en Den Bosch. Instituut Verbeeten levert al meer dan 60 jaar zorg op het gebied van radiotherapie
          en nucleaire geneeskunde. Het is echter geen academisch instituut, zij moeten hun specifieke onderzoeken zelf
          bekostigen. Onderzoeken en diverse behandelmethodes kosten veel geld.
        </p>
        <h2>Het doel van editie 2020: De Hyperarc</h2>
        <p>
          Met de opbrengst van de Verbeeten Challenge 2020 kan Instituut Verbeeten starten met het onderzoek naar de
          Hyperarc. Een onderzoek gericht op het verminderen van geheugenproblemen bij patiënten met hersentumoren. Met
          deze techniek kan de manier waarop straling afgegeven wordt op een slimmere manier worden berekend. Hierdoor is
          de dosis straling die in het weefsel rondom de tumor terechtkomt lager en minder schadelijk. De verwachting is dat er
          minder bijwerkingen optreden voor  de patiënt. Instituut Verbeeten is het eerste instituut dat in Nederland deze
          nieuwe behandelmethode wil aanbieden.
        </p>
        <p>
          Bij sommige patiënten worden tijdens een bestralingstraject meerdere tumoren in het hoofd bestraald. Een deel van
          de patiënten kan hierdoor na verloop van tijd last krijgen van bijwerkingen zoals geheugenproblemen. Patiënten
          merken bijvoorbeeld dat het concentratievermogen afneemt en dat het korte termijn geheugen niet meer wordt wat
          het geweest is.
        </p>
        <img src={brainImage} alt="Twee foto's van een brainscan"/>
        <p>
          Op de foto wordt de dosisafgifte aan 2 hersentumoren getoond. In rood en oranje wordt weergegeven waar de
          hoogste dosis straling terechtkomt, groen en blauw geven de lagere dosis weer. De dosis straling die in het weefsel
          rondom de tumor terechtkomt is op de linkerfoto, bij een conventionele bestraling, groter dan op de rechterfoto, bij
          een bestraling mét Hyperarc. (Bron beeldmateriaal: VARIAN)
        </p>
        <h2>Eerdere projecten</h2>
        <p>
          De opbrengsten van edities 2015, 2016 en 2017 gingen naar onderzoek naar bestralen zonder masker van mensen
          met een hersentumor. Na onderzoek en een testfase kan het Instituut Verbeeten – als eerste instelling in Nederland –
          deze techniek toepassen. Daar zijn we trots op.
        </p>
        <p>
          De opbrengst van de Verbeeten Challenge van 2018 en 2019 ging naar een project dat is gericht op het verbeteren
          van de behandeling van vrouwen met borstkanker.
          We gebruiken nieuwe technologie om de patiënte nauwkeuriger op de behandeltafel te leggen. Momenteel worden
          voor de behandeling tatoeagepuntjes gezet om de patiënte recht te kunnen leggen op de behandeltafel. Dat is voor
          patiënten een onwelkome herinnering aan de behandeling. De nieuwe methode maakt die tatoeagepunten overbodig.
        </p>
        <h1>Verbeeten Fonds</h1>
        <p>
          Stichting Verbeeten Fonds werd opgericht in Tilburg op 30 oktober 1984 en is vernoemd naar de eerste
          geneesheer-directeur van Instituut Verbeeten.
          Stichting Verbeeten Fonds stimuleert onderzoek naar behandelingen van kanker en biedt middelen om de voorlichting
          en begeleiding van patiënten met kanker nog verder te verbeteren. Het Fonds richt zich hierbij in het bijzonder op de
          zorg die binnen Instituut Verbeeten wordt geleverd.<br/>
          Instituut Verbeeten levert al meer dan 60 jaar zorg op het gebied van bestralingsbehandelingen van doorgaans
          kwaadaardige aandoeningen (radiotherapie) en onderzoek en behandeling van organen met behulp van radioactieve
          stoffen (nucleaire geneeskunde).<br/>
          In 60 jaar tijd is er veel veranderd. Van een echt ‘familiebedrijf’ is Instituut Verbeeten uitgegroeid naar een
          hypermoderne instelling met 3 vestigingen (Tilburg, Breda en Den Bosch). De pijlers waar de organisatie op rust zijn
          echter onveranderd gebleven: deskundigheid en uitstekende zorg voor patiënten. Uiteraard werken we optimaal samen
          met andere instellingen.<br/>
          Instituut Verbeeten staat voor mensgerichte zorg. We bieden zorg op maat met aandacht voor wat de patiënt zelf
          belangrijk vindt of nodig heeft.
          Instituut Verbeeten stelt de meest geavanceerde technieken ter beschikking aan grote groepen patiënten. Dat gebeurt
          bij alle 3 de vestigingen vanuit het concept van ‘healing environment’ . Architectuur en inrichting leveren een bijdrage
          aan het welbevinden en herstel van onze patiënten.
        </p>
        <h1>Organisatie</h1>
        <p>
          De organisatie van de Verbeeten Challenge ligt in de handen van een stuurgroep met vrijwilligers. Ieder stuurgroeplid
          is verantwoordelijk voor een onderdeel van de (voorbereidingen op de) dag.
        </p>
        <p>
          Het Verbeeten Fonds is de opdrachtgever van de Verbeeten Challenge. De stuurgroep legt verantwoordelijkheid af
          aan bestuur van het Verbeeten Fonds. De Raad van Toezicht van het Verbeeten Fonds ziet erop toe dat alles volgens
          afspraak verloopt.
        </p>
      </section>
    );
  }
}
class Empty extends React.Component{
  render(){
    return(
      <section>
      </section>
    );
  }
}
export {OverOns, Empty};
