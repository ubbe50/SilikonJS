import React from 'react'

const Howdoesitwork = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
    <div className="container space-y-3">
        <h2 className="h1">How Does It Work?</h2>

        <div className="carousel">
            <div className="carousel-item">
                <img src="Images\iPhone 12 Pro left.png" alt="" />
            </div>
            <div className="carousel-item">
                <img src="Images\iPhone 12 Pro.png" alt="" />
            </div>
            <div className="carousel-item">
                <img src="Images\iPhone 12 Pro right.png" alt="" />
            </div>
        </div>

        <div className="text">
            <h3 className="h4">Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
        </div>

    </div>

</section>
  )
}

export default Howdoesitwork