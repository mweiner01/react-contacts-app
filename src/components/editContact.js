import { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');



const EditContact = ({modalIsOpen, afterOpenModal, closeModal, contact, onEditContact}) => {
    let subtitle;
    const [name, setName] = useState(contact.name);
    const [email, setEmail] = useState(contact.email);
    const [phone, setPhone] = useState(contact.phone);
    const [adress, setAdress] = useState(contact.adress);
    const [birthday, setBirthday] = useState(contact.birthday);
    const [job, setJob] = useState(contact.job);
    
    const onSubmit = (e) => {
      e.preventDefault();

      if(!name) {
        alert("Bitte füge einen Namen hinzu.")
        return;
      }

      onEditContact({
        id: contact.id,
        name,
        email,
        phone,
        adress,
        birthday,
        job
      })
      
  }

    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={() => afterOpenModal()}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Bearbeite"
        >
          <div className="p-4 text-center">
            <div className="pb-8 flex">
              <h1 className="text-xl font-semibold">Bearbeite den Kontakt</h1>
              <button onClick={closeModal} className="ml-auto text-red-500 text-2xl"><FaTimes /></button>
            </div>
            <div>
              <form className="py-2 grid grid-cols-2 gap-2" onSubmit={onSubmit}>
                <div className="w-full">
                  <label className="text-md font-semibold py-2">Name</label>
                  <input type="text" className="py-1 border px-4 w-full focus:outline-none" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="w-full">
                  <label className="text-md font-semibold py-2">Beruf</label>
                  <input type="text" className="py-1 border px-4 w-full focus:outline-none" placeholder="name" value={job} onChange={(e) => setJob(e.target.value)} />
                </div>
                <div className="w-full">
                  <label className="text-md font-semibold py-2">E-Mail</label>
                  <input type="text" className="py-1 border px-4 w-full focus:outline-none" placeholder="name" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="w-full">
                  <label className="text-md font-semibold py-2">Telefonnummer</label>
                  <input type="text" className="py-1 border px-4 w-full focus:outline-none" placeholder="name" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="w-full">
                  <label className="text-md font-semibold py-2">Adresse</label>
                  <input type="text" className="py-1 border px-4 w-full focus:outline-none" placeholder="name" value={adress} onChange={(e) => setAdress(e.target.value)} />
                </div>
                <div className="w-full">
                  <label className="text-md font-semibold py-2">Geburtstag</label>
                  <input type="text" className="py-1 border px-4 w-full focus:outline-none" placeholder="name" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                </div>
                <input type="submit" className="text-white bg-gray-800 hover:bg-gray-900 cursor-pointer py-2 w-full" value="Bearbeite Kontakt" />
              </form>
            </div>
          </div>
        </Modal>
      </div>
    );
}

export default EditContact
