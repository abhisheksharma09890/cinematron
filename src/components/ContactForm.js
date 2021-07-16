/* import React from 'react';
import { useHistory } from 'react-router';
import './ContactForm.css';


export default function ContactForm() {

  const history = useHistory();
    return (
        <div>
        <div className="contact__form">
            <div className="contact__image">
                <img src="https://source.unsplash.com/2076x3200/?movie,films"></img>

            </div>
            <div className="contact__fill">

            <form>
              <div class="form-group">
                <label for="firstName">First Name</label><br/>
                <input className="firstname__input" type="text" class="form-control" id="firstName"/>
             </div>
              <div class="form-group">
                <label for="LastName">Last Name</label><br/>
                <input className="lastname__input" type="text" class="form-control" id="LastName"/>
              </div>

              <div class="form-group">
                <label for="email">Email address</label><br/>
                <input className="email__input" type="email" class="form-control" id="email" placeholder="name@example.com"/>
              </div>
      
      
              <div class="form-group">
                <label for="textarea">Your Message</label><br/>
                <textarea className="textarea__input" class="form-control" id="teaxtarea" rows="6"></textarea>
              </div>

              <div class="form-group">
               <button onClick={(event)=>{
                 event.preventDefault();
                 
                 history.push('/');}}>SEND</button>
              </div>
            </form>
          

            </div>
            
        </div>
        </div>
    )
}
 */