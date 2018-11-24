import React from 'react';

const ContactList = ({ contacts }) => {
    return(
    <ul>
      {contacts.map(
        (contact) => <li key={contact.email}>
          <img src={contact.thumbnail} alt="img" role="presentation" />
          <div className="contactData">
            <strong>{contact.name}</strong><br/><small>{contact.email}</small>
          </div>
        </li>
      )}
    </ul>
  )
}

export default ContactList;
