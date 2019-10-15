import React, {Component} from 'react';
import CardMemberList from '../CardMemberList/CardMemberList.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'


class MainPage extends Component{

  render(){
    return (
      <div>
        <h1 id={'headerconfig'}> Hall of Member</h1>
        <CardMemberList />
      </div>
        
    );
  }
}

export default MainPage;
