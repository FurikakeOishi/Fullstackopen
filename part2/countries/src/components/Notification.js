import React from 'react'

const Notification = ({ message, successful}) => {
    if (message === '') {
      return null
    }
  
    return (
      <div className={successful ? 'messageSuccessful' : 'messageFailed'}>
        {message}
      </div>
    )
}

export default Notification