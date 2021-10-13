import { useState } from 'react';

const AddContact = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [birthday, setBirthday] = useState('');
    const [job, setJob] = useState('');
    const [adress, setAdress] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        // if there is no name, alert
        if(!name) {
            alert('Bitte füge einen Namen hinzu.')
            return
        }
        
        // pass the data 
        onAdd({
            name,
            email,
            phone,
            birthday,
            job,
            adress
        });

        // set to blank
        setName('')
        setEmail('')
        setPhone('')
        setJob('')
        setBirthday('')
        setAdress('')
    }

    return (
        <form className="py-8 max-w-sm mx-auto" onSubmit={onSubmit}>
            <div className="justify-center space-y-2 my-2">
                <label className="py-2 font-semibold">Name</label>
                <input className="border rounded py-2 px-1 w-full focus:outline-none" type="text" placeholder="Name hinzufügen" 
                value={name} 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="justify-center space-y-2 my-2">
                <label className="py-2 font-semibold">Email</label>
                <input className="border w-full rounded py-2 px-1 focus:outline-none" type="email" placeholder="Email hinzufügen" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="justify-center space-y-2 my-2">
                <label className="py-2 font-semibold">Telefonnummer</label>
                <input className="border w-full rounded py-2 px-1 focus:outline-none" type="text" placeholder="Telefonnummer hinzufügen" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} required/>
            </div>
            <div className="justify-center space-y-2 my-2">
                <label className="py-2 font-semibold">Job</label>
                <input className="border w-full rounded py-2 px-1 focus:outline-none" type="text" placeholder="Job hinzufügen" 
                value={job} 
                onChange={(e) => setJob(e.target.value)} required/>
            </div>
            <div className="justify-center space-y-2 my-2">
                <label className="py-2 w-1/4 font-semibold">Geburtstag</label>
                <input className="border w-full rounded py-2 px-1 focus:outline-none" type="text" placeholder="Geburtstag hinzufügen" 
                value={birthday} 
                onChange={(e) => setBirthday(e.target.value)} required/>
            </div>
            <div className="justify-center space-y-2 my-2">
                <label className="py-2 w-1/4 font-semibold">Adresse</label>
                <input className="border w-full rounded py-2 px-1 focus:outline-none" type="text" placeholder="Adresse hinzufügen" 
                value={adress} 
                onChange={(e) => setAdress(e.target.value)} required/>
            </div>

            <div className="my-4">
                <input className="text-white font-semibold bg-gray-800 hover:bg-gray-900 py-1 w-full cursor-pointer" type="submit" value="Kontakt speichern" />
            </div>
        </form>
    )
}

export default AddContact
