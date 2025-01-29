import axios from "axios";
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleName =(event)=> {
    setName(event.target.value);
  };
  const handleEmail =(event)=> {
    setEmail(event.target.value);
  };
  const handleNumber =(event)=> {
    setNumber(event.target.value);
  };
  const handleMessage =(event)=> {
    setMessage(event.target.value);
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      setIsSending(true);
      // 送信する処理
      await axios.post('http://localhost:3001/send-mail', {
          email:email.trim(),
          message: message,
          number: number,
      })
      console.log("メールが送信されました。")
      // メール送信が終わったあと
      setEmailSent(true);
  } catch (error) {
      console.log(error);
  } finally {
      setIsSending(false);
  };
  console.log('送信されたメール：', email)
  console.log('送信されたメッセージ：', message)
  };

  return (
    <>
      <h2>Contact</h2>
    <form className='common contact'  onSubmit={(event) =>handleSubmit(event)}> 
    <label for="name">Name</label>
    <input type='text' onCh ange={handleName} value={name}></input>
    <label for="email">E-mail</label>
    <input type='text' onChange={handleEmail} value={email}></input>
    <label for="number" >Phone-number</label>
    <input type='text' value={number} onChange={handleNumber}></input>
    <label for="number">Message</label>
    <textarea value={message} onChange={handleMessage}id="message" name="message" rows="20" cols="100"></textarea>
    <div className='submit common'>
    <button type="submit">submit</button>
    </div>
    </form> 
    </>
  );
};

export default Contact;
