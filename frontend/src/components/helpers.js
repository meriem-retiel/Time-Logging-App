

 function renderElapsedString(string){
    return(string.slice(0,-4)+':'+string.slice(-4,-2)+':'+string.slice(-2,));
}
 function newTimer(t){
        return(
            {
            title:t.title,
            project:t.project,
            id:Math.random(),
            elapsed:'5443644',
            runningSince: Date.now(),
            }
        )
}

export  {
    renderElapsedString,
    newTimer,
  }
