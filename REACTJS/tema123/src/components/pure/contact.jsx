import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class';

const ContactComponent = ({contact}) => {
    return (
        <div>
        <h1>Name: {contact.name}</h1>
        <h2>Surname: {contact.surname}</h2>
        <h3>Email: {contact.email}</h3>
        <h4>{contact.connected ? 'Contact online':'Contact disconnected'}</h4>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    // connected: PropTypes.bool.isRequired,
};
    
export default ContactComponent;