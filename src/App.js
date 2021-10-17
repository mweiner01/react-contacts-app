import { useState } from 'react'
import Header from './components/Header';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';
import EditContact from './components/editContact';


function App() {
  const [contacts, setContact] = useState([]);

  const [showAddContact, setShowAddContact] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editContact, setEditContact] = useState([]);

  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newContact = { id, ...contact}

    setContact([...contacts, newContact])
  }

  const onEditContact = (contact) => {
    var answer = window.confirm("Bist du dir sicher, dass du diesen Kontakt bearbeiten willst?")

    if(answer) {
      let findContact = contacts.findIndex(c => c.id === contact.id);

    
      // set new values
      contacts[findContact].name = contact.name;
      contacts[findContact].email = contact.email;
      contacts[findContact].phone = contact.phone;
      contacts[findContact].birthday = contact.birthday;
      contacts[findContact].job = contact.job;
      contacts[findContact].adress = contact.adress;
  
      setIsOpen(false);
    } else {
      return;
    }
  }

  // ask if you want to delete the contact
  const deleteContact = (id) => {
    var answer = window.confirm("Bist du dir sicher, dass du diesen Kontakt löschen willst?")

    if(answer) {
      setContact(contacts.filter(contact => contact.id !== id))
    } else {
      return;
    }
  }

  const openModal = (contact) => {
    setEditContact(contact)
    setIsOpen(true);
  }

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  const closeModal = () => {
    setIsOpen(false);
  }
  

  
  return (
    <div className="mx-32 py-32">
      <Header onAdd={() => setShowAddContact(!showAddContact)} showAdd={showAddContact} />
      {showAddContact && <AddContact onAdd={addContact} />}

      <div style={{textAlign: 'center'}}>
        {contacts.length > 0 ? <Contacts contacts={contacts}
        onDelete={deleteContact} onEdit={openModal} /> : 'Du hast keine Kontakte'}
      </div>

      {modalIsOpen && <EditContact modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} afterOpenModal={afterOpenModal} contact={editContact} onEditContact={onEditContact}  />}

    </div>
  );
}

export default App;
