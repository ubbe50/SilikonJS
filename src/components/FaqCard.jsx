import React, { useState } from 'react'

const FaqCard = ({item}) => {

    const [isOpen, SetIsOpen] = useState(false) 
    const toggleAccordion = () => {
        SetIsOpen(!isOpen)
    }

  return (

    <div className="faq-card">
                        <div className= "question accordion-item">
                            <div className={`item-titlebar ${isOpen ? 'active' : ''}`} onClick={toggleAccordion}>
                            <h3 className='h3'>{item.title}</h3>
                            <div className="btn-round">
                                <i className= { `item-icon fa-solid ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                            </div></div>
                            
                        </div>
                            {
                            isOpen && (
                                <p className={`item-content ${isOpen ? 'active' : ''}`}>
                                    {item.content}
                                </p>
                            )
                            
                            
                            }


                        
                    </div>
  )
}

export default FaqCard