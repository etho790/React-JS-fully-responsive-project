import React, {useState} from "react";
import {Link} from "react-router-dom"
import { MDBRipple } from 'mdb-react-ui-kit';
import "./Navbar.css"


function Navbar(){
    const [Expandbutton, setExpandbutton] = useState(false);
    const [Menuclick, setMenuclick] = useState('home');
  


    let handleMenuItemClick = (e) =>{ 
        let inputValue = e.target.name // you have to dive down deep to find out what the name of the element attribute is
                                            //  that holds the name of the different pages, bcuz the no brainer would be
                                            //to type in "name" as the name of the element attribute, but however name doesnt work here
                                            // only once you console.log(e) and search for the name of the element attribute that holds the
                                            //value of the different names of the webpages do you see that its e.target.nextSibling.textContent
        setMenuclick(inputValue)
        
        
        if(Menuclick=="home")
        {

        }
    }


  

    const Collapsable=(e)=>{
        setExpandbutton(!Expandbutton);
        console.log(Expandbutton)
    }

    return(  
       <nav className="navbar navbar-dark bg-dark" id = "NavBar">
            <div className="container-fluid"> 

                {/*HAMBURGER ICON COLLAPSABLE BASED ON WINDOW SIZE SPECIFIED IN THE CSS FILE*/}
                 <nav className="p-2" id ="MobileIconDropdown">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-mdb-toggle="collapse"                                    
                                onClick={Collapsable}      // When its clicked the id's change for every element
                                
                            >
                            <i className={ Expandbutton ? "fas fa-times fa-1x" :  "fas fa-bars fa-1x" }></i>
                            </button>
                        </div>
                </nav>


                <div className="p-2 flex-grow-1">   {/*USING FLEXBOX which makes everything under this div responsive*/}
                    <div className="text-white" style={{margin: "2px 80px 40px", width: '350px', height: '10px',  fontSize: '1.875em', fontWeight: 'bold'}}>
                        TravelOZ
                        <i className="fas fa-globe fa-2x" style={{fontSize: '1.0em'}}></i>                    
                    </div>                    
                </div>

               
                    {/*ALL THE ELEMENTS ON THE NAVBAR DISPLAYED BASED ON WINDOW SIZE SPECIFIED IN THE CSS FILE*/}
                    {/*USING FLEXBOX which makes everything under this div responsive*/}
                    <div className="p-2" id = {Expandbutton ? "ExpandElements": "NavElements"}>     {/*id for these elements change based on the button click*/}
                        <MDBRipple 
                            className='bg-image hover-overlay shadow-1-strong rounded'
                            rippleTag='div'
                            rippleColor='light'>  
                            {/*Basic highlighting effect*/}               
                            <a to='/'  
                                className="text-white" 
                                name='home'
                                active={Menuclick === 'home'}
                                onClick={handleMenuItemClick}                           
                                href="#"   
                                style={{marginRight: "5em"}}                        
                            >                               
                                Home
                            </a>       
                        </MDBRipple>
            
                    </div>
                    
                                     
            </div>   
       </nav> 
    )
}

export default Navbar;