import React from 'react'

const StarRating = ({starRating}) => {
 const maxStars = 5
 const filledStars = Math.min(starRating, maxStars)
 const emptyStars = maxStars - filledStars
    return (
    <div className='star-rating'>
        {
            [...Array(filledStars)].map((_, index) => (
                <img key={index} src= './Images/Icons/star-filled.svg'></img>
            ))
        }
        {
            [...Array(emptyStars)].map((_, index) => (
                <img key={index} src='./Images/Icons/star.svg'></img>
            ))
        }
    </div>
  )
}

export default StarRating