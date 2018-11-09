import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom'

export default class Lander extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          All The Runs
        </p>
        <Link to='/races'>Races</Link>
      </header>
    )
  }
}
