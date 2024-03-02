import React, { useState } from 'react'
import Modal from './Modal';

const Form = () => {
    const [open, setOpen] =useState(false);

    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [dob,setDob]=useState('')
 
    const handleClose = () => {
        setOpen(false);
    };
 
    const handleOpen = () => {
        setOpen(true);
    };

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const validateDOB=(dob)=>{
        let currentDate=new Date()
        let givenDate=new Date(dob)
        if(currentDate<givenDate)
        {
            return false
        }

        return true

    }

    const handleSubmit=(e)=>{
        if(!validateEmail(email))
        {
            alert("Invalid email. Please check your email address.")
        }

        if(phone.length!==10)
        {
            alert("**Invalid phone number. Please enter a 10-digit phone number.")
        }
        if(!validateDOB(dob))
        {
            alert("Invalid date of birth.Date of birth cannot be in future")
        }

        
        setOpen(true)
        setDob('')
        setUsername('')
        setEmail('')
        setPhone('')
      e.preventDefault()
    }
  return (
    <div>
    <div className="modal" onClick={(e)=>handleClose}>
      <h1>User Details Modal</h1>
      <button onClick={handleOpen}>Open Form</button>
      </div>

      <Modal isOpen={open}>


<div className="modal-content">
<form typeof='submit'>
        <h1>Fill Details</h1>
        <h5>Username:</h5>
        <input type="text" width='100%' id="#username" value={username} onChange={(e)=>setUsername(e.target.value)} required/>
        <h5>Email Address:</h5>
        <input type="text" width='100%' id="email" value={email} onChange={(e)=>setEmail(e.target.value)}required/>
        <h5>Phone Number:</h5>
        <input type="text" width='100%' id="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}required/>

        <h5>Date of Birth:</h5>
        <input type="date" width='100%' id='dob' value={dob} onChange={(e)=>setDob(e.target.value)} required/>
           <br/><br/>
        <button onClick={(e)=>handleSubmit(e)} className="submit-button">Submit</button>
        </form>  

</div>
     
            </Modal>
</div>
  )
}

export default Form
