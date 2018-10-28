import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({numberAttending, numberUnattending, totalInveted}) => 
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{numberAttending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{numberUnattending}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{totalInveted}</td>
            </tr>
        </tbody>
    </table>

Counter.propTypes = {
    numberUnattending: PropTypes.number,
    totalInveted: PropTypes.number,
    numberAttending: PropTypes.number

}

export default Counter;