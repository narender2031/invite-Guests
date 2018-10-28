import React from 'react';
import PropTypes from 'prop-types'

// app Components
import PandingGuest from './PandingGuest';
import List from './List';

const Guest = ({guests, toggleConfirmationAt, toggleEditGuestAt, setNameAt, isFilter, removeGuestAt, pandingGuest}) => 
    <ul>
    <PandingGuest name={pandingGuest} />
        {guests
        .filter(guest => !isFilter || guest.isConfirmed)
        .map((guest, index) => 
           <List  key={index} 
                name={guest.name} 
                isConfirmed={guest.isConfirmed}
                isEditing = {guest.isEditing}
                handleConfirmation= {() => toggleConfirmationAt(guest.id)} //clousers
                handleEditGuest = { () => toggleEditGuestAt(guest.id)}
                setName={text=> setNameAt(text, guest.id)}
                handleRemove = {() => removeGuestAt(guest.id)}
            />
        )}
    </ul>;
        

    Guest.propTypes = {
        guests: PropTypes.array.isRequired,
        toggleConfirmationAt: PropTypes.func.isRequired,
        toggleEditGuestAt: PropTypes.func.isRequired,
        setNameAt: PropTypes.func.isRequired,
        isFilter: PropTypes.bool.isRequired,
        removeGuestAt: PropTypes.func.isRequired,
        pandingGuest: PropTypes.string.isRequired
    }

export default Guest;

