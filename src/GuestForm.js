import React from 'react';
import PropTypes from 'prop-types';

const GuestForm = ({newGuestSubmitHandler, handleNameInput, pandingGuest}) => 
    <form onSubmit={newGuestSubmitHandler}>
        <input type="text" 
        onChange={handleNameInput}
        value={pandingGuest}
        placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">Submit</button>
    </form>

GuestForm.propTypes = {
    pandingGuest: PropTypes.func,
    handleNameInput: PropTypes.func.isRequired,
    newGuestSubmitHandler: PropTypes.func.isRequired
}

export default GuestForm