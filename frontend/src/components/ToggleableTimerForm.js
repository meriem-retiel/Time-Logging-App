import { Button,IconButton } from '@material-ui/core';
import React from 'react'
import TimerForm from './TimerForm'
import AddIcon from '@material-ui/icons/Add';

class ToggleableTimerForm extends React.Component{
    render(){
        if(this.props.isOpen){
            return(
                <TimerForm/>
            );

        }else{
            return(
                <div className='CardButton'>
                    <Button  variant='contained' color='primary'><AddIcon fontSiza='large'/>New</Button>         
                </div>
            )
        }
        
    }
}

export default ToggleableTimerForm
