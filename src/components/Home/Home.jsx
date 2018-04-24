import React, { Component } from 'react'
import axios from 'axios' // ajax client that uses promises - makes requests and returns promise with all expected data
// import update from 'immutability-helper'

// import Navbar from '../NavBar/NavBar'
// import Toolbar from '../ToolBar/ToolBar'
// import SummaryGrid from '../SummaryGrid/SummaryGrid'
// import EmployeeProfileModal from '../EmployeeProfileModal/EmployeeProfileModal'
// import SlidingPanel from '../SlidingPanel/SlidingPanel'
// import MenuItem from '../MenuItem/MenuItem'
// import FillDelete from '../FillDelete/FillDelete'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        isAppReady: true
    }

    // this.filterPanel = this.filterPanel.bind(this)
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

  render () {
    if (!this.state.isAppReady) {
      return null
    } else {
      return (
        <div className='container'>
            ABC
        </div>
      )
    }
  }
}

export default Home
