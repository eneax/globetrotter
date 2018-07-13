import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

import coverOne from '../images/cover1.jpg';
import coverTwo from '../images/cover2.jpg';
import coverThree from '../images/cover3.jpg';
import coverFour from '../images/cover4.jpg';

import Footer from './Footer';

const homeLinks = [
  {
    id: 'top',
    name: 'Top Tours',
    cover: coverOne
  },
  {
    id: 'group',
    name: 'Viaggi di Gruppo',
    cover: coverTwo
  },
  {
    id: 'promo',
    name: 'Offerte',
    cover: coverThree
  },
  {
    id: 'about',
    name: 'Chi Siamo',
    cover: coverFour
  }
];

const Home = () => {
  return (
    <div className='ph3-ns'>
      <Header/>
      
      <div className='mw9 center'>
        <div className='cf'>
          {
            homeLinks.map(({ id, name, cover }) => (
              <Link to={`/${id}`} key={id} >
                <div className='fl w-100 w-50-ns pv2 ph1'>
                  <div className='ph0-ns' style={{ background: `url(${cover}) no-repeat center`, backgroundSize: "cover" }}>
                    <div className="tc pv5 pv7-ns home-links">
                      <h2 className="f1 fw2 ttu white avenir">{name}</h2>
                    </div>
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