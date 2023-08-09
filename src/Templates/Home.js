import React from 'react'
import Header from '../components/header'
import NavBar from '../components/navbar'

import '../App.css'

function HomePage(){

    return (

        // header part of the webpage
        <div>
            <div>
            
            <Header/>
            </div>

            <div className='NavBar-Container'>
                <NavBar/>
            </div>

            <div>
                <div className = "main-content">
                    <h1 className = "main-content-header">Welcome To Our Webpage</h1> 
                </div>
    
            </div>

            {/* <div>   <embed src="Labels/Enhand SDS v2019.pdf" type="application/pdf" width="100%" height="100%" /></div> */}



        </div>
       


    )
    
}

export default HomePage