import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../models/contact.class';
import ComponenteB from './ComponenteB';

const ComponenteA = ({contact}) => {
    return (
        <div>
        <h1>Name: {contact.name}</h1>
        <h2>Surname: {contact.surname}</h2>
        <h3>Email: {contact.email}</h3>
        <ComponenteB connected = {contact.connected} />
        </div>
    );
};

ComponenteA.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    // connected: PropTypes.bool.isRequired,
};
    
export default ComponenteA;