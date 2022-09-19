import React, {useState} from "react";
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage, MDBRipple,  MDBCardOverlay, } from 'mdb-react-ui-kit';

import  './Card.css';
import Sunsetpicture from '../images/img-1.jpg'
import Desertpicture from '../images/img-8.jpg'
import Waterfallpicture from '../images/img-9.jpg'
import Beach from '../images/img-10.jpg'
import Carribeanpicture from '../images/img-2.jpg'
import black_background from '../images/BlackBackground.jpg'
import PalmCoveBeach from '../images/img-11.jpg'
import Footer from "./Footer"; 


const Cards=()=>{

   
    const [CardList, SetCardList] =  useState(
    [{  
        Entry: 0,      
        ShowDescription: false,  
        Picture: Sunsetpicture,
        Caption:"Punsand Bay Beach", 
        Description:`
        Cape York Camping Punsand Bay is the ultimate base for any Cape York adventurer looking to explore and discover the Cape York Peninsula and Torres Strait Islands.
        Situated five kilometres south-west from "The Tip" on the Cape York Peninsula, 
        it is the most northern address in Australia. The beachfront camping ground, accommodation, restaurant and bar overlook the picturesque waters of the Arafura Sea, Torres Strait Islands and northwards to "The Tip" of Australia.
        Kick back and relax in the The Corrugation Bar after a long day of corrugations. A great place to meet other travellers and swap stories.`,
        CardFlip: null,
        CardUnFlip: null,
        
    }, {
        Entry: 1, 
        ShowDescription: false,   
        Picture: Carribeanpicture,
        Caption:"Noosa Main Beach",
        Description:`
        While other suburbs snatch their names from exotic Aboriginal meanings or English seaside villages, Main Beach is far more literal. Situated at the northern end of the Gold Coast, Main Beach was so named as it was the main surf beach to the town of Southport. 
        But while its name may be obvious, its hidden gems are far more exciting for this is one of the coast's areas which celebrates something old and something new in style.
        A highlight of a visit here is to the beach itself, where the old bathing pavilion (Pavilion 34) has been reincarnated as a casual beach café complimenting the views. `,
        CardFlip: null,
        CardUnFlip: null,
    }, {
        Entry: 2, 
        ShowDescription: false,
        Picture: Desertpicture,
        Caption:"Simpson Desert", 
        Description:`
        Closed between December 1 and March 15, crossing the Simpson Desert takes a minimum of 4 days and demands low range and high ground clearance from your vehicle. The best time of the year is May to October, primarily for the purpose of getting far away from the soaring temperatures of a desert summer.
        Camping permits are required for Munga-Thirri (Simpson Desert) National Park, while a Desert Parks Pass is required for entry & camping in the Simpson Desert Conservation Park, as well as for camping at Purni Bore in Witjira National Park.
        While in the desert, self-sufficiency is essential.`,
        CardFlip: null,
        CardUnFlip: null,
    }, {
        Entry: 3, 
        ShowDescription: false,  
        Picture: Waterfallpicture,
        Caption:"Nudey Beach",
        Description:`
        Is a small stretch of pristine white sand and coral beach lays a large island located 29 km south of Cairns in Far North Tropical Queensland.
        Nudey Beach has a relaxed, friendly vibe. Often you’ll be sharing the beach with only a few other visitors. Nudey Beach is ideal for laying out a towel & soaking up some of the year round warm tropical weather.
        You can even swim and snorkel amongst the colourful marine life that live in the coral reefs, only a few metres out from the shore, making it the perfect place for children on learner swimmers to see the Great Barrier Reef from complete safety and comfort.`,
        CardFlip: null,
        CardUnFlip: null,
    }, {
        Entry: 4, 
        ShowDescription: false,      
        Picture: Beach,
        Caption:"Cape Hillsborough",
        Description:` 
        A haven nestled in the beautiful and tranquil surrounds of the Cape Hillsborough National Park. Cape Hillsborough Nature Tourist Park is the ultimate getaway destination to seek respite from the pace of everyday life. 
        This secluded park is located a short drive for the central North Queensland hub of Mackay. Situated in the National Park and surrounded by absolute beach frontage this unique location offers the best of both worlds. 
        With friends & family encouraging you to get back to nature, unwind, disconnect from the everyday and reconnect with each other and the beautiful natural environment.`,
        CardFlip: null,
        CardUnFlip: null,
    },{
        Entry: 5, 
        ShowDescription: false,       
        Picture: PalmCoveBeach,
        Caption:"Palm Cove",
        Description:` 
        Relax under a coconut palm, paddle around a Great Barrier Reef island, enjoy a spa treatment or delight in a fusion of tropical delicacies. It is all part of life at Palm Cove, an intimate slice of paradise boasting a plethora of holiday experiences.
        With its long sandy beach lapped by the Coral Sea and a backdrop of rainforest-clad mountains, Palm Cove offers ultimate tropical serenity in a postcard setting. It's the perfect place to relax with a book while enjoying the sun or to discover summer fashions after an early morning dip in the ocean.
        Setup a hammock and lay your legs on top and enjoy the experiences that await.`,
        CardFlip: null,
        CardUnFlip: null,
    }])
  
    const Clickable=(iterator)=>{

        //destructures all the elements in the array and stores them in CardsArr
        const CardsArr = [...CardList];

        //finds the exact index of the object property to be updated 
        const i = CardsArr.findIndex((item) => item.Entry === iterator.Entry);

        //changes the "ShowDescription" property of the iterator (ie; the current element that's passed in)
        iterator.ShowDescription=!iterator.ShowDescription;
        //stores it into a variable "ShowDescription"
        const ShowDescription= iterator.ShowDescription

        //spreads all the object properties using the spread syntax and 
        //overides the "ShowDescription" property in the current element at the exact index 'i' in the CardsArr
        CardsArr[i] = { ...iterator, ShowDescription };
        
        //passes all the CardsArr array into the state hook and updates it
        SetCardList(CardsArr);
       
    }
   
    return(
        <div>

            <MDBCard className='text-white'>
                    
                <MDBCardImage overlay src={black_background} id="BlackOverlay" border='success' />
                <MDBCardOverlay>
                    <div className="text-white" id="SubHeader" style={{margin:"5%"}}>                        
                        EPIC DESTINATIONS                            
                    </div>

                    <MDBRow>                                          
                {CardList.map((iterator, index)=>(   
                    
                    <MDBCol size='md' id='FirstRowCards'>
                        <div>
                           
                            <MDBCard class="d-flex justify-content-center align-items-center " style ={{ height: '50vh', width: '38vw', textAlign: 'center', flexWrap: 'wrap'}} >     
                   
                                    <div>
                                    {iterator.ShowDescription ? <React.Fragment>
                                                                    <div class="card text-white bg-dark  mb-3" className="card-img" style={{objectFit: 'fill', height: '28vh', width: '40vw', marginTop: '9em'}}/>        
                                                                    <button  class="btn btn-dark"   style={{width: '40vw'}} onClick={(e)=>Clickable(iterator)}>
                                                                        Click for more Info
                                                                    </button >
                                                                    <h1 class="text-white"  id='DESCRIPTION'>{iterator.Description}</h1>          
                                                                </React.Fragment>
                                                                : 
                                                                <React.Fragment>
                                                                                        <img src={iterator.Picture} className="card-img" style={{objectFit: 'fill', height: '30vh', width: '40vw'}}/>  
                                                                                            <button  class="btn btn-dark" data-mdb-ripple-color="dark"  style={{width: '40vw'}} onClick={(e)=>Clickable(iterator)}>
                                                                                            Click for more Info
                                                                                            </button >   
                                                                                        <h1 class="text-white"  id='TEXT'>{iterator.Caption}</h1>
                                                                                    </React.Fragment>}                            
                                    </div>           
                                            
                            </MDBCard>
                         
                        
                        </div>
                    </MDBCol>
                
                ))}               
                </MDBRow>

                
               
            

                </MDBCardOverlay>
                 {/*PAGINATION*/}
            
                 <ul class="pagination justify-content-center pagination-lg" style ={{marginTop: '1em'}}>
                        <li class="page-item">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item active" aria-current="page">
                            <span class="page-link">
                                1
                                <span class="visually-hidden">(current)</span>
                            </span>
                        </li>
                        <li class="page-item">
                            <a class="page-link" >Next</a>
                        </li>
                    </ul>
                
            </MDBCard>

            <Footer/>

        </div>
       
     

    )
}


export default Cards;









