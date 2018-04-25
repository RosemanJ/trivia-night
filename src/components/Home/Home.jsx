import React, { Component } from 'react'
import axios from 'axios' // ajax client that uses promises - makes requests and returns promise with all expected data
// import update from 'immutability-helper'
import Modal from 'react-modal'
import Spinner from 'react-spinkit'

// import Countdown from '../Countdown/Countdown'
import MainTrivia from '../MainTrivia/MainTrivia'

import './Home.less'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAppReady: true,
      isCountdownOpen: false,
      isMainTriviaOpen: false
    }

    this.handleTeamSubmit = this.handleTeamSubmit.bind(this)
  }

  getData () {
    let testURL = '/Service.Staffing.RI/api/v1/employees/.json?detail=extended'
    axios.get(testURL)
      .then((response) => {
        console.log('[HOME] response: ', response)
        // this.setState({
        // })
      })
      .catch((error) => {
        console.error('axios error: ', error)
      })
  }

  showHideTeamNameSubmit () {
    const teamName = document.querySelector('.teamName').value.length || 0
    if (teamName > 0) {
      document.querySelector('.teamNameSubmit').classList.remove('disabled')
    } else {
      document.querySelector('.teamNameSubmit').classList.add('disabled')
    }
  }

  showHideLoginFields () {
    const loginID = document.querySelector('.loginID').value.length || 0
    if (loginID > 0) {
      document.querySelector('.login').classList.remove('disabled')
    } else {
      document.querySelector('.login').classList.add('disabled')
    }
  }

  handleTeamSubmit() {
    console.log('[HOME] handleTeamSubmit')
    this.setState({
      isCountdownOpen: true
    })
  }

  handleLoginSubmit() {
    console.log('[HOME] handleLoginSubmit')
  }

  closeCountdown() {
    //
  }

  afterOpenModal() {
    //
  }

  render () {
    if (!this.state.isAppReady) {
      return null
    } else {
      return (
        <div className='welcomeContainer'>
          <div className='banner'>
            <span className='zoomIn animated'>Welcome</span><br />
            <span className='zoomIn animated'>to</span><br />
            <span className='rotateIn animated'>Trivia Night</span>
          </div>

          <div className='joinGame'>
            <div className='smallerText'>To join a game:</div>
            <input type='text' placeholder='Enter team name' className='teamName' onKeyUp={this.showHideTeamNameSubmit} />
            <div className='teamNameSubmit disabled'>
              <button className='btn btn-default' onClick={this.handleTeamSubmit}>Submit</button>
            </div>
          </div>

          <div className='orConjunction smallerText'>OR</div>

          <div className='hostGame'>
            <div className='smallerText'>To run a game:</div>
            <input type='text' placeholder='Enter moderator login' className='loginID' onKeyUp={this.showHideLoginFields} />
            <div className='login disabled'>
              <input type='text' placeholder='Password' />
              <button className='btn btn-default' onClick={this.handleLoginSubmit}>Submit</button>
            </div>
          </div>

          <Modal isOpen={this.state.isCountdownOpen} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeCountdown} className='Modal' overlayClassName='Overlay' ref={countdownModal => this.countdownModal = countdownModal}>
            {/* <h2 ref={subtitle => this.subtitle = subtitle}>Countdown!</h2> */}
            <div className='countdownTxt'>Awaiting other teams <Spinner name="ball-pulse-rise" /></div>
          </Modal>

          <MainTrivia isMainTriviaOpen={this.state.isMainTriviaOpen} />

        </div>
      )
    }
  }
}

export default Home
