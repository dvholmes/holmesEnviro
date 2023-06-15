import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'

import '../App.css'

function ProductsPage(){

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

                        <h2 className = "product_title"> HyperGalaxy</h2>
                        <ul>
                            <li className='product_text'>Hyper Galaxy™ transforms plant growth through pioneering rhizobacteria use, improving unrivaled crop promotion and advancement.</li>
                            <li className='product_text'>Directly improves plant growth, crop yields and #1 quality</li>
                            <li className='product_text'>Product is applied to seeds or root zone</li>
                            
                        </ul>

                    </div>
                </div>

   

                <div className='product_items' >
                    
                    <div className = "product_content">

                        <h2 className = "product_title"> Redtail™</h2>
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

                        <h2 className = "product_title">Stealth</h2>
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

                        <h2 className = "product_title"> MircoDigest</h2>
                        <ul>
                            <li className='product_text'>Microdigest™ redefines residue degradation, breaking down plant, organic, and chemical residues with unmatched efficacy.</li>
                            <li className='product_text'>Apply 5 - 12 days prior to severe damage or after pesticide treatments</li>
                            <li className='product_text'>Improves the effectiveness of most crop health programs</li>
                            <li className='product_text'>Note* This product does not replace a insecticide program</li>
            
                        </ul>

                    </div>



                </div>

              

            </div>

        </div>
       


    )
    
}

export default ProductsPage