import React from 'react'

const Message = ({msg,bgColor}) => {
  let styles = {
    display: "flex",
    padding: "1rem",
    marginBottom:"1rem",
    textAling:"center",
    justifyContent:"center",
    fontWeight:"bold",
    backgroundColor:bgColor,
    color:"white"
  }
  return (
    <div style={styles}>
        <p> {msg} </p>
    </div>
  )
}

export default Message