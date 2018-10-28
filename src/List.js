import React from 'react';
import PropTypes from 'prop-types'

// app compnents

import GuestName from './GuestName'

const List = ({isEditing, setName, name, isConfirmed, handleConfirmation, handleEditGuest, handleRemove }) => 
    
    <li>
        <GuestName isEditing = {isEditing} 
        handleNameEdits={e => setName(e.target.value)}    
            >
        {name}
        </GuestName>
        <label>
            <input type="checkbox" 
                checked={isConfirmed}
                onChange={handleConfirmation}
            /> Confirmed
        </label>
        <button onClick={handleEditGuest}>
            {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={handleRemove}>remove</button>
    </li>

    List.propTypes = {
        name: PropTypes.string.isRequired,
        isConfirmed: PropTypes.bool.isRequired,
        handleConfirmation: PropTypes.func.isRequired,
        handleEditGuest: PropTypes.func.isRequired,
        setName: PropTypes.func.isRequired,
        handleRemove: PropTypes.func.isRequired,
        isEditing: PropTypes.func.isRequired
    }

export default List;