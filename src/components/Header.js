import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    return (
        <div className="text-center max-w-3xl mx-auto bg-gray-200 p-4 rounded mb-8">
            <div className="flex justify-center gap-4 mb-2 text-gray-800">
                <h1 className="text-4xl">{title}</h1>
                <Button color={showAdd ? 'red' : 'gray'} text={showAdd ? 'Schließen' : 'Hinzufügen'} onClick={onAdd} />
            </div>
            <div className="">
                <h3 className="text-xl font-light">Verwalte deine Kontakte ganz einfach mit <span className="font-semibold">Contactos</span>.</h3>
            </div>
        </div>
    )
}

Header.defaultProps = {
    title: 'Meine Kontakte'
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
