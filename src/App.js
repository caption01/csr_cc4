import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import particleConfig from './backgroundParticle/particlesjs-config.json'


class App extends Component{

  render(){
    return (
      <div className="App">
        <Particles params={particleConfig} />;
      </div>
    );
  }
  
}

export default App;
