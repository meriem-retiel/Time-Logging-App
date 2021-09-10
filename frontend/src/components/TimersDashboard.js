import React from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'


class TimersDashboard extends React.Component{
  state={
    timers:[
      {
        title:'Practice piano',
        project:'Music Chores',
        id:1,
        elapsed:'5443644',
        runningSince: Date.now(),
      },
      {
        title:'Bake tacos',
        project:'Kitchen Chores',
        id:2,
        elapsed:'5440001',
        runningSince: null,
      },
    ]
  }
    render(){
        return(
          <div className='Timercontainer'>
        
            <EditableTimerList timers={this.state.timers}/>
            <ToggleableTimerForm isOpen={false}/>
          </div>  
        )
    }
}

export default TimersDashboard
