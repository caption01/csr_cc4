import React, {Component} from 'react';
import Particles from 'react-particles-js';
import LandingPage from './components/LandingPage/LandingPage.js'
import LoadingPage from './components/LoadingPage/LoadingPage.js';
import SignIn from './components/SignIn/SignIn.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import particleConfig from './backgroundParticle/particlesjs-config.json'



class App extends Component{

  constructor() {
    super();
    this.state = {
      loading: true,
      route: 'home'
    };
  }

  componentDidMount(){
    setTimeout( () => 
      this.setState({loading: false}), 4000
    )
  }

  onRouteChange = (route) => {
    this.setState({route: route})
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
                (() => {
                  switch (this.state.route){
                    case 'home' :
                    return <LandingPage onRouteChange={this.onRouteChange} />;

                    case 'signin' :
                    return <SignIn onRouteChange={this.onRouteChange}/>;

                    default :
                    return null;
                  }
                })()
              )
        }         
      </div>
    );
  }
}

export default App;
