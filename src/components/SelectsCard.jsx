import React from 'react';
import {BsArrowRightCircle} from 'react-icons/bs';
const SelectsCard = (props) => {
  return (
    

<a href="#" class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={props.bg} alt="Sunset in the mountains"></img>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-emerald-600 font-ibm">{props.text}</div>
      <p class="text-gray-700 text-base font-ibm">
        {props.description}
      </p>
    </div>
  <div class=" pt-4 pb-2">
    <div class=" px-3 "></div>
    <BsArrowRightCircle className="ml-60 bottom-4" size={40} />
    
  </div>
</a>

    
  );
};

export default SelectsCard;
