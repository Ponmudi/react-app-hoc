import React, { Component } from 'react';
import './App.css';
import ContactsApp from "./components/ContactsApp"
import axios from 'axios'

class App extends Component {

state = {
  contacts: []
};

async fetchUsers(){
  const res = await fetch("https://api.randomuser.me/?nat=us,gb&results=50")
  const data = await res.json();
  //console.log(data.results)
  const userContacts = data.results.map( (user) => ({
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        thumbnail: user.picture.thumbnail
    }) )
  this.setState({contacts: userContacts});
}

componentDidMount(){
    // fetch("https://api.randomuser.me/?nat=us,gb&results=50")
    // .then(response => response.json())
    // .then(data => data.results.map( (user)=>(
    //     {
    //         name: `${user.name.first} ${user.name.last}`,
    //         email: user.email,
    //         thumbnail: user.picture.thumbnail
    //     }
    // )))
    // .then(contacts => this.setState({contacts}))
    this.fetchUsers();
}

  render() {
    return (
      <div className="App">
      <ContactsApp contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
