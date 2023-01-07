import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <h2>CONTACT</h2>
        <div className='desktop-contact'>
        <h2>Contact me!</h2>
        <button><a href="">Get my Resume!</a></button>
        </div>
        <form action="">
            <input type="text" placeholder='Name' />
            <input type="text" placeholder='Email' />
            <input type="text" placeholder='Subject' />
            <input type="text" placeholder='Message' />
        </form>
    </div>
  )
}

export default Contact