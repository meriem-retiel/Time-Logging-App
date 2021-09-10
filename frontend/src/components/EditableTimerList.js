import React from 'react'
import EditableTimer from './EditableTimer'

class EditableTimerList extends React.Component{
  
    render(){
        const timers = this.props.timers.map((item)=>(
          <EditableTimer
          id ={item.id}
          title ={item.title}
          project={item.project}
          elapsed={item.elapsed}
          runningSince={item.runningSince}
          handleTimerDelete={this.props.handleTimerDelete}
        />
        ))
        return(

          <div>
             {timers}
          </div>  
        )
    }
}

export default EditableTimerList
