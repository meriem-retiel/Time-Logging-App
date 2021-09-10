import React from 'react'
import {Card,TextField,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


class TimerForm extends React.Component{
    state={
        title:this.props.title || '',
        project:this.props.title || '',
    }
    handleTitleInput=(e)=>{
        this.setState({
            title: e.target.value
        })
    }
    handleProjectInput=(e)=>{
        this.setState({
            project: e.target.value
        })
    }
    handleSubmit=()=>{
        this.props.handleSubmitForm(this.state)
        console.log(this.state)
    }
    render(){
        const submitText= this.props.title?'Update':'Create';
        return(
            <Card className='Card' >
               <form  >
                    <div className='CardField'> <TextField value={this.state.title} onChange={this.handleTitleInput} className='Card-item'  id="filled-basic" label="Title" variant="filled" size='small' defaultValue={this.props.title}/></div>
                    <div><TextField value={this.state.project} onChange={this.handleProjectInput}  id="filled-basic" label="Project" variant="filled" size='small' defaultValue={this.props.project} /></div>
                    <div>
                    <Button onClick={this.handleSubmit} variant="contained" color="primary">{submitText}</Button>
                    <Button onClick={this.props.handleFormClose} variant="outlined" color="primary">Cancel</Button>

                    
                    </div>
                </form>
 
            </Card>

            
        )
    }
}
export default TimerForm