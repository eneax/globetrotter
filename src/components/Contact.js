import React from 'react';
import logo from '../images/logo.jpg';
import Footer from './Footer';

const Contact = () => {
  return (
    <div>
      
      <div className='ph3-ns'>
        <header className="tc pv4 pv5-ns bg-gold">
          <img src={logo} className="br-100  pa1 ba b--black-10 h3 w3" alt="avatar" />
          <h1 className="f5 f4-ns fw6 mid-gray">Al Centro del Mondo</h1>
          <h2 className="f6 gray fw2 ttu tracked">Viaggi e Turismo</h2>
        </header>
      </div>

      <section className="bg-washed-blue pa2 pa4-ns tc">
        <article className="ba b--black-10 br2 bg-white pa4 mw6 center">
          <div>
            <h4 className="f5 fw4 black-60 dib v-mid mv0 mr3">Contatti</h4>
          </div>

          <ul className="list f6 pl0 mt3 mb0">
            <li className="pv2">
              <span className="fw7">"Al Centro del Mondo" Viaggi e Turismo</span>
              <span className="db black-60">Via Pasubio, 30/32</span>
              <span className="db black-60">53043 Chiusi Scalo (SI)</span>
              <a href="tel:+39 0578 21971" class="db black-60 link lh-title underline-hover">Tel. +39 0578 21971</a>
              <a href="tel:+39 0578 21975" class="db black-60 link lh-title underline-hover">Fax +39 0578 21975</a>
            </li>
          </ul>

          <ul className="list f6 pl0 mt3 mb0">
            <li className="pv2">
              <span className="db black-60">Filiale: Viale Roma, 35</span>
              <span className="db black-60">53042 Chianciano Terme (SI)</span>
              <a href="tel:+39 0578 62003" class="db black-60 link lh-title underline-hover">Tel. +39 0578 62003</a>
              <a href="tel:+39 0578 62563" class="db black-60 link lh-title underline-hover">Fax +39 0578 62563</a>
            </li>
          </ul>

          <ul className="list f6 pl0 mt3 mb0">
            <li className="pv2">
              <span className="fw7">Orari di apertura</span>
              <span className="db black-60">Dal Lunedì al Sabato</span>
              <span className="db black-60">Dalle 9:00 alle 13:00</span>
              <span className="db black-60">Dalle 16:00 alle 19:00</span>
              <a href="mailto:info@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">info@alcentrodelmondo.it</span>
              </a>
            </li>
          </ul>

          <ul className="list f6 pl0 mt3 mb0">
            <li className="pv2">
              <span className="fw7">Direzione tecnica</span>
              <a href="mailto:direzione@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">direzione@alcentrodelmondo.it</span>
              </a>
            </li>
            
            <li className="pv2">
              <span className="fw7">Ufficio amministrazione</span>
              <a href="mailto:samanta@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">samanta@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:federico@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">federico@alcentrodelmondo.it</span>
              </a>
            </li>

            <li className="pv2">
              <span className="fw7">Viaggi individuali - Viaggi di nozze - Crociere</span>
              <a href="mailto:manolina@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">manolina@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:alessandra@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">alessandra@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:manuela@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">manuela@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:federico@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">federico@alcentrodelmondo.it</span>
              </a>
            </li>

            <li className="pv2">
              <span className="fw7">Ufficio Gruppi</span>
              <a href="mailto:direzione@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">direzione@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:sabrina@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">sabrina@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:federico@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">federico@alcentrodelmondo.it</span>
              </a>
              <a href="mailto:mondidiversi@alcentrodelmondo.it" className="link blue lh-title underline-hover" target="_blank" rel="noopener noreferrer">
                <span className="db black-60">mondidiversi@alcentrodelmondo.it</span>
              </a>
            </li>
          </ul>
        </article>
      </section>

      <Footer />
    </div>
  )
}

export default Contact;