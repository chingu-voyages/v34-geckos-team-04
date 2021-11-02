import React from "react";
import ScheduleSelector from 'react-schedule-selector'

class VoteResult extends React.Component {

    state = { schedule : [] }
  
    render() {
      return (
        <ScheduleSelector
            // showing selected time from all users
          selection={this.state.schedule}
        />
      )
    }
  }
  
  export default VoteResult