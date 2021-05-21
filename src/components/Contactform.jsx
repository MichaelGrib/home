import React, {useRef} from 'react'
import emailjs from 'emailjs-com';
export const Contactform = () => {
    
    const form = useRef()


    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_i130ktr', 'template_k6wfapc', e.target, 
        'user_0VuMxVXe79MFEf8PfRsU5')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <div className="maxcontainer">
            <form
            onSubmit={sendEmail}
             ref={form}
             novalidate
             action="mailto:gribmichael1998@gmail.com" 
             method="post"
             name="ContactMe"
             className="form__container"
            
            >
                <h2 className="form__h2">Contact me by email</h2>
                <input type="text"  name="name" className="form__input" placeholder="Name"/>
                <input type="email" name="email" className="form__input" placeholder="Email"/>
                <input type="tel"   name="phone" className="form__input" placeholder="Phone"/>
                <textarea name=""   name="message" className="form__textarea" placeholder="Write something..."></textarea>
                <button type="submit" className="form__btn">Send</button>
            </form>
        </div>
        
    )
}