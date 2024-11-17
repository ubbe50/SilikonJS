import React from 'react'

const Appfeatures = () => {
  return (
    <section aria-label="App Features" className="features">
    <div className="container">
        <div className="iphone">
            <img src="Images\iphone-tilted.png" alt="an iphone with a creditcard popping out" />
        </div>
        <div className="text space-y-2">
            <h2 className="h1">App Features</h2>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
            <div className="features-grid">

                <div className="feature-card">
                    <div className="icon-container">
                       <img src="Images\Icons\credit-card.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Easy Payment</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                       <img src="Images\Icons\shield.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Data Security</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                       <img src="Images\Icons\bars-graphic.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Cost Statistics</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                       <img src="Images\Icons\communication.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Support 24/7</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                       <img src="Images\Icons\wallet.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Regular Cashback</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>


                <div className="feature-card">
                    <div className="icon-container">
                       <img src="Images\Icons\happy.svg" alt="" /> 
                    </div>
                    <div className="space-y-1">
                        <h3 className="h5">Top Standards</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>




            </div>
        </div>
    </div>

</section>
  )
}

export default Appfeatures