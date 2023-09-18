import React from 'react'
import Header from '../components/header'


import '../css_file/homepage.css'

function HomePage(){

    return (

        // header part of the webpage
        <div>

          
           <div className = "headerpage-container">
            <Header/>

           </div>


            
        

            <div>
                <div className = "main-content">

                    <h1 className = "main-content-header">INOCULATE SOIL AND CROP HEALTH</h1>

                    <div className = "main-button-container">
                        <button className = "main-content-button">Contact Us</button>
                    </div>

                    
                
                </div>
    
            </div>
        </div>
       


    )
    
}

export default HomePage