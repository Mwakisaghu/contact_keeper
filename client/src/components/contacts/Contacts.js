import React, { Fragment, useContext } from 'react';
import ContactsItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactsItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
