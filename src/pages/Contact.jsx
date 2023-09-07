import React, { useState } from 'react';
//* Auth0
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    // contact send message process 
    const [users, setUser] = useState( {
        Name: '',
        Email: '',
        Subject: '',
        Message: ''
    })
    let Name, Value
    const data = (e) => {
        Name = e.target.name;  
        Value = e.target.value;
        setUser({...users, [Name]: Value })
    }

    const sendData = async (e) => {
        const {Name, Email, Subject, Message} = users
            e.preventDefault();
            const result = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'aplication/json'
                },
                body: JSON. stringify({ 
                    Name, Email, Subject, Message
                })
            }
            const res = await fetch('https://e-commerce-project-7a497-default-rtdb.firebaseio.com/Message.json' , result)
            // console.log(res)
            if(res) {
                alert('Your Message sent')
            } else {
                alert('Error')
            }
    }
    return (
    <>
    <main>
        <div className='container'>
        <section className='heading'>
            <div className="h-container">
                <h2 className='keep-in-touch'>Keep In Touch with Us</h2>
            </div>
        </section>
        <section className='form'>
            <div className='f-container'>
                <h3 className='sent-a-message'>Sent A Message</h3>
                <form action="" method='POST'>
                    
                    <fieldset>
                    <legend>Your Name</legend>
                    <input type="text" name='Name' value={users.Name} placeholder='John Weeksly' required autoComplete='off' onChange={data}/>
                    </fieldset>
                    
                    <fieldset>
                    <legend>Your Email</legend>
                    <input type='email' name='Email' value={users.Email} placeholder='shofy@mail.com' required autoComplete='off' onChange={data}/>
                    </fieldset>
                    
                    <fieldset>
                    <legend>Subject</legend>
                    <input type="text" name='Subject' value={users.Subject} placeholder='Write your subject' required autoComplete='off' onChange={data}/>
                    </fieldset>

                    <fieldset>
                        <legend>Your Message</legend>
                        <textarea name="Message" id="" cols="30" rows="10" value={users.Message} placeholder='Write your message here...' required autoComplete='off' onChange={data}></textarea>
                    </fieldset>
                    {
                        isAuthenticated ? 
                        <button type='submit' onClick={sendData}>Send Message</button>
                        : 
                        <button type='submit' onClick={() => loginWithRedirect()}>Login</button>
                    }
                </form>
            </div>
        </section>
        </div>
    </main>
    </>
    )
}

export default Contact