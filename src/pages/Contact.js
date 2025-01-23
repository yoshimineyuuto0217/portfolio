import React from 'react'

const Contact = () => {
  return (
    <>
    <h2>Contact</h2>
    <form className='common contact'> 
    <label for="name">Name</label>
    <input type='text'></input>
    <label for="email">E-mail</label>
    <input type='text'></input>
    <label for="number">Phone-number</label>
    <input type='text'></input>
    <label for="number">Message</label>
    <textarea id="message" name="message" rows="20" cols="100"></textarea>
    <div className='submit common'>
    <button>submit</button>
    </div>
    </form>
    </>
  )
}

export default Contact