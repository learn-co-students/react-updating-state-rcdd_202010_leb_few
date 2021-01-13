// Code ClickityClick Component Here
import React from 'react';
 
class ClickityClick extends React.Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      theme: 'blue',
      addressInfo: {
            street: null,
            number: null,
            city: null,
            country: null
           },
    };
  }
 
//   handleClick = () => {
// this.setState({
//   addressInfo: Object.assign({}, this.state.addressInfo, {
//     city: 'New York City'
//   })
// });
//   };

  
//   handleClick = () => {
//   this.setState({
//     hasBeenClicked: true
//   })
//   console.log(this.state.hasBeenClicked); // prints false
// }


handleClick = () => {
  this.setState({
    hasBeenClicked: true
  }, () => console.log(this.state.hasBeenClicked)) // prints true
}
 
  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}
 
export default ClickityClick;