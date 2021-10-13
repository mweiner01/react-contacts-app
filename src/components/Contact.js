import { FaTimes } from 'react-icons/fa';

import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ contact, onDelete, onToggle }) => {
    return (
        <div className="p-4 rounded border border-gray-300 shadow" onDoubleClick={() => onToggle(contact.id)}>
            <div className="flex gap-x-4 mb-4">
                <div>
                    <img className="w-24 h-auto rounded-full" src="https://www.realmeye.com/forum/uploads/default/optimized/3X/1/d/1d423de54aa8e5836c8fee9d038bf81f44c63b98_1_500x500.jpg" alt="" />
                </div>
                <div className="flex gap-x-4 text-left">
                    <div className="m-auto">
                        <h1 className="text-2xl font-semibold">{contact.name}</h1>
                        <h3 className="text-md font-normal">{contact.job}</h3>
                    </div>
                </div>
            </div>
            <div className="flex my-4 gap-x-4">
                <div className="">
                    <button className="py-1 text-gray-800 px-4 bg-gray-200 hover:bg-gray-300">Bearbeiten</button>
                </div>
                <div>
                    <button onClick={() => onDelete(contact.id)} className="py-1 px-4 text-red-800 bg-red-200 hover:bg-red-300">Löschen</button>
                </div>
            </div>
            <div className="border-t py-4 text-md">
                <div className="mb-4 text-left font-semibold text-xl">
                    <h1>Informationen</h1>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="">
                        <h1>E-Mail: <span className="font-medium">{contact.email}</span></h1>
                    </div>
                    <div className="">
                        <h1>Telefonnummer: <span className="font-medium">{contact.phone}</span></h1>
                    </div>
                    <div className="">
                        <h1>Geburtstag: <span className="font-medium">{contact.birthday}</span></h1>
                    </div>
                    <div className="">
                        <h1>Adresse: <span className="font-medium">{contact.adress}</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact
