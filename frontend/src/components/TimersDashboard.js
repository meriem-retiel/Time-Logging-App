import React from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'


class TimersDashboard extends React.Component{
    render(){
        return(
          <div className='Timercontainer'>
        
            <EditableTimerList/>
            <ToggleableTimerForm isOpen={true}/>
          </div>  
        )
    }
}

export default TimersDashboard
