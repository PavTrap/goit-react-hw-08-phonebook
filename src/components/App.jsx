import React from 'react';
// import Notiflix from 'notiflix';
// import shortid from 'shortid';
import ContactList from './ContactList';
import Filter from './Filter';
import  NewContactForm  from './ContactForm';
import css from './Contacts.module.css';
import { useSelector } from 'react-redux';




export const App = () => {
const filter = useSelector(state => state.filter);
// console.log(filter);
const contacts = useSelector(state => state.contacts);
// console.log(contacts);


const getVisibleContacts = () => {
  // const normalizedFilter = filter.toLowerCase();
  return (contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  ));
};

const visibleContacts = getVisibleContacts();


  return (
        <div className={css.section}>
          <h1>Phonebook</h1>
    
          <NewContactForm />
          <h1>Contacts</h1>
          {/* <Filter value={} onChange={} /> */}
          <Filter />
    
          {/* <ContactList contacts={} onDeleteContact={} /> */}
          <ContactList contacts={visibleContacts} />
          {/* <ContactList /> */}
        </div>
      );


  };
































//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');


// useEffect(() => {
//   const storedContacts = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(storedContacts);
//   if (parsedContacts && parsedContacts.length > 0) {
//     setContacts(parsedContacts);
//   }
// }, [])

// useEffect(() => {
//   localStorage.setItem('contacts', JSON.stringify(contacts));
// }, [contacts]);


// const deleteContact = contactId => {
//   setContacts(prevContacts =>
//     prevContacts.filter(contact => contact.id !== contactId)
//   );
// };

// const addContact = (name, number) => {
//   const hasName = contacts.some(
//     obj => obj.name.toLowerCase() === name.toLowerCase()
//   );

//   if (hasName) {
//     Notiflix.Notify.info(`${name} is already in contacts`);
//     return;
//   } else {
//     const contact = {
//       id: shortid.generate(),
//       name,
//       number,
//     };
//     setContacts(prevContacts => [contact, ...prevContacts]);
//   }
// };

// const changeFilter = e => {
//   setFilter(e.currentTarget.value);
// };

// const getVisibleContacts = () => {
//   const normalizedFilter = filter.toLowerCase();
//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };

// const visibleContacts = getVisibleContacts();


//   return (
//     <div className={css.section}>
//       <h1>Phonebook</h1>

//       <NewContactForm onSubmit={addContact} />
//       <h1>Contacts</h1>
//       <Filter value={filter} onChange={changeFilter} />

//       <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
//     </div>
//   );











