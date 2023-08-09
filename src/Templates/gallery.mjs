import { ref, listAll, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";
import { storage } from "../firebase.js";
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';
import { Filter } from 'react-feather';



function ImageGallery() {
  const [imageURLs, setImageURLs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [filterPopup, changeFilterpopup] = useState(false);

  // array of checkboxes
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  
  const Sections = ["Soil Health", "Alfalfa", "Potatoes", "Onion", "Corn", "Forestry"]

  useEffect(() => {
    const fetchImageURLs = async () => {
      try {
        const storageRef = ref(storage);
        const result = await listAll(storageRef);
        const urls = await Promise.all(
          result.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return url;
          })
        );
        setImageURLs(urls);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    };

    fetchImageURLs();
  }, []);

  const handleCheckboxChange = (checkboxLabel) => {
    setSelectedCheckboxes((prevCheckboxes) => {
      if (prevCheckboxes.includes(checkboxLabel)) {
        return prevCheckboxes.filter((label) => label !== checkboxLabel);
      } else {
        return [...prevCheckboxes, checkboxLabel];
      }
    });
  };


  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = imageURLs.slice(indexOfFirstImage, indexOfLastImage);

  // handle when we changes pages
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // create popup screen when the user selects and image.

  const handleFilterClick = () => {
    changeFilterpopup(!filterPopup)

  };
  const handleImageClick = (url) => {
    setSelectedImage(url);
    setIsPopUpOpen(true);
  };

  const totalPages = Math.ceil(imageURLs.length / imagesPerPage);

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className='NavBar-Container'>
        <NavBar />
      </div>

      <div className="image-header-container">
        <h1 className="imageHeader">Image Gallery</h1>
        
      </div>

      <div className = "filter_button_container">

        <button className = 'flex-container' onClick={() => handleFilterClick()} >

          <span>Filter Images</span>
          
          <Filter className="icon-class"/>
        </button>
      

      </div>



      {filterPopup && (<div className="filter-pop-up">
          <div className="filter-content">

            <div className ="filter-header-container"> 
              <h1 className = "filter-header-content">Filter Images By Categories</h1>

            </div>

            <div className = "checkbox-container">
              {Sections.map((label) => (
                <div className = "checkbox-content">
                   <label className = "checkbox-label" key={label}>
                  <input
                    type="checkbox"
                    checked={selectedCheckboxes.includes(label)}
                    onChange={() => handleCheckboxChange(label)}
                    />
                  {label}
                </label>


                </div>
               
              ))}
            </div>

          



            
            <div className = 'filter-close-container'>
            <button className = "filter-close" onClick={() => handleFilterClick()}>Close</button>

            </div>
          
          </div>
        </div>)}

     
        <div>
            {selectedCheckboxes.map(subjects => (
              <div>{subjects}</div>
            ))
            }

        </div>
      

      <div className="image_section">
        {currentImages.map((url) => (
          <div className="image-card" onClick={() => handleImageClick(url)}>
            <img
              className="inner-image-card"
              key={url}
              src={url}
              alt="Gallery"
            />
          </div>
        ))}
      </div>

      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {isPopUpOpen && (
        <div className="pop-up">
          <div className="pop-up-content">
            <img src={selectedImage} alt="Selected" />
            <button onClick={() => setIsPopUpOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}


export default ImageGallery;


// import { ref, listAll, getDownloadURL } from "firebase/storage";
// import { useEffect, useState } from "react";
// import { storage } from "../firebase.js";
// import Header from '../components/header.js';
// import NavBar from '../components/navbar.js';
// import { Filter } from 'react-feather';

// async function fetchImages(folderName) {
//   try {
//     const folderRef = ref(storage, folderName);
//     const result = await listAll(folderRef);
//     const urls = await Promise.all(
//       result.items.map(async (itemRef) => {
//         const url = await getDownloadURL(itemRef);
//         return url;
//       })
//     );
//     return urls;
//   } catch (error) {
//     console.error("Error fetching image URLs:", error);
//     return []; // Return an empty array in case of an error
//   }
// }



// function ImageGallery() {
 
//   const [currentPage, setCurrentPage] = useState(1);
//   const [imagesPerPage] = useState(20);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isPopUpOpen, setIsPopUpOpen] = useState(false);
//   const [filterPopup, changeFilterpopup] = useState(false);
//   const [imageURLs, setImageURLs] = useState({
//     Potatoes: [],
//     Alfalfa: [],
//     Onion: [],
//     Forestry: [],
//     Corn: [],
//     Soil: []
//   });
//   // const [PotatoesURLs, setPotatoesURLs] = useState([]);
//   // const [AlfalfaURLs, setAlfafaURLs] = useState([]);
//   // const [OnionURLs, setOnionURLs] = useState([]);
//   // const [ForestryURLs, setForestryURLs] = useState([]);
//   // const [CornURLs, setCornURLs] = useState([]);
//   // const [SoilURLs, setSoilURLs] = useState([]);

//   // array of checkboxes
//   const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  
//   const Sections = ["Soil Health", "Alfalfa", "Potatoes", "Onion", "Corn", "Forestry"]

//   useEffect(() => {
//     const fetchImageURLs = async () => {


//       for (let i = 0; i < Sections.length; i++){

        
//       }



      

//       // try {
//       //   const storageRef = ref(storage);
//       //   const result = await listAll(storageRef);
//       //   const urls = await Promise.all(
//       //     result.items.map(async (itemRef) => {
//       //       const url = await getDownloadURL(itemRef);
//       //       return url;
//       //     })
//       //   );
//       //   setImageURLs(urls);
//       // } catch (error) {
//       //   console.error("Error fetching image URLs:", error);
//       // }
//     };

//     fetchImageURLs();
//   }, []);

//   const handleCheckboxChange = (checkboxLabel) => {
//     setSelectedCheckboxes((prevCheckboxes) => {
//       if (prevCheckboxes.includes(checkboxLabel)) {
//         return prevCheckboxes.filter((label) => label !== checkboxLabel);
//       } else {
//         return [...prevCheckboxes, checkboxLabel];
//       }
//     });
//   };


//   const indexOfLastImage = currentPage * imagesPerPage;
//   const indexOfFirstImage = indexOfLastImage - imagesPerPage;
//   const currentImages = imageURLs.slice(indexOfFirstImage, indexOfLastImage);

//   // handle when we changes pages
//   const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//   // create popup screen when the user selects and image.

//   const handleFilterClick = () => {
//     changeFilterpopup(!filterPopup)

//   };
//   const handleImageClick = (url) => {
//     setSelectedImage(url);
//     setIsPopUpOpen(true);
//   };

//   const totalPages = Math.ceil(imageURLs.length / imagesPerPage);

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>

//       <div className='NavBar-Container'>
//         <NavBar />
//       </div>

//       <div className="image-header-container">
//         <h1 className="imageHeader">Image Gallery</h1>
        
//       </div>

//       <div className = "filter_button_container">

//         <button className = 'flex-container' onClick={() => handleFilterClick()} >

//           <span>Filter Images</span>
          
//           <Filter className="icon-class"/>
//         </button>
      

//       </div>



//       {filterPopup && (<div className="filter-pop-up">
//           <div className="filter-content">

//             <div className ="filter-header-container"> 
//               <h1 className = "filter-header-content">Filter Images By Categories</h1>

//             </div>

//             <div className = "checkbox-container">
//               {Sections.map((label) => (
//                 <div className = "checkbox-content">
//                    <label className = "checkbox-label" key={label}>
//                   <input
//                     type="checkbox"
//                     checked={selectedCheckboxes.includes(label)}
//                     onChange={() => handleCheckboxChange(label)}
//                     />
//                   {label}
//                 </label>


//                 </div>
               
//               ))}
//             </div>

          



            
//             <div className = 'filter-close-container'>
//             <button className = "filter-close" onClick={() => handleFilterClick()}>Close</button>

//             </div>
          
//           </div>
//         </div>)}

     
//         <div>
//             {selectedCheckboxes.map(subjects => (
//               <div>{subjects}</div>
//             ))
//             }

//         </div>
      

//       <div className="image_section">
//         {currentImages.map((url) => (
//           <div className="image-card" onClick={() => handleImageClick(url)}>
//             <img
//               className="inner-image-card"
//               key={url}
//               src={url}
//               alt="Gallery"
//             />
//           </div>
//         ))}
//       </div>

//       <div className="pagination-buttons">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
//             key={index + 1}
//             onClick={() => handlePageChange(index + 1)}
//             disabled={currentPage === index + 1}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>

//       {isPopUpOpen && (
//         <div className="pop-up">
//           <div className="pop-up-content">
//             <img src={selectedImage} alt="Selected" />
//             <button onClick={() => setIsPopUpOpen(false)}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// export default ImageGallery;