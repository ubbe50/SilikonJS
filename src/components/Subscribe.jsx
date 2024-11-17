import React from 'react'

const Subscribe = () => {
  return (
    <section aria-label="Subscribe" className="subscribe">
            <div className="together">
            <img src="Images\Icons\bell.svg" alt="yellow bell" />
            <p className="h4">Subscribe to our newsletter to stay informed about latest updates</p>
            </div>
            <input type="text" id="email" name="Your Email" placeholder=  "Your Email" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
        </section>
  )
}

export default Subscribe