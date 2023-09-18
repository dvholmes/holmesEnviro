import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'
import {useState } from "react";


import '../css_file/Products.css'

function ProductsPage(){


    const [pfdStates, setpdfStates] = useState({
        hyperGalaxy: false,
        RedTail: false,
        Stealth: false,
        Enhand: false,
      });

    const toggleState = (key) => {
        setpdfStates((prevState) => ({
        ...prevState,
        [key]: !prevState[key],
        }));
    };

    const[isPopUpOpen,setPopup] = useState(false);
    const[file_path,setFilePath] = useState(null);
    
    return (

        // header part of the webpage
        <div>
            <div>
            
              <Header/>
            </div>

            <div className='NavBar-Container'>
                <NavBar/>
            </div>

            <div className ="products-container">

                <div className = "prod_page_title">
                    <h1>Products</h1>
                    <h3>Call for price!!!</h3>

                </div>

                <div className='product_items' >
                    
                    <div className = "product_content">

                        <div className = "product_title_contaniner">
                           
                                


                                <div className = 'title_container'>
                                    <h2 className = "product_title" onClick={() => toggleState('hyperGalaxy')}> HyperGalaxy</h2>
                                </div>

                                <div className={`dropdownMenu ${pfdStates.hyperGalaxy? 'active' : 'inactive'}`}>

                                    <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/hyper-galaxy08.pdf');}}>View Product label pdf</h2>
                                    <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/Hyper Galaxy SDS v2019.pdf');}}>View SDS pdf</h2>

                                </div>


                               
                        </div>

                        <div>
                            <ul>
                                <li className='product_text'>Hyper Galaxy™ transforms plant growth through pioneering rhizobacteria use, improving unrivaled crop promotion and advancement.</li>
                                <li className='product_text'>Directly improves plant growth, crop yields and #1 quality</li>
                                <li className='product_text'>Product is applied to seeds or root zone</li>
                                
                            </ul>



                        </div>
                        
                       
                    </div>
                </div>

   

                <div className='product_items' >
                    
                    <div className = "product_content">

                        <div className = "product_title_contaniner">
                            
                                    


                            <div className = 'title_container'>
                                <h2 className = "product_title" onClick={() => toggleState('RedTail')}> RedTail</h2>
                            </div>

                            <div className={`dropdownMenu ${pfdStates.RedTail? 'active' : 'inactive'}`}>

                                <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/RedTail SDS.pdf');}}>View Product label pdf</h2>
                                <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/redtail05.pdf');}}>View SDS pdf</h2>

                            </div>


                            
                        </div>

                        

                        
                        <ul>
                            <li className='product_text'>Redtail™ innovates crop management, healing wounds, and fortifying plants for enhanced resilience and health.</li>
                            <li className='product_text'>Apply 5 - 12 days prior to severe damage or after pesticide treatments</li>
                            <li className='product_text'>Improves the effectiveness of most crop health programs</li>
                            <li className='product_text'>Note* This product does not replace a insecticide program</li>
                    
                            
                        </ul>

                    </div>

                </div>

                <div className='product_items' >
                    
                    <div className = "product_content">

                        <div className = "product_title_contaniner">
                            
                                    


                            <div className = 'title_container'>
                                <h2 className = "product_title" onClick={() => toggleState('Stealth')}> Stealth</h2>
                            </div>

                            <div className={`dropdownMenu ${pfdStates.Stealth? 'active' : 'inactive'}`}>

                                <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/Stealth  SDS v2019.pdf');}}>View Product label pdf</h2>
                                <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/stealth25.pdf');}}>View SDS pdf</h2>

                            </div>


                            
                        </div>
                        <ul>
                            <li className='product_text'>Stealth™ represents an exceptional technological advancement meticulously crafted and pioneered by the ingenious minds at Holmes ENVIRO.</li>
                            <li className='product_text'>Improve vigor and tolerance to abiotic stress</li>
                            <li className='product_text'>Note* This product does not replace a fungicide program</li>
                            <li className='product_text'>This product is best applied where contact is made with aboveground parts</li>
                          
                        </ul>

                    </div>



                </div>
                <div className='product_items' >
                    
                    <div className = "product_content">

                        <div className = "product_title_contaniner">
                            
                                    


                            <div className = 'title_container'>
                                <h2 className = "product_title" onClick={() => toggleState('Enhand')}>Enhand</h2>
                            </div>

                            <div className={`dropdownMenu ${pfdStates.Enhand? 'active' : 'inactive'}`}>

                                <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/Enhand SDS v2019.pdf');}}>View Product label pdf</h2>
                                <h2 className = "labels_class" onClick={() => {setPopup(true);setFilePath('Labels/Enhand22.pdf');}}>View SDS pdf</h2>

                            </div>


                            
                        </div>
                        <ul>
                            <li className='product_text'>Microdigest™ redefines residue degradation, breaking down plant, organic, and chemical residues with unmatched efficacy.</li>
                            <li className='product_text'>Apply 5 - 12 days prior to severe damage or after pesticide treatments</li>
                            <li className='product_text'>Improves the effectiveness of most crop health programs</li>
                            <li className='product_text'>Note* This product does not replace a insecticide program</li>
            
                        </ul>

                    </div>



                </div>

              

            </div>

            
            {isPopUpOpen && (
        <div className="pop-up">
          <div className="pop-up-content">
            <button className= "close_button"onClick={() => setPopup(false)}>Close</button>

            <embed src={file_path} type="application/pdf" width="100%" height="100%" />
            
            
          </div>
        </div>
      )}
    

        </div>
       


    )
    
}

export default ProductsPage