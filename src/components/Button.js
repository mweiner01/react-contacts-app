import React from 'react'
import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className={'text-white font-semibold py-1 px-4 rounded bg-gray-400'}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'red',
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
