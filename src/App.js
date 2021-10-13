import { useState } from 'react'
import Header from './components/Header';
import AddContact from './components/AddContact';
import Contacts from './components/Contacts';

function App() {
  const [contacts, setContact] = useState([]);
  const [showAddContact, setShowAddContact] = useState(false);


  const addContact = (contact) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newContact = { id, ...contact}
    setContact([...contacts, newContact])
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

  
  return (
    <div className="mx-32 py-32">
      <Header onAdd={() => setShowAddContact(!showAddContact)} showAdd={showAddContact} />
      {showAddContact && <AddContact onAdd={addContact} />}

      <div style={{textAlign: 'center'}}>
      {contacts.length > 0 ? <Contacts contacts={contacts}
      onDelete={deleteContact} /> : 'Du hast keine Kontakte'}
      </div>
    </div>
  );
}

export default App;
