import React from 'react';
import ReactDOM from 'react-dom';
import {OverOns, Empty} from './overons';
import './overons.css';
{/*import {loadTeam, loadMessage, loadIndividu, Menu, Menu2, IndividuInschrijving, TeamInschrijving, PrivacyVerklaring, VolgendeStap, VeelDank} from './aanmeldpagina';
import './aanmeldpagina.css';
import {Profiel, Donaties} from './profielpagina';
import './profielpagina.css'
import image from './Woman.jpeg';*/}
ReactDOM.render(
  <div>
  {/*<Menu/>
  <IndividuInschrijving/>
  <PrivacyVerklaring/>
  <VolgendeStap/>*/}
  <OverOns/>
  <Empty/>
  </div>,
  document.getElementById('root')
);
