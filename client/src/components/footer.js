import React from 'react';
import '../css_file/footer.css'
import { Instagram, Twitter } from 'react-feather';


const Footer = () => {

    return (
        <div>

            <footer className = 'footer-class'>

                  
               

                    <div className = 'copyright-container'>
                        <h1>Copyright Notice</h1>

                        <div className = 'copy-text-frame'>
                        <p className = 'copy-right-text'>© Copyright 2023 Holmesenviro.net
                        All rights reserved. All registered trademarks herein are the property of their respective owners. </p>

                        </div>
                       

                    </div>

                    <div className = 'contacts-container'>

                        <h1 className = 'contacts-title'> Contacts</h1>
                        <p className = 'phone-number-text'>541-760-1161</p>
                        <p className = 'email-text'>info@holmesenviro.net</p>

                    </div>

               

             
                    <div className = 'address-container'>
                        <h1 className = 'address-title'>Address</h1>
                        <p className = 'address-street'>2876 West Hills Rd.</p>
                        <p className = 'address-city-zip'>Philomath,OR, 97370</p>
                        
                    </div>

                    <div className = "social-container">
                        <h1 className = 'social-title'>Follow Us</h1>

                        <div className = 'logo-containers'>
                            <Instagram  className  = 'social-icon'/>
                            <Twitter className = 'social-icon'/>

                        </div>
                       
                        

                    </div>

                    <div className ='footer-image-container'>
                        <img src = "logo-transparent-png.png" alt="Logo"/>  

                    </div>



            </footer>


        </div>
    )

}

export default Footer;


