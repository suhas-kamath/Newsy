import './App.css';

import React, { Component } from 'react'
import Navbar from './mycompo/Navbar';
import News from './mycompo/News'

export default class App extends Component {
  
  render() {
    return (
      <div>
      <Navbar/>
      <News/>      
      </div>
    )
  }
}
