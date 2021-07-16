import React, { useEffect,useState } from 'react'
import requests from '../requests';
import './Nav.css';
import './ContactForm.css';
import Fade from 'react-reveal/Fade';


function Nav() {

    const [show,handleShow] = useState(false);
    const [divState,setDivState] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
              handleShow(true);
            } else {
              handleShow(false);
            }
          });
          /* return () => {
            window.removeEventListener("scroll");
          }; */


    },[])

   

    const handleClick = (e) =>{
      const contactBtn = document.querySelector('.banner__button');
      const cancelLogo = document.querySelector('.cancel__logo');

      if (divState == false){
      e.preventDefault();
       setDivState(true);
       contactBtn.style.display='none';
       cancelLogo.style.display='block';
       
      }
      else{
        setDivState(false);
        contactBtn.style.display='block';
        cancelLogo.style.display='none';
      }

    }
    return (
      <>
     

        <div className={`nav ${show && "nav__black"}`}>
            <img
              className="nav__logo"
              src="/images/freeLogo.jpeg"
              alt="Cinematron Logo"
            />
     
            <button onClick={handleClick} className="banner__button">Contact</button>
            <img onClick={handleClick} className="cancel__logo" src="/images/cancel.png"></img>
            
        </div>

        {divState && <Fade top> <div className="contact__fill">

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
                 }}>SEND</button>
              </div>
            </form>
          

            </div></Fade>}
        </>
    )
}

export default React.memo(Nav)
