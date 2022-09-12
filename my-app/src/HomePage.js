import React, {useState} from "react";

import { MDBRipple  } from 'mdb-react-ui-kit';
import './HomePage.css';
import BackgroundVideoPic from './videos/video-1.mp4'
import OZpromoVideo from './videos/OZvid.mp4'



//FIX VIDEO AND MAKE IT SMOOTH AND THE RIGHT RESOLUTION AND ADD INFO FOR EACH OF THE CARDS



const HomePage = () => {

    const [Menuclick, setMenuclick] = useState(true);
    const [show, setShow] = useState(null);

    let handleMenuItemClick = (e) =>{ 
        //let inputValue = e.target.nextSibling.textContent // you have to dive down deep to find out what the name of the element attribute is
                                                    //  that holds the name of the different pages, bcuz the no brainer would be
                                                    //to type in "name" as the name of the element attribute, but however name doesnt work here
                                                    // only once you console.log(e) and search for the name of the element attribute that holds the
                                                    //value of the different names of the webpages do you see that its e.target.nextSibling.textContent
        setMenuclick(prevChecked =>  !prevChecked)
        
        if(Menuclick==true)
        {
            setShow(
                <div class="ratio ratio-16x9" id="video">
                    <iframe  
                             src={OZpromoVideo}  
                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"         
                             frameborder="0"
                             title="Youtube Player"
                    ></iframe>
              </div>
            )          
        }
        if(Menuclick==false)
        {
            setShow(null)          
        }
    }

        return(

            <div className='hero-container'>
                <div className="container-fluid"> 

                    <video src= {BackgroundVideoPic} autoPlay loop muted /> {/*This is how you play videos on loop*/}
                
                    <div className="text-white" id="MainHeader">      
                        ADVENTURE AWAITS                        
                    </div>
                    {/*textAlign='center' makes the text headings at the center and fully responsive*/}
                    <div className="text-white" id="SubHeader">                        
                        What are you waiting for?                            
                    </div>
 
 

                    <div className='hero-btns'>
                                      

                        <MDBRipple 
                            className='bg-image hover-overlay shadow-1-strong rounded'
                            rippleTag='div'
                            rippleColor='light'>  
                            {/*Basic highlighting effect*/}  
                          
                                                                                                        {/*margin styling to separate the buttons*/}
                                <button type="button" className="btn btn-outline-light btn-lg"  color='light' onClick={handleMenuItemClick} data-mdb-toggle="modal" data-mdb-target="#staticBackdrop" style={{ height: "4em", width: "12em"}}>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.75)' }}></div>{/*This highlights the bar when hovered over*/}
                                        WATCH TRAILER                                                                              
                                </button>
                          
                        </MDBRipple> 

                    </div>


                    <div>
                         {show}
                    </div>             



                    

                </div>
            </div>
        )


}


export default HomePage