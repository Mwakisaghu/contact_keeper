import React, { Fragment, useContext } from 'react';
import ContactsItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  console.log({ Contacts });

  const { contacts } = contactContext;
  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactsItem key={contact.id} contact={contact} />
      ))}
    </Fragment>
  );
};

export default Contacts;
