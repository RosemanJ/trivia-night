import React, { Component } from 'react'
import PropTypes from 'prop-types'

class MainTrivia extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    // }
  }

  render () {
    if (this.props.isMainTriviaOpen === false) {
      return null
    }

    return (
      <div>MAIN TRIVIA</div>
    )
  }
}

MainTrivia.propTypes = {
  isMainTriviaOpen: PropTypes.bool
}

export default MainTrivia
