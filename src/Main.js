import React from 'react';
import PropTypes from 'prop-types';

// app components
import Guest from './Guest';
import Counter from './Counter'

const Main = ({toggleFilter, isFilter, guests, toggleConfirmationAt, toggleEditGuestAt, setNameAt, removeGuestAt, pandingGuest, totalInveted, numberAttending, numberUnattending }) => 
    <div className="main">
        <div>
            <h2>Invitees</h2>
            <label>
            <input type="checkbox" 
                onChange={toggleFilter}
                checked={isFilter}
            /> Hide those who haven't responded 
            </label>
        </div>
        <Counter 
        totalInveted = {totalInveted}
        numberAttending = {numberAttending}
        numberUnattending = {numberUnattending}
        />
        <Guest 
          guests= {guests}
          toggleConfirmationAt = {toggleConfirmationAt} 
          toggleEditGuestAt = {toggleEditGuestAt} 
          setNameAt= {setNameAt}
          isFilter= {isFilter}
          removeGuestAt = {removeGuestAt}
          pandingGuest = {pandingGuest}
        />
    </div>

Main.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFilter: PropTypes.func.isFilter,
    totalInveted: PropTypes.number,
    numberAttending: PropTypes.number,
    numberUnattending: PropTypes.number,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditGuestAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFilter: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pandingGuest: PropTypes.string.isRequired
}

export default Main;