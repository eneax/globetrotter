import React from 'react';
import tours from '../utils/tours';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../images/logo.jpg';

const TopTours = () => {
  return (
    <div className='ph3-ns'>

      <div className='ph0-ns'>
        <header className="tc pv4 pv5-ns">
          <img src={logo} className="br-100 pa1 h3 w3" alt="avatar" />
          <h1 className="f5 f4-ns fw6 white">Al Centro del Mondo</h1>
          <h2 className="f6 gray fw2 ttu white">Viaggi e Turismo</h2>
        </header>
      </div>

      <section className="mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">Top Tours</h2>

        {
          tours.map(({ cover, id, name, days, price }) => (
            <article className="bt bb b--black-10" key={id}>
              <Link to={`/top/${id}`} className="db pv4 ph3 ph0-l no-underline black dim" >
                <div className="flex flex-column flex-row-ns">
                  <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                    <img className="db" src={cover} alt="." />
                  </div>
                  <div className="w-100 w-60-ns pl3-ns tr-ns">
                    <h3 className="f3  baskerville mt0 lh-title">{name}</h3>
                    <p className="f6 lh-copy mb2">{days}</p>
                    <p className="f6 f5-l lh-copy mv4">Collezione "Mondi Diversi</p>
                    <p className="f6 lh-copy mv0">{price}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))
        }

      </section>


      <Footer />
    </div>
  )
}

export default TopTours;