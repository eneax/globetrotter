import React from 'react';
import { Link } from 'react-router-dom';

import coverOne from '../images/cover1.jpg';
import coverTwo from '../images/cover2.jpg';
import coverThree from '../images/cover3.jpg';
import coverFour from '../images/cover4.jpg';

import Footer from './Footer';

const homeLinks = [
  {
    id: 'about',
    name: 'About',
    cover: coverOne
  },
  {
    id: 'promo',
    name: 'Promotions',
    cover: coverTwo
  },
  {
    id: 'top',
    name: 'Top Tours',
    cover: coverThree
  },
  {
    id: 'group',
    name: 'Group Trip',
    cover: coverFour
  },
];

const Home = () => {
  return (
    <div className='ph3-ns'>
      <header className="bg-gold sans-serif tc">
        <div className="mw9 center pa4 pt5-ns ph7-l">
          <h1 className="f2 f1-m f-subheadline-l measure-narrow lh-title mv0">
            <span className="bg-black-90 lh-copy white pa1 tracked-tight">
              Al Centro del Mondo
          </span>
          </h1>
          <p className="measure center f5 f4-m lh-copy">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </div>
      </header>

      <div className='mw9 center'>
        <div className='cf'>
          {
            homeLinks.map(({ cover, id }) => (
              <Link to={`/${id}`} key={id} >
                <div className='fl w-100 w-50-ns pv3'>
                  <div className='bg-white'>
                    <img className='projects-list' src={cover} alt={`Cover for the ${id} Page`} />
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home;