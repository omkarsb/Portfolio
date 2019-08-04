import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GenericNotFound.css'

export default class GenericNotFound extends Component {
  render() {
    return (
        <div className="GenericNotFound__Maindiv">
            <span>Sorry. The URL seems to be broken :(</span> 
            <Link to="/home">Home</Link>
        </div>
    );
  }
}
