import React from 'react';
import "./navbar.scss";
const Navbar=()=>{
    return(
       <div>
            <div className="navbar">
                <div className="container">
                    <div className="logo">
                        <span className="text">Fiverr</span>
                        <span className="dot">.</span>
                    </div>

                    <div className="links"> 
                        <span>Fiverr Business</span>
                        <span>Explore</span>
                        <span>English</span>
                        <span>Sign in</span>
                        <span>Become a Seller</span>
                        <button>Join</button>
                    </div>                 
                </div>
                <div>
                <hr />
                    <div className='menu'>
                        <span>ffj</span>
                        <span>ffj</span>
                    </div>
            </div>
            </div>
            
       </div>
        
    )
}

export default Navbar