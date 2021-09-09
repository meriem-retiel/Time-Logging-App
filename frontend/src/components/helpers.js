import React from 'react'


const renderElapsedString =(string)=>(string.slice(0,-4)+':'+string.slice(-4,-2)+':'+string.slice(-2,));

export default renderElapsedString