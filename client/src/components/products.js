import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../css_file/Products.css'
import {HyperGalaxy,RedTail,Enhand,Stealth} from './products_content'


const ProductsTemplate = ({ prod_object }) => {
    // Access properties of the prod_object
    const header = prod_object.Header;
    const image_path = prod_object.image_path;
    const text_list = prod_object.text_list;
    const main_container_class = 'product-item-container-' + header
    
  
    return (
      <div className={main_container_class}>
        <div className = 'product-item-frame'>
            {/* <div className="product-item-title">
                <h1>{header}</h1>
            </div> */}
            <div className="product-item-logo">
                <img src={image_path}alt="nothing" />
                
            </div>
            <div className="product-item-list-container">
                <div className="product-text-container">
                    {text_list.map((text, index) => (
                    <span className="product_text" key={index}>
                        {text}
                    </span>
                    ))}
                </div>
            </div>

        </div>
       
      </div>
    );
  };




function ProductsPanel(){

    const items = [
        <ProductsTemplate prod_object={HyperGalaxy}/>,
        <ProductsTemplate prod_object={RedTail}/>,
        <ProductsTemplate prod_object={Stealth}/>,
        <ProductsTemplate prod_object={Enhand}/>
        
   
        
      ];
    
    return (

        // header part of the webpage
        

            <div className = 'products-carosuel-container'>
                
                <AliceCarousel items = {items}/>

                

            </div>


      
       

    )
    
}

export default ProductsPanel