import React, {Component} from 'react';
import Particles from 'react-particles-js';
import LandingPage from './components/LandingPage/LandingPage.js'

import 'bootstrap/dist/css/bootstrap.min.css';

import particleConfig from './backgroundParticle/particlesjs-config.json'
import LoadingPage from './components/LoadingPage/LoadingPage.js';


class App extends Component{

  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  componentDidMount(){
    setTimeout( () => 
      this.setState({loading: false}), 4000
    )
  }

  render(){
    return (
      <div className="App">
        <Particles params={particleConfig} style={{"zIndex": "-100", "position":"fixed"}} />
        {
          this.state.loading === true ? 
              (
                <LoadingPage />
              )
          :
              (
                <LandingPage />
              )
        }         
      </div>
    );
  }
  
}

export default App;
