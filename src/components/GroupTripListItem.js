import React from 'react';
import groups from '../utils/groups';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const GroupTripListItem = ({match}) => {
  const group = groups.find(({ id }) => id === match.params.groupId);

  return (
    <div>
      <main>

        <article className="bg-white">
          <div className="ph4 ph5-m ph6-l">
            <div className="pv5 f4 f2-ns measure center tc">
              <h1 className="fw6 f3 f2-ns fl w-100 black-70 mt0 mb3 avenir">{group.name}</h1>
            </div>
          </div>
        </article>

        <section className="cf b--black-05 ph6-l">
          <h1 className="tc f7 ttu fw6 tracked mb4 avenir">{group.price}</h1>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-center pv5 pv6-l" style={{ backgroundImage: `url(${group.imgOne})`}}></div>
          </a>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden  ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: `url(${group.imgTwo})`}}></div>
          </a>
          <a href="#0" className="fl w-third w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: `url(${group.imgThree})`}}></div>
          </a>
          <a href="#0" className="fl w-100 w-25-ns border-box overflow-hidden ba bw2 white" title="">
            <div className="grow cover bg-top pv5 pv6-l" style={{ backgroundImage: `url(${group.imgFour})`}}></div>
          </a>
        </section>
      
        <article className="bg-white">
          <div className="ph4 ph5-m ph6-l">
            <h2 className="fw6 f3 f2-ns avenir black-70 tc">Descrizione</h2>
            
            {
              group.resources.map((sub) => (
                <div className="measure f3 center mv5 black-70" key={sub.id}>
                  <h3 className="fw6 f5 f4-ns avenir">{sub.day}</h3>
                  <p className="lh-copy measure f4 f3-ns black-70 baskerville">
                    {sub.desc}
                  </p>
                </div>
              ))
            }

            <ul className="list pl0 mt0 measure center">
              {
                group.extra.map((sub) => (
                  <li className="flex items-center lh-copy pa1 ph0-l bb b--black-10" key={sub.id}>
                    <div className="flex-auto">
                      <span className="f7 f6-ns db black-70">{sub.detail}</span>
                    </div>
                    <div>
                      <a href="tel:" className="f7 f6-ns link blue hover-dark-gray">{sub.number}</a>
                    </div>
                  </li>
                ))
              }
            </ul>
          
          </div>
        </article>

        <article className="bg-white pv4">
          <div className="ph4 ph5-m ph6-l">
            <h2 className="fw6 f3 f2-ns avenir black-70 tc">Ulteriori Dettagli</h2>
            
            {
              group.footer.map((sub) => (
                <div className="measure f3 center mv5 black-70" key={sub.id}>
                  <h3 className="fw6 f5 f4-ns avenir">{sub.title}</h3>
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
            <Link to='/group' className="f6 dib ph2 link mid-gray no-underline underline-hover" title="Torna all'elenco Link">
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

export default GroupTripListItem;