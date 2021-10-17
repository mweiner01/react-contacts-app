import Contact from './Contact'

const Contacts = ({ contacts, onDelete, onEdit }) => {
    return (
        <div className="grid grid-cols-3 gap-4 mx-auto">
          {contacts.map((contact) => (
            <Contact key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit} />
          ))}  
        </div>
    )
}

export default Contacts
