import { Card, Typography,IconButton, Button } from "@material-ui/core";
import React from "react";
import {renderElapsedString} from './Helpers'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

class Timer extends React.Component{
    handleTrashclick= ()=>{
        this.props.handleTimerDelete(this.props.id)
    }
    render(){
        const elapsedString = renderElapsedString(this.props.elapsed)
        return(
            <Card className='Card' >
                <div className='CardContent'>
                <Typography component="h6" variant="h6">{this.props.title}</Typography>
                <Typography  variant="subtitle1" color="textSecondary">{this.props.project}</Typography>
                <Typography component="h6" variant="h6">{elapsedString}</Typography>
                <div className={'RightActions'}>
                <IconButton onClick={this.handleTrashclick} aria-label="delete" >
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton onClick={this.props.handleFormOpen} aria-label="delete" >
                    <EditIcon fontSize="small" />
                </IconButton>                </div>
                </div>
                <div>
                    <Button className='CardButton' variant='outlined' color='primary'>Start</Button>
                </div>

            </Card>
        )
    }
}

export default Timer