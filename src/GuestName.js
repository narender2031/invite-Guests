import React from 'react';
import PropTypes from 'prop-types';

const GuestName = ({isEditing, children, handleNameEdits}) => {
    if(isEditing){
        
        return (
            <input type="text" 
            value={children} 
            onChange={handleNameEdits}
            />
        )
    }
    return (
        <span>{children}</span>
    )
}

GuestName.prototype = {
    isEditing: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    handleNameEdits: PropTypes.func.isRequired
}


export default GuestName;