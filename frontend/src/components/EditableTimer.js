import { Typography } from '@material-ui/core'
import React from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'


class EditableTimer extends React.Component{
    state={
        editFormOpen:false,
      }
      handleFormOpen=()=>{
        this.setState({
            editFormOpen:true,
        })
    }
    handleFormClose=()=>{
        this.setState({
            editFormOpen:false,
        })
    }
    render(){
        if (this.state.editFormOpen){
            return(
                <TimerForm
                id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    handleFormClose={this.handleFormClose}
                /> 
              )
        }else{
            return(
                <Timer
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                    handleFormOpen={this.handleFormOpen}
                    handleTimerDelete={this.props.handleTimerDelete}
                />
            )
        }


    }
}

export default EditableTimer
