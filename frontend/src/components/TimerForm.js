import React from 'react'
import {Card,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


class TimerForm extends React.Component{
    render(){
        const submitText= this.props.title?'Update':'Create';
        return(
            <Card className='Card' >
               <form  >
                    <div className='CardField'><TextField className='Card-item'  id="filled-basic" label="Title" variant="filled" size='small' defaultValue={this.props.title}/></div>
                    <div><TextField  id="filled-basic" label="Project" variant="filled" size='small' defaultValue={this.props.project} /></div>
                    <div>
                    <Button variant="contained" color="primary">{submitText}</Button>
                    <Button variant="outlined" color="primary">Cancel</Button>

                    
                    </div>
                </form>
 
            </Card>

            
        )
    }
}
export default TimerForm