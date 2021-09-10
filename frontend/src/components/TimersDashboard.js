import React from 'react'
import EditableTimerList from './EditableTimerList'
import {newTimer} from './Helpers'
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
  handleCreateTimer=(timer)=>{
    this.createTimer(timer);
  }
  createTimer=(timer)=>{
    const t = newTimer(timer)

    console.log(this.state.timers)
    this.setState({
      timers:this.state.timers.concat(t)
    })
  }
  handleTimerDelete=(id)=>{
    console.log(id)
    this.DeleteTimer(id)
  }
  DeleteTimer=(id)=>{
    this.setState({
      timers:this.state.timers.filter((item)=>(item.id!==id))
    })
    console.log(this.state.timers)
  }
    render(){
       
        return(
          <div className='Timercontainer'>
        
            <EditableTimerList handleTimerDelete={this.handleTimerDelete} timers={this.state.timers}/>
            <ToggleableTimerForm isOpen={false} handleCreateTimer={this.handleCreateTimer}/>
          </div>  
        )
    }
}

export default TimersDashboard
