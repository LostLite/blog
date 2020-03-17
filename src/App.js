import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './containers/Home';
import AboutUs from './containers/AboutUs';
import ContactUs from './containers/ContactUs';
import Post from './containers/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about-us" component={AboutUs}/>
          <Route path="/posts/:id" component={Post}/>
          <Route path="/contact-us" component={ContactUs}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
