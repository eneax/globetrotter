import React from 'react';
import tours from '../utils/tours';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const TopTours = () => {
  return (
    <div>
      <main>
        <section className="bg-white">
          <div className="vh-75 cover bg-center" style={{backgroundImage: "url(https://images.unsplash.com/photo-1490077476659-095159692ab5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b66d15c291f8357f5206cc0ba9dc46ba&auto=format&fit=crop&w=2533&q=80)"}}></div>
        </section>

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
      </main>

      <Footer />
    </div>
  )
}

export default TopTours;