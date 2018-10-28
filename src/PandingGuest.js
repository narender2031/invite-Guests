import React from 'react';
import PropTypes from 'prop-types';

const PandingGuest = ({name}) => {
    if(name){
        return (
            <li className="panding">
                <span>{name}</span>
            </li>
        )
    }
    return null;

}

PandingGuest.propTypes = {
    name: PropTypes.string.isRequired
}

export default PandingGuest;
