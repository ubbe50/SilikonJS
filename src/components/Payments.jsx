import React from 'react'

const Payments = () => {
  return (
    <section aria-label="Receive payment from international bank details" className="payments">
    <div className="container">

        <div className="bankdetails">
            <img src="Images\paymentcard.png" alt="a creditcard on top of a list of contacts" />
        </div>
        <div className="text space-y-2">
            <h5 className="h2">Receive payment from international bank details</h5>
           
            <div className="payments-grid">

                <div className="payment-card">
                    <div className="icon-container">
                       <img src="Images\Icons\credit-card.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5"></h3>
                        <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                    </div>
                </div>


                <div className="payment-card">
                    <div className="icon-container">
                       <img src="Images\Icons\wallet.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5"></h3>
                        <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                    </div>
                </div>

                <div className="payment-btns">
                    <a href="#" className="btn btn-primary">
                        <span>Learn more</span>
                        <img src="Images\Icons\icon-r.svg" alt="arrow" />
                    </a>
                    
                </div>


                


                




            </div>
        </div>



           
            
    </div>
    
</section>
  )
}

export default Payments