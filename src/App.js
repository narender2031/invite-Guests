import React, { Component } from 'react';


// app components 
import Header from './Header'
import Main from './Main'
class App extends Component {
  state = {
    isFilter: false,
    pandingGuest: '',
   guests: []
  }

  lastGuestId = 0;
  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }
  toggleGuestPropertyAt = (property, id) => 
    this.setState({
      guests: this.state.guests.map((guest)=> {
        if(id == guest.id){
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })

  toggleConfirmationAt= id => 
  this.toggleGuestPropertyAt("isConfirmed", id);

  toggleEditGuestAt = id => 
  this.toggleGuestPropertyAt("isEditing", id);
  
  setNameAt = (name, id) => 
    this.setState({
      guests: this.state.guests.map((guest)=> {
        if(id == guest.id){
          return {
            ...guest,
            name
          }
        }
        return guest;
      })
    })
    
  toggleFilter = () => {
    this.setState({
      isFilter: !this.state.isFilter
    });
  }

  removeGuestAt = index => 
  this.setState({
    guests: [
      ...this.state.guests.slice(0, index),
      ...this.state.guests.slice(index + 1)
    ]
  })

  handleNameInput = e => {
    this.setState({
      pandingGuest: e.target.value
    })
  }

  newGuestSubmitHandler = e =>  {
    e.preventDefault();
    const id  = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pandingGuest,
          isConfirmed: false,
          isEditing: false,
          id: id
        },
        ...this.state.guests
      ],
      pandingGuest: ''
    })
  }
  getTotalInvited = () => this.state.guests.length;

  getAttandedGustes = () => 
  this.state.guests.reduce(
    (total, guest)=> guest.isConfirmed ? total + 1 : total,
    0);

  render() {
   const totalInveted =  this.getTotalInvited();
   const numberAttending = this.getAttandedGustes();
   const numberUnattending = totalInveted - numberAttending;
    return (
      <div className="App">
        <Header 
          newGuestSubmitHandler = {this.newGuestSubmitHandler}
          handleNameInput = {this.handleNameInput}
          pandingGuest = {this.pandingGuest}
        />
        <Main 
          toggleFilter ={this.toggleFilter}
          isFilter = {this.state.isFilter}
          totalInveted = {totalInveted}
          numberAttending = {numberAttending}
          numberUnattending = {numberUnattending}
          guests= {this.state.guests}
          toggleConfirmationAt = {this.toggleConfirmationAt} 
          toggleEditGuestAt = {this.toggleEditGuestAt} 
          setNameAt= {this.setNameAt}
          removeGuestAt = {this.removeGuestAt}
          pandingGuest = {this.state.pandingGuest}
        />
    </div>
    );
  }
}

export default App;
