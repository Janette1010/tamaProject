import React from 'react'
import validateInfo from './ValidateInfo'


const Form = () => {
    return (<>
        <section className='form-page'>
            <div className='form-text'>
                <h1>Contact us for anything! :D</h1>

            </div>

            <form className='form' onSubmit={event => {
                debugger
                const emailErrors = validateInfo(event.target.email.value)
                console.log(emailErrors)
            }}>

                <div className="form-input">
                    <label htmlFor="fullname" className="form-label">
                        Full name
                    </label>
                    <input id="fullname" type="text" name="fullname" className="form-input" placeholder='Enter full name here...' />
                </div>
                <div className="form-input">
                    <label htmlFor="phonenumber" className="form-label">
                        Phonenumber
                    </label>
                    <input id="phonenumber" type="tel" name="phonenumber" className="form-input" placeholder='Enter phonenumber here...' />
                </div>
                <div className="form-input">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input id="email" type="email" name="email" className="form-input" placeholder='Enter email here...' />
                </div>
                <div className='form-input'>Message
                    <textarea className='form-input' placeholder='Enter message here...' />
                </div>
                <div className='button'>
                    <button className='form-input-btn' type="submit">Send</button>
                </div>
            </form>
        </section>
    </>
    )
}

export default Form
