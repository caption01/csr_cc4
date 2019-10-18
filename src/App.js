import React, {Component} from 'react';
import Particles from 'react-particles-js';
import LandingPage from './components/LandingPage/LandingPage.js'
import LoadingPage from './components/LoadingPage/LoadingPage.js';
import SignIn from './components/SignIn/SignIn.js';
import Register from './components/Register/Register.js';
import MainPage from './components/MainPage/MainPage.js';

import 'bootstrap/dist/css/bootstrap.min.css';

import particleConfig from './backgroundParticle/particlesjs-config.json'



class App extends Component{

  constructor() {
    super();
    this.state = {
      loading: true,
      route: 'home',
      users: [],
      currentUser: ''
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

  loadUsers = (data) => {
    this.setState({users: data})
  }

  currentUserLoad = (user) => {
    this.setState({currentUser: user.target.value});
  }
  

  render(){
    return (
      <div className="App">
        <Particles params={particleConfig} style={{"zIndex": "-100", "position":"fixed", 'top': '0'}} />
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
                    return <SignIn onRouteChange={this.onRouteChange} loadUsers={this.loadUsers} currentUserLoad={this.currentUserLoad.bind(this)}/>;

                    case 'register' :
                    return <Register onRouteChange={this.onRouteChange} />;

                    case 'main' :
                    return <MainPage users={this.state.users} onRouteChange={this.onRouteChange} currentUser={this.state.currentUser} loadUsers={this.loadUsers} />;

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
