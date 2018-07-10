import React from 'react';
import tours from '../utils/tours';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const TopTourItem = ({match}) => {
  const tour = tours.find(({ id }) => id === match.params.topId);

  return (
    <div>
      <main>

        <article className="bg-white">
          <div className="ph4 ph5-m ph6-l">
            <div className="pv5 f4 f2-ns measure center tc">
              <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">{tour.name}</h1>
            </div>
          </div>
        </article>

        <section className="cf b--black-05 ph6-l">
          <h1 className="tc f5 ttu fw6 tracked mb4 avenir">{tour.price}</h1>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-center pv5 pv6-l" style={{ backgroundImage: `url(${tour.imgOne})`}}></div>
          </a>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: `url(${tour.imgTwo})`}}></div>
          </a>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: `url(${tour.imgThree})`}}></div>
          </a>
          <a href="#0" className="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: `url(${tour.imgFour})`}}></div>
          </a>
        </section>
      
        <article className="bg-white">
          <div className="ph4 ph5-m ph6-l">
            <h2 className="fw6 f2 avenir black-70 tc">Descrizione</h2>
            
            {
              tour.resources.map((sub) => (
                <div className="measure f3 center mv5 black-70" key={sub.id}>
                  <h3 className="fw6 f3 avenir">{sub.day}</h3>
                  <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                    {sub.desc}
                  </p>
                </div>
              ))
            }
            
          </div>
        </article>

        <div className="pb4 ph3 ph5-m ph6-l mid-gray">
          <div className="tc mt3">
            <Link to='/top' className="f6 dib ph2 link mid-gray no-underline underline-hover" title="Torna all'elenco Link">
              Torna all'elenco
            </Link>
            <a className="f6 dib ph2 link mid-gray no-underline underline-hover" href="mailto:info@alcentrodelmondo.it" target="_blank" rel="noopener noreferrer" title="Al Centro del Mondo Email">
              Richiedi informazioni
            </a>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default TopTourItem;






/*
<main>

        <article className="bg-white">
          <div className="ph4 ph5-m ph6-l">
            <div className="pv5 f4 f2-ns measure center tc">
              <h1 className="fw6 f1 fl w-100 black-70 mt0 mb3 avenir">Nuova Zelanda</h1>
            </div>
          </div>
        </article>

        <section className="cf  b--black-05 ph6-l">
          <h1 className="tc f5 ttu fw6 tracked mb4 avenir">11 giorni , a partire da € 2590.00 a persona</h1>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-center pv5 pv6-l" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/prnt/hw-080411-cargo_960.jpg)" }}></div>
          </a>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/prnt/hwspringtour-cargo_960-1.jpg)" }}></div>
          </a>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/prnt/cc010611.s_960.jpg)" }}></div>
          </a>
          <a href="#0" className="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: "url(https://s3-us-west-2.amazonaws.com/prnt/adam-stern-031209_960-2.jpg)" }}></div>
          </a>
        </section>
      
        <article className="bg-white">
          <div className="ph4 ph5-m ph6-l">

            <div className="measure f3 center mv5 black-70">
              <h2 className="fw6 f2 avenir">Descrizione</h2>
              <h3 className="fw6 f3 avenir">1° GIORNO - ITALIA * HONG KONG</h3>
              <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                Partenza per Auckland via Hong Kong pasti e pernottamento a bordo (E’ possibile che la città di scalo sia diversa da quella indicata).
              </p>
            </div>

            <div className="measure f3 center mv5 black-70">
              <h3 className="fw6 f3 avenir">2° GIORNO – HONG KONG * AUCKLAND</h3>
              <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                Arrivo, incontro con la guida e trasferimento in hotel. Sistemazione e giornata a disposizione per le seguenti visite ed escursioni facoltative: 
              </p>
              <ol className="lh-copy measure f4 f3-ns black-70 baskerville">
                <li>
                  Crociera in barca a vela con "Pride of Auckland", con o senza pranzo
                </li>
                <li>
                  Fullers Coffee Cruise - crociera in catamarano nella baia di Auckland con caffè e biscotti inclusi. Potrete anche effettuare altre crociere che vi portano alle numerose isole (Waiheke Island, Tiritiri Matangi Island) dei dintorni di Auckland.
                </li>
              </ol>
            </div>
            
          </div>
        </article>

      </main>

*/ 