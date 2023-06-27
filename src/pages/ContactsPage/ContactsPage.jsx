import { Form } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useFilter } from 'hooks/useFilter';
import { useContacts } from 'hooks/useContacts';

import css from './ContactsPage.module.css'



const ContactsPage = () => {
  
  const [filter, onSetFilter] = useFilter();
  const [contacts, onAddContact, onDeleteContact] = useContacts();

  const empty = () => contacts.length > 0;

  

  return (
    
      <>
        <div className={css.div}>
          <h2 className={css.h2}>Phonebook</h2>
          <Form onData={onAddContact} />
        </div>
        <div className={css.div}>
          <h2 className={css.h2}>Contacts</h2>

          <Filter value={filter} onChangeFilter={onSetFilter} />
          {empty() ? (
            <>
              <ContactList
                contacts={contacts}
                onDeleteContact={onDeleteContact}
              />
            </>
          ) : (
            <h3 className={css.h3}>
              Phonebook is empty! <br /> Add your contacts.
            </h3>
          )}
          
        </div>
      </>
    
  );
};
export default ContactsPage;