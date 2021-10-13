import Contact from './Contact'

const Contacts = ({ contacts, onDelete, onToggle }) => {
    return (
        <div className="grid grid-cols-3 gap-4 mx-auto">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} />
          ))}  
        </div>
    )
}

export default Contacts
