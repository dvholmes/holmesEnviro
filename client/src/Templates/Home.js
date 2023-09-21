import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'



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

            <section className = 'mission-section'>

                <div className = 'mission-title-container'>
                    <h1 className = 'mission-title'>Revolutionizing Agriculture with Bio-Kevlar & Eco-Pest Control</h1>
                    
                </div>

                <div className = 'mission-context-container'>
                    <p>Holmes ENVIRO is a pioneering entity in the realm of agriculture, 
                        dedicated to fostering early plant growth and safeguarding crops through 
                        cutting-edge biological solutions. With a unique focus on cultivating bacteria and 
                        fungi, they have harnessed the power of nature to create a form of "bio-Kevlar" that 
                        fortifies plants against the relentless assault of root feeders. Moreover, their 
                        innovative approach extends to enhancing crop resilience in the face of challenging 
                        environmental conditions, from heatwaves to saline soils. What sets them apart is their 
                        cultivation of insect-killing spores, providing an eco-friendly means of pest control 
                        that harmonizes with nature's delicate balance, ensuring a sustainable future for 
                        agriculture.</p>

                </div>

                <div className = 'mission-image-container'>
                    <img src = "Eco-Friendly-Pest-Control-What-You-Need-to-Know.jpg" alt ='Pest Control'/>
                </div>

            </section>


            <section className = 'aboutus-container'>

                <div className = 'aboutus-title-container'>

                    <h1 className ='who-are-we'>Who Are We</h1>

                </div>

                <div className = 'aboutus-content-container'>
                    <div className = 'aboutus-content-item'>

                        <div className = 'microbialLabs-container'>
                            <h1 className = 'content-item-headers'>Microbial Labs</h1>

                            <div className = 'microbial-description'>
                                <p>In our microbial labs, we specialize in the cultivation of bacteria and fungi in pure cultures, carefully nurtured on selective media. Our process is driven by a commitment to 
                                    achieving the utmost diversity possible. We employ precise techniques to blend these cultures, resulting in the creation of microbial populations that represent the pinnacle of biodiversity. 
                                    This approach underscores our dedication to scientific excellence and the advancement of microbiological research.
                                </p>
                            </div>
                           

                        </div>

                    </div>

                    <div className = 'aboutus-content-item'>

                        <div className = 'Biotech-research-container'>
                            <img src = 'biotech.png' alt = 'biotech-reasearch'/>

                        </div>

                    </div>

                    <div className = 'aboutus-content-item'>

                        <div className = 'aboutus-images-section'>
                            <div className = 'holmesenviro-desc'>

                                <h2>Michael Holmes</h2>
                                <h3>Chief Operations & Production</h3>
                                <h4>Jan 1995 - Present · 28 yrs</h4>
                                <img src = 'desprof.png' alt = 'Michael Holmes'/>

                            </div>
                            

                        
                        </div>

                    </div>

                    <div className = 'aboutus-content-item'>
                        <div className = 'aboutus-description'>

                            <h2 className = 'content-item-headers'>About Michael Holmes</h2>
                            <div className = 'description-container'>

                                <p>Michael Holmes is a seasoned professional with over 28 years of experience in the field of agriculture and environmental science. 
                                    Currently serving as the Chief Operating Officer at Holmes ENVIRO, LLC, he has been a driving force behind the company's operations and production since January 1995. 
                                    His educational journey includes earning a Doctor of Philosophy (Ph.D.) from Oregon State University, where his research focused on risk assessment of genetically engineered 
                                    microbes, isolation and identification of bacteria and fungi, applications for plant growth-promoting microbes in crops, and bioremediation of environmental pollutants. 
                                    Michael's commitment to environmental sustainability and innovative biological solutions has made him a standout figure in the industry.
                                </p>

                            </div>

                           

                        </div>

                    </div>


                </div>
            </section>

            <div className = 'innovations-containers'>

                <div className = 'innovation_header'> <h1>Innovations</h1></div>

                <h1>OUR INOCULANTS ARE COMBINED WITH CONVENTIONAL AG PROGRAMS FOR CROP QUALITY</h1>
            </div>


            <section className = 'advantages-section'>

                    <div className = 'advantages-header'>
                        <h1>ADVANTAGES = GUARANTEE ANALYSIS AND VIABLE CELLS</h1>
                    </div>


                    <div className = 'advantages-gallery-container'>
                

                        <div className = 'advantage-image-section' >
                            <div className = 'ad-image-container'>
                                <img src ='./advantage-images/Hyper-Galaxy-for-suc.png' alt = 'hypergalaxy'/>

                            </div>

                            <div className = 'ad-image-label'>
                                <h2>REFORESTATION AFTER WILDFIRES </h2>
                            </div>

                        </div>
                        <div className = 'advantage-image-section' >
                            <div className = 'ad-image-container'>
                                <img src ='./advantage-images/Slide11-JPG.png' alt = 'hypergalaxy'/>

                            </div>

                            <div className = 'ad-image-label'>
                                <h2>PURE CULTURES</h2>
                            </div>

                        </div>
                        <div className = 'advantage-image-section' >
                            <div className = 'ad-image-container'>
                                <img src ='./advantage-images/web4-jpg.png' alt = 'hypergalaxy'/>

                            </div>

                            <div className = 'ad-image-label'>
                                <h2>IMPROVE VAM ROOTS</h2>
                            </div>

                        </div>
                        <div className = 'advantage-image-section' >
                            <div className = 'ad-image-container'>
                                <img src ='./advantage-images/web6-jpg.png' alt = 'hypergalaxy'/>

                            </div>

                            <div className = 'ad-image-label'>
                                <h2>BIOCONTROL OF CROP PATHOGENS</h2>
                            </div>

                        </div>
                        <div className = 'advantage-image-section' >
                            <div className = 'ad-image-container'>
                                <img src ='./advantage-images/web7-jpg.png' alt = 'hypergalaxy'/>

                            </div>

                            <div className = 'ad-image-label'>
                                <h2>FACE CLIMATE CHANGES WITH BENEFICIALS</h2>
                            </div>

                        </div>
                        <div className = 'advantage-image-section' >
                            <div className = 'ad-image-container'>
                                <img src ='./advantage-images/web8-jpg.png' alt = 'hypergalaxy'/>

                            </div>

                            <div className = 'ad-image-label'>
                                <h2>MAINTAIN FIELD RESILENCE TO STRESS</h2>
                            </div>

                        </div>

                        

                    </div>
            </section>


            <section className = 'project-container'>
                <div className = 'project-title-container'>
                    <h1>Projects</h1>

                </div>

                <div className = 'project-content-container'>

                    <div className = 'project1-container'>
                        <div className = 'project-image-container'>
                            <img src = './project_images/Slide6-JPG.png' alt = 'mircobial growth'/>
                           

                        </div>

                        <div className = "project-text-container">
                            <h1>Building Soil Health</h1>
                        </div>

                    </div>

                    <div className = 'project2-container'>


                        <div className = "project-text-container">
                            <h1>20 YEARS OF FIELD RESULTS WITH U.S. POTATO GROWERS</h1>
                        </div>

                        <div className = 'project-image-container'>
                            <img src = './project_images/Slide18-JPG.png' alt = 'Potato Statistics'/>

                        </div>

                       

                    </div>

                    <div className = 'project3-container'>
                        <div className = 'project-image-container'>
                            <img src = './project_images/Slide28-JPG.png' alt = 'Tubers in Potatoes'/>

                        </div>

                        <div className = "project-text-container">
                       
                            <h1>EARLY TUBER INITIATION AND QUALITY</h1>
                        </div>

                    </div>

                </div>


            </section>

            
           

          
            <div className = 'footer-container'>
                <Footer/>

            </div>
        </div>
       


    )
    
}

export default HomePage