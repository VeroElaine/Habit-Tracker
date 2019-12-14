// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// =============================
// COMPONENT CLASS
// =============================
class Navbar extends React.Component {
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <navbar>
        <h1>NAVIGATE</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>home</li>
          <li onClick={() => {this.props.handleView('addHabit')}}>add habit</li>
        </ul>
      </navbar>
    )
  }
}


// =============================
// EXPORT
// =============================
export default Navbar
