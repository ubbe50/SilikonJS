import React from 'react'

const StarRating = ({StarRating}) => {

    const maxStars = 5
    const filledStars = Math.min(starRating, maxStars)
    const emptyStars = maxStars - filledStars
  return (
    <div ClassName="StarRating">
        {
            [...Array(filledStars)].map((_, index) => (
                <i key={index} className="fa-sharp fa-solid fa-star"></i>
            ))
        }
         {
            [...Array(emptyStars)].map((_, index) => (
                <i key={index} className="fa-sharp regular fa-star"></i>
            ))
        }
      
    </div>
  )
}

export default StarRating