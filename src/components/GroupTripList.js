import React from 'react';
import groups from '../utils/groups';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import logo from '../images/logo.jpg';

const GroupTripList = () => {
  return (
    <div>
      <main>
        <div className='ph3-ns'>
          <header className="tc pv4 pv5-ns bg-gold">
            <img src={logo} className="br-100  pa1 ba b--black-10 h3 w3" alt="avatar" />
            <h1 className="f5 f4-ns fw6 mid-gray">Al Centro del Mondo</h1>
            <h2 className="f6 gray fw2 ttu tracked">Viaggi e Turismo</h2>
          </header>
        </div>

        <section className="mw7 center avenir">
          <h2 className="baskerville fw1 ph3 ph0-l">Group Trip</h2>
          
            {
              groups.map(({ cover, id, name, days, desc, price }) => (
                <article className="bt bb b--black-10" key={id}>
                  <Link to={`/group/${id}`} className="db pv4 ph3 ph0-l no-underline black dim" >
                    <div className="flex flex-column flex-row-ns">
                      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                        <img className="db" src={cover} alt="." />
                      </div>
                      <div className="w-100 w-60-ns pl3-ns tr-ns">
                        <h3 className="f3  baskerville mt0 lh-title">{name}</h3>
                        <p className="f6 lh-copy mb2">{days}</p>
                        <p className="f6 f5-l lh-copy mv4">{desc}</p>
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

export default GroupTripList;