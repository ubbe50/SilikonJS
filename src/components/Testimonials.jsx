import React from 'react'
import StarRating from './StarRating'

const Testimonials = ({item}) => {
  return (
    <div className="testimonial client-card client-item">
            <div className="icon-container">
                <i className='fa-sharp fa-solid fa-quote-left'></i>
            </div>
            <StarRating starRating={item.starRating} />
            <p className='testimonial-text'>{item.comment}</p>
                <div className="testimonial-author designer-card">
                    <img className= "designer-avatar" src={item.avatarUrl} alt="picture of testimonial author" />
                    <div className="author designer-text">
                        <h6 className='name h6'>{item.author}</h6>
                        <p className='role text-xs'>{item.jobRole}</p>
                    </div>
            </div>
    </div>
  )
}

export default Testimonials