import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import 'tachyons';
import Navbar from './Navbar';
import Home from './Home';
import TopTours from './TopTours';
import TopTourItem from './TopTourItem';
import GroupTripList from './GroupTripList';
import GroupTripListItem from './GroupTripListItem';
import Promo from './Promo';
import PromoItem from './PromoItem';
import About from './About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='landing-page'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/top' component={TopTours} />
            <Route path='/top/:topId' component={TopTourItem} />
            
            <Route exact path='/group' component={GroupTripList} />
            <Route path='/group/:groupId' component={GroupTripListItem} />
            
            <Route exact path='/promo' component={Promo} />
            <Route path='/promo/:promoId' component={PromoItem} />
            
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;