import React, { useEffect, useState } from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
    const [ faq, setFaq ] = useState ([])

    const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setFaq(data)
    }

    useEffect(() => {
        fetchFaq()


    }, [])
  
  
  
  
    return (
    <section aria-label="FAQ" className="faq-section">
    <div className="container">
        <div className="first-column">
        
            <h2 className='h2'>Any questions???? <br /> Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
            <div className="contact-options">
            
                <div className="option phone">
                    <i className= "fa-solid fa-phone-volume primary" alt="retro phone icon"></i>
                    <p> Still have questions?</p>
                    <a href="#" className='primary'> contact us <i className="fa-solid fa-arrow-right"></i></a>
                    
                </div>
                <div className="option chat">
                    
                    <i className= "fa-solid fa-comment-dots fa-flip-horizontal" alt=""></i>
                    <p> Don't like phone calls?</p>
                    <a href="#"> contact us <i className="fa-solid fa-arrow-right"></i></a>
                    
                </div>
                      
                    
                
            </div>
        
        </div>

                 <div className="faq">
                    <div className="accordion">
                  
                  
                  {
                    faq.map(item => (
                         <FaqCard key={item.id} item={item} />
                    ))
                  }
                  
                  
                  

            





            
                    </div>
                </div>
            
    </div>
    


</section>
  )
}

export default Faq