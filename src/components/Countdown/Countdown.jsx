import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CountdownModal extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    // }
  }

  close (e) {
    e.preventDefault()

    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  render () {
    if (this.props.isCountdownOpen === false) {
      return null
    }

    return (
      <div>
        <div className='modalDiv'>Waiting for other teams...</div>
        <div className='backdrop' onClick={this.close}>&nbsp;</div>
      </div>
    )
  }
}

CountdownModal.propTypes = {
  isCountdownOpen: PropTypes.bool,
  onClose: PropTypes.func
}

export default CountdownModal
