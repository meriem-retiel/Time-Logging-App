import React from 'react'
import EditableTimer from './EditableTimer'

class EditableTimerList extends React.Component{
    render(){
        return(
          <div>
              <EditableTimer
                title ='timer title'
                project='Project title'
                elapsed='9484820'
                runningSince={null}
                editFormOpen={false}
              />
              <EditableTimer
                title ='timer title'
                project='Project title'
                elapsed='9484820'
                runningSince={null}
                editFormOpen={false}
              />
          </div>  
        )
    }
}

export default EditableTimerList
