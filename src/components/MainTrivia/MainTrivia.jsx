import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { subscribeToQuestions } from '../api/api'

class MainTrivia extends Component {
  constructor(props) {
    super(props)
    this.state = {
      questionItself: 'no question yet'
    }

    subscribeToQuestions((err, questionItself) => this.setState({
      questionItself
    }))
  }

  render () {
    if (this.props.isMainTriviaOpen === false) {
      return null
    }

    return (
      <p className='question'>The question is {this.state.questionItself}</p>
    )
  }
}

MainTrivia.propTypes = {
  isMainTriviaOpen: PropTypes.bool
}

export default MainTrivia
