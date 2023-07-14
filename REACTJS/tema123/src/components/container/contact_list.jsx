import React from 'react'
import {Contact} from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactListComponent = () => {
    
    const defaultContact = new Contact ('John', 'Doe', 'john@email.com', true);
    
    return (
        <div>
            <ContactComponent contact={defaultContact} />
        </div>
    )
}


export default ContactListComponent