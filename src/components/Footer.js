import React from 'react';

const Footer = () => {
  return (
    <footer className="pa4 pa5-l black-70 bt b--black-10">
      <div className="dt dt--fixed w-100" >
        <div className="dn dtc-ns v-mid">
          <p className="f7 black-70 dib pr3 mb3">
            Copyright © AL CENTRO DEL MONDO s.r.l. Unipersonale 2018
          </p>
        </div>
        <div className="db dtc-ns black-70 tc tr-ns v-mid">
          <a className="link dim dib mr3 black-70" href="mailto:info@alcentrodelmondo.it" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo Email">
            <i className="db w2 h2 fas fa-envelope fa-2x"></i>
          </a>
          <a className="link dim dib mr3 black-70" href="https://www.facebook.com/Al-Centro-del-Mondo-Viaggi-e-Turismo-113138121866/" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo on Facebook">
            <i className="db w2 h2 fab fa-facebook-f fa-2x"></i>
          </a>
          <a className="link dim dib mr3 black-70" href="https://twitter.com/AlCentrodelMond" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo on Twitter">
            <i className="db w2 h2 fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="db dn-ns">
        <p className="f7 black-70 mt4 tc">
          Copyright © AL CENTRO DEL MONDO s.r.l. Unipersonale 2018
        </p>
      </div>
    </footer>
  )
}

export default Footer;