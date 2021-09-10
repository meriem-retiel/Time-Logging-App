import { Button,IconButton } from '@material-ui/core';
import React from 'react'
import TimerForm from './TimerForm'
import AddIcon from '@material-ui/icons/Add';

class ToggleableTimerForm extends React.Component{
    state={
        isOpen:false,
    }
    handleFormOpen=()=>{
        this.setState({
            isOpen:true,
        })
    }
    handleFormClose=()=>{
        this.setState({
            isOpen:false,
        })
    }
    render(){
        if(this.state.isOpen){
            return(
                <TimerForm isOpen={this.state.isOpen} handleFormClose={this.handleFormClose}/>
            );

        }else{
            return(
                <div className='CardButton'>
                    <Button onClick={this.handleFormOpen}  variant='contained' color='primary'><AddIcon fontSiza='large'/>New</Button>         
                </div>
            )
        }
        
    }
}

export default ToggleableTimerForm
