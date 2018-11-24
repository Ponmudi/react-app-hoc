import React, {Component} from 'react';
import UserList from './UserList'

class Fetch extends Component{

    state = {
        users: []
    };

    componentDidMount(){
        fetch("https://api.randomuser.me/?nat=us,gb&results=10")
        .then(res => res.json())
        .then(data => data.results.map( (user) => ({
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            thumbnail: user.picture.thumbnail
        }) ) )
        .then(users => this.setState({users}))
    }

    render(){

        return (
            <div className="App">
                <UserList contacts={this.state.users} />
            </div>
        )
    }
}

export default Fetch;

