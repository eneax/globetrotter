import React from 'react';
import Header from './Header';
import Footer from './Footer';
import frase from '../images/frase.png';

const About = () => {
  return (
    <div className='ph3-ns'>
      <Header/>

      <article className="baskerville pb5">
        <div className="tc-l ph3 ph4-ns pt4 pt5-ns">
          <img className="w-100 dib measure f3" src={frase} alt="Marcel Proust Quote" />
        </div>
        <article className="ph4 ph5-m ph6-l">
          <p className="measure mb4 center f4 f3-ns black-70 baskerville lh-copy">
            Questa in sintesi la nostra filosofia del viaggio.
          </p>
          <div className="measure db center f4 f3-ns black-70 baskerville lh-copy">
            <p>Il <b>nostro mondo</b> è fatto di piccoli particolari, di luoghi esclusivi, di itinerari elaborati nei minimi dettagli, fatti di “lusso” o di “semplicità”, per farVi assaporare al meglio e vivere a fondo il luogo in cui Vi trovate.</p>
          </div>
          <div className="measure db center f4 f3-ns black-70 baskerville lh-copy">
            <p><b>Al Centro del Mondo * Viaggi e Turismo</b> nasce nel 2001, ma l’esperienza nel mondo del turismo proviene da molto più lontano: oltre 30 anni tra studi e lavoro! Uno staff giovane ma intraprendente e molto esperto farà di ogni Vostro desiderio un <b>SOGNO CHE SI REALIZZA</b>.</p>
          </div>
          <div className="measure db center f4 f3-ns black-70 baskerville lh-copy">
            <p>Grazie ad un team di veri e propri professionisti con approfondita padronanza delle diverse destinazioni, in grado di interpretare ogni singola richiesta come un’esperienza unica, con uno stile inconfondibile, è in grado di offrirVi consulenza tecnica a 360°.</p>
          </div>
          <div className="measure db center f4 f3-ns black-70 baskerville lh-copy">
            <p>Chi del <b>“viaggio”</b> ne ha fatto più che una professione <b>“uno stile di vita”</b> sarà pronto ad accogliere ogni Vostra richiesta, elaborandola, trasformandola in un tutt’uno con la Vostra personalità come fosse un abito cucito addosso. La politica è quella di trasformare ognuno di Voi da turista in viaggiatore, amante e soprattutto conoscitore attento dei luoghi che si appresta a visitare; puntando lo sguardo sulla destinazione intesa come luogo da apprezzare, conoscere, ascoltare e soprattutto far entrare all’interno del proprio animo.</p>
          </div>
          <div className="measure db center f4 f3-ns black-70 baskerville lh-copy">
            <p>Tutto questo e molto altro è <b>AL CENTRO DEL MONDO</b>.</p>
          </div>
        </article>
      </article>

      <Footer />
    </div>
  )
}

export default About;