import React from 'react'


export default function Contact() {
  return (

    <div >
     <h3 className="text-3xl py-10 dark:text-cyan-50">
            {" "}
            Contact Me
          </h3>
       
        <div className=' flex justify-center flex-wrap'>
            {/* <!-- form --> */}
            <form className=''
              action="mailto:estebanchiaromonte95@gmail.com"
              method="post"
              encType="text/plain"
              id="contact-form"
            >
              {/* <!-- form: name --> */}
              <div className='py-4 dark:text-cyan-50' >
                <input
                className='rounded-full w-full '
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  required
                  name="name"
                />
                <label htmlFor="name">Full name</label>
              </div>
  
              {/* <!-- form: email --> */}
              <div className='py-4 dark:text-cyan-50'>
                <input
                className='form-input rounded-full w-full'
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  required
                /><label htmlFor="email">Email address</label>
              </div>
  
              {/* <!-- form: phone number --> */}
              <div className='py-4 dark:text-cyan-50'>
                <input
                                className='form-input rounded-full w-full'
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  name="phone"
                  required
                /><label htmlFor="phone">Phone number</label>
              </div>
  
              {/* <!-- form: message --> */}
              <div className='py-4 dark:text-cyan-50'>
                <textarea
                className='form-input rounded-full  w-full'
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  
                  name="message"
                  required>

                  </textarea><label htmlFor="message">Message</label>
              </div>
  
          
              <button className="mt-10 mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-3xl hover:scale-125 transition delay-100 duration-300 ease-in-out" type="submit">Send</button>
            </form>
          
          </div>
    </div>
    
) }
