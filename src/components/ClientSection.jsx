import React, { useEffect, useState } from 'react'
import Testimonials from './Testimonials'

const ClientSection = () => { 

    const [testimonials, setTestimonials] = useState([])
    const getTestamonials = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonials(data)

    }
useEffect(() => {
    getTestamonials()
}, [])




  return (
    <section aria-label="Clients are Loving Our App" className="clients-section">
            <div className="container">

                <div className="client">
                    
                        <h2 className="h1 client-item">Clients are <br/> Loving Our App</h2>

                    
                    <div className="client-item">
                        <div className="testimonials">
                        {
                            testimonials.map((testimonial) => (
                                <Testimonials key={testimonial.id} item={testimonial} />
                            ))
                        }

                        </div>
                    </div>
                </div>
            </div>
        </section>

  )
}

export default ClientSection