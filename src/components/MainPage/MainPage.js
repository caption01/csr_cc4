import React, {Component} from 'react';
import CardMemberList from '../CardMemberList/CardMemberList.js'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'


class MainPage extends Component{

  deleteTarget = (target) => {

    fetch('https://mighty-dusk-59576.herokuapp.com/main', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                target: target
            })
        })
        .then(data => data.json())
        .then(data => {
          this.props.loadUsers(data)
        })
  }

  render(){
    return (
      <div>
        <h1 id={'headerconfig'}> Hall of Member</h1>
        <CardMemberList  users={this.props.users} />
        <div id={'footerconfig'}>
          <Button
          onClick={() => this.deleteTarget(this.props.currentUser)}
          id={'footerconfig-suicide'} variant="outline-danger">
          suicide
          </Button>
          <Button
          onClick={() => this.props.onRouteChange('signin')}
          id={'footerconfig-logout'} variant="outline-danger">
          Log out
          </Button>
        </div>  
      </div>
        
    );
  }
}

export default MainPage;
