import React, {useState} from "react";


function Footer(){

    return(
       
        <footer id="footer" className="text-center text-white " style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
            <div className="container p-4"></div>
           
            <section className="">
                <p className="d-flex justify-content-center align-items-center">
                <span className="me-3">Register for free</span>
                <button type="button" className="btn btn-outline-light btn-rounded">
                    Sign up!
                </button>
                </p>
            </section>


            <div className="text-center p-3" >
                This website has been made possible by the following UI Library: 
                <a className="text-white" href="https://mdbootstrap.com/"> MDBootstrap.com</a>
            </div>
      </footer>
    )

}

export default Footer;