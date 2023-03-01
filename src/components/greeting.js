import React from 'react'

const Greeting = ({ prop }) => {

  console.log(prop)
  if (prop != undefined && prop != null) {
    return (
      <div className="greeting">
        <h2>Message</h2>
        <p><span>Text:</span> {prop.content}</p>
        <p><span>Created at:</span> {prop.created_at}</p>
      </div>
    );
  } else {
    return (
      <div className="greeting">
        <h2>Message</h2>
        <p>No message to display</p>
      </div>
    );
  }
}

export default Greeting
