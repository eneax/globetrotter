import React from 'react';
import logo from '../images/logo.jpg';
import Footer from './Footer';

const About = () => {
  return (
    <div className='ph3-ns'>
      <div className='ph0-ns'>
        <header className="tc pv4 pv5-ns">
          <img src={logo} className="br-100 pa1 h3 w3" alt="avatar" />
          <h1 className="f5 f4-ns fw6 white">Al Centro del Mondo</h1>
          <h2 className="f6 gray fw2 ttu white">Viaggi e Turismo</h2>
        </header>
      </div>

      <article className="baskerville pb5">
        <div className="avenir tc-l ph3 ph4-ns pt4 pt5-ns">
          <img className="w-100 dib measure f3" src="http://www.alcentrodelmondo.it/img/frase.png" alt="." />
        </div>
        <article className="ph3 ph4-m ph5-l">
          <p className="f4 mb4 center measure lh-copy">
            Questa in sintesi la nostra filosofia del viaggio.
          </p>
          <div className="measure db center f5 f4-ns lh-copy">
            <p>Il <b>nostro mondo</b> è fatto di piccoli particolari, di luoghi esclusivi, di itinerari elaborati nei minimi dettagli, fatti di “lusso” o di “semplicità”, per farVi assaporare al meglio e vivere a fondo il luogo in cui Vi trovate.</p>
          </div>
          <div className="measure db center f5 f4-ns lh-copy">
            <p><b>Al Centro del Mondo * Viaggi e Turismo</b> nasce nel 2001, ma l’esperienza nel mondo del turismo proviene da molto più lontano: oltre 30 anni tra studi e lavoro! Uno staff giovane ma intraprendente e molto esperto farà di ogni Vostro desiderio un <b>SOGNO CHE SI REALIZZA</b>.</p>
          </div>
          <div className="measure db center f5 f4-ns lh-copy">
            <p>Grazie ad un team di veri e propri professionisti con approfondita padronanza delle diverse destinazioni, in grado di interpretare ogni singola richiesta come un’esperienza unica, con uno stile inconfondibile, è in grado di offrirVi consulenza tecnica a 360°.</p>
          </div>
          <div className="measure db center f5 f4-ns lh-copy">
            <p>Chi del <b>“viaggio”</b> ne ha fatto più che una professione <b>“uno stile di vita”</b> sarà pronto ad accogliere ogni Vostra richiesta, elaborandola, trasformandola in un tutt’uno con la Vostra personalità come fosse un abito cucito addosso. La politica è quella di trasformare ognuno di Voi da turista in viaggiatore, amante e soprattutto conoscitore attento dei luoghi che si appresta a visitare; puntando lo sguardo sulla destinazione intesa come luogo da apprezzare, conoscere, ascoltare e soprattutto far entrare all’interno del proprio animo.</p>
          </div>
          <div className="measure db center f5 f4-ns lh-copy">
            <p>Tutto questo e molto altro è <b>AL CENTRO DEL MONDO</b>.</p>
          </div>
        </article>
      </article>

      <Footer />
    </div>
  )
}

export default About;