import { useState } from 'react';
import './Contact.css';

const Contact=()=>{
    const [firstName, setFirstName]=useState("");
    const [email, setEmail]=useState("");
    const [error, setError]=useState(false);
   const submitForm=(e)=>{
    e.preventDefault();
    if(firstName.length===0 || email.length===0)
    {
        setError(true)
    }
    if(firstName && email)
    {
       
        window.location = 'mailto:vijitha006@gmail.com';

    }
        
    }
    
    return(
<section>
    <div>
<h1 className=" text-center heading1" id="contact">Contact Me</h1>
    </div>
    <div className=" d-flex align-items-center  justify-content-center ">
        <form className=" w-50 " onSubmit={submitForm}>
            <div>
            <label for="fname">First Name <span className='text-danger'>*</span></label>
            <input type="text" id="fname" className=" w-100 input-text" onChange={e=>setFirstName(e.target.value)}></input>
           {error && firstName.length <=0 ? <label className=' text-danger '>Please Enter First name</label> : ""}
            </div>
            <div>
            <label for="lname">Email id <span className='text-danger'>*</span></label>
            <input type="email" id="lname" className="w-100 input-text" onChange={e=>setEmail(e.target.value)}></input>
            {error && email.length <=0 ? <label className='text-danger'>Please Enter Your maid id</label> : ""}
            </div>
            <label for="msg">Your Meassage</label>
            <textarea className='w-100' id="msg"></textarea>
            <div className='text-center mb-3'>
            <button type="submit" >Submit</button>
            </div>
        </form>
    </div>
</section>
    )
}
export default Contact;