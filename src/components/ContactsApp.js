import React, { Component } from 'react';
import ContactList from './ContactList';
import './ContactsApp.css'
import LoadingHOC from "./HOC/LoadingHOC";

class ContactsApp extends Component {

    render() {
        //console.log(this.props.contacts);
        return(
            <div className="contactApp">
                <ContactList contacts={this.props.contacts}/>
            </div>
        )
    }
}

export default LoadingHOC('contacts')(ContactsApp);
