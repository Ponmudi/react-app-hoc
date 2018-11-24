import React, {Component} from 'react';
import HOC from './hoc'
class UserList extends Component {
    render() {
        return(
            <div className="Users">
                <ul>
                    {
                        this.props.contacts.map( (user) => (
                            <li key={user.email}>{user.name}<br /><img src={user.thumbnail} alt="" /></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default HOC('contacts')(UserList);