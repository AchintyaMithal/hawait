import React from 'react';
import {useState} from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

function CategoryCard (props) {
    const [showModal, setShowModal] = useState(false);
    
    const handleButtonClick = (event) => {
        event.preventDefault();
        setShowModal(true);
      }
    
    
      const handleCloseModal = () => {
        setShowModal(false);
      }
    
      
  return (
    <div>

<a href="#" onClick={handleButtonClick} class="block max-w-sm p-6 py-2 my-2    bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
    <h5 class=" dark:text-emerald-600 font-ibm">{props.text}</h5>
    
</a>

{showModal && (
        <div className="modal">
          <div className="modal-content">
            <AiFillCloseCircle size={20}  className="close ml-80 " onClick={handleCloseModal}>&times;</AiFillCloseCircle>
            { 
           
            props.details.map((element,index)=>
      
                { return <ul key={index}>
                      <li className='list-disc font-ibm' >{element.title}</li>
                  </ul>
                })}
          </div>
        </div>
      )}
</div>
    
  );
};

export default CategoryCard;
