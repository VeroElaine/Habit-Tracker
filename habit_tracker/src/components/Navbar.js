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
      <Navbar>
        <h1>NAVIGATE</h1>
        <ul>
          <li onClick={() => {this.props.handleView('home')}}>home</li>
          <li onClick={() => {this.props.handleView('addHabit')}}>add habit</li>
        </ul>
      </Navbar>
    )
  }
}


// =============================
// EXPORT
// =============================
export default Navbar
