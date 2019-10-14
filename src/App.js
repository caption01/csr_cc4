import React, {Component} from 'react';
import Particles from 'react-particles-js';
import LandingPage from './components/LandingPage/LandingPage.js'

import 'bootstrap/dist/css/bootstrap.min.css';

import particleConfig from './backgroundParticle/particlesjs-config.json'


class App extends Component{

  render(){
    return (
      <div className="App">
        <Particles params={particleConfig} style={{"zIndex": "-100", "position":"fixed"}} />
        <LandingPage />
        
      </div>
    );
  }
  
}

export default App;
