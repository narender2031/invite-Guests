import React from 'react';
import PropTypes from 'prop-types';
import GuestForm from './GuestForm'

const Header = ({newGuestSubmitHandler, handleNameInput, pandingGuest}) => 
    <header>
        <h1>RSVP</h1>
        <p>A Treehouse App</p>
        <GuestForm 
            newGuestSubmitHandler= {newGuestSubmitHandler}
            handleNameInput = {handleNameInput}
            pandingGuest = {pandingGuest}
        />
    
    </header>

Header.propTypes = {
    pandingGuest: PropTypes.func,
    handleNameInput: PropTypes.func.isRequired,
    newGuestSubmitHandler: PropTypes.func.isRequired


}

export default Header;