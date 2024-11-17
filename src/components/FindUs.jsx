import React from 'react'

const FindUs = () => {
  return (
    <section aria-label="Map" className="map-section">
    <div className="container">
        <div className="map">
            <img src="Images/map.png" alt="pin pointed map"/>
        </div>
        <div className="address-side">
            <div className="adress-item">
                <h1>Medical Center 1</h1>
               <div className="list-item address-pointer">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-map.svg" alt=""/>
                    </div> 
                    <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                </div>

                <div className="list-item phone-number">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-phone-call.svg" alt=""/>
                    </div> 
                    <p>4(406) 555-0120</p>
                </div>

                <div className="list-item opening-hours">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-time-five.svg" alt=""/>
                    </div> 
                    <p><b>Mon – Fri:</b> 9:00 am – 22:00 am</p>
                </div>
                <div className="list-item opening-hours weekend">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-time-five.svg" alt=""/>
                    </div> 
                    <p><b>Sat – Sun:</b> 9:00 am – 20:00 am</p>
                </div>



            </div>

            <div className="adress-item">
                <h1>Medical Center 2</h1>
               <div className="list-item address-pointer">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-map.svg" alt=""/>
                    </div> 
                    <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                </div>

                <div className="list-item phone-number">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-phone-call.svg" alt=""/>
                    </div> 
                    <p>(406) 544-0123</p>
                </div>

                <div className="list-item opening-hours">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-time-five.svg" alt=""/>
                    </div> 
                    <p><b>Mon – Fri:</b> 9:00 am – 22:00 am</p>
                </div>
                <div className="list-item opening-hours weekend">
                    <div className="icon-holder">
                        <img src="Images/Icons/bx-time-five.svg" alt=""/>
                    </div> 
                    <p><b>Sat – Sun:</b> 9:00 am – 20:00 am</p>
                </div>



            </div>
            
        
                <div className="social-buttons">
                    <div className="icon-container">
                        <img src="Images/Icons/social-btn/bxl-facebook-square.svg" alt="facebook icon"/>
                    </div>
                
                    <div className="icon-container">
                        <img src="Images/Icons/social-btn/bxl-instagram-alt.svg" alt="instagram icon"/>
                
                    </div>
                    <div className="icon-container">
                        <img src="Images/Icons/social-btn/bxl-twitter.svg" alt="twitter icon"/>
                
                    </div>
                    <div className="icon-container">
                        <img src="Images/Icons/social-btn/bxl-youtube.svg" alt="youtube icon"/>
                    </div>
        
        
        
    
                 </div>
         </div>
    </div>
</section>
  )
}

export default FindUs