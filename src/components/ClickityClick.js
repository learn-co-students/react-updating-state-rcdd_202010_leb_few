// Code ClickityClick Component Here
import React, {Component} from 'react';

export default class ClickityClick extends Component{
   constructor (){
     super();
     this.state={
       hasbeenClicked:false
     };
   }
   
   handleClick = () => { 
     this.setState(previousState => {
       return {
         hasbeenClicked: !previousState.hasbeenClicked
       }
     })
   }
   
    render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.hasbeenClicked ? "ON" : "OFF"}</button>
      </div>
    );
  }
}