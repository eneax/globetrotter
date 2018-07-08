import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route 
} from 'react-router-dom';
import 'tachyons';
import Navbar from './Navbar';
import Home from './Home';
import Top from './Top';
import Group from './Group';
import Promo from './Promo';
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
            <Route path='/top' component={Top} />
            <Route path='/group' component={Group} />
            <Route path='/promo' component={Promo} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;