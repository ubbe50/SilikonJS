import React from 'react'

const Transfers = () => {
  return (
    <section aria-label="Make your money transfer simple and clear" className="transfers">
    <div className="container">



            <div className="transfers-grid">
                <h4 className="h2">Make your money <br/>transfer simple and clear</h4>

                    <div className="transfers-card">
                        <div className="icon-container">
                        <img src="Images\Icons\bx-check-circle.svg" alt="checked checkbox" /> 
                        </div>
                        
                            <p>Banking transactions are free for you</p>
                       
                    </div>


                    <div className="transfers-card">
                        <div className="icon-container">
                        <img src="Images\Icons\bx-check-circle.svg" alt="checked checkbox" /> 
                        </div>
                        
                            <p>No monthly cash commission</p>
                       
                    </div>


                    <div className="transfers-card">
                        <div className="icon-container">
                        <img src="Images\Icons\bx-check-circle.svg" alt="checked checkbox" /> 
                        </div>
                        
                            <p>Manage payments and transactions online</p>
                        
                    </div>
                              

                            <div className="chart-btns">
                                <a href="#" className="btn btn-primary">
                                    <span>Learn more</span>
                                    <img src="Images\Icons\icon-r.svg" alt="arrow" />
                                </a>
                                
                            </div>
                            
                            
                             
            </div>
            <div className="bankchart">
                <img src="Images\chart.png" alt="a chart with an account figure" />                       

            </div>  
            
    </div>
    
</section>
  )
}

export default Transfers
