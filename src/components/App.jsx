import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './Layout/Layout';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { useDispatch } from 'react-redux';
import { current } from 'redux/auth/authThunk';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));
const SignUpPage = lazy(() => import('../pages/SignUpPage/SignUpPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />

          <Route path="home" element={<HomePage />} />
          <Route path="register" element={<PublicRoute><SignUpPage /></PublicRoute>}/>
          <Route path="login" element={<PublicRoute><LoginPage /></PublicRoute>}/>
          <Route path="contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </>
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











