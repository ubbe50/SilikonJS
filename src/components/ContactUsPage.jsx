import React, {useState} from 'react'
import ConsultationForm from './ConsultationForm'

const ContactUsPage = () => {
  return (
    <section aria-label="Contact us" className="c-u">
    <div className="container">

<nav aria-label="breadcrumb">
    <ol className="breadcrumb">
        <li><a href="/"><i className="fa-solid fa-house"></i>  Homepage</a></li>

        <li className="current">Current Page</li>
    </ol>
</nav>

<div className="contact-content">
    
    <div className="contact-info">
        <h1 className="h2">Contact Us</h1>

        <div className="contact-card">
            <div className="btn-round btn-white">
                <img src="Images/Icons/bx-envelope2.svg" alt="an envelope" />    
            </div>
            <div className="contact-text">
                <h2> Email us</h2>
                <p> Please feel free to drop us a line. We will respond as soon as possible.</p>
                <a href="#"> Leave a Message <i className="fa-solid fa-arrow-right"></i></a>
            </div>
             </div>
        <div className="contact-card">
            <div className="btn-round btn-white">
            <img src="Images/Icons/add-group.svg" alt="icon two people and a +" />    
            </div>
            <div className="contact-text">
                <h2> Careers</h2>
                <p> Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                <a href="#"> Send an application  <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
        </div>

    
        <ConsultationForm/>
    


</div>
</div>


 
</section>
  )
}

export default ContactUsPage