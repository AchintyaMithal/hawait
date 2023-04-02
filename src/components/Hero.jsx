import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getHighlights, getCategories, getActivitiesByType } from './apiController';



import Desktop_Image_1 from '../assets/Desktop_Image_1.png';

const Hero = () => {

  // const [highlights, setHighlights] = useState([]);
  // const [categories, setCategories] = useState([]);
  // const [activities, setActivities] = useState([]);

  
    // Fetch highlights
    // const dat = getHighlights();
    // console.log(dat.PromiseResult);

    // Fetch categories
    // getCategories().then((data) => {
    //   setCategories(data);
    
    

    // Fetch activities by type
    // getActivitiesByType("some_type").then((data) => {
    //   setActivities(data);
    // });
  // }, []);

  return (
    <div className='w-full h-96 relative'>
      <img
        className='w-full h-full object-cover'
        src={Desktop_Image_1}
        alt=""
        
      />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        <h1 className='md:welcome pt-20 text-white text-opacity-70 font-ibm '>Welcome</h1>
        <h1 className='py-4 font-ibm md:welcome'>to Hawaii</h1>
        
      </div>
    </div>
  );
};

export default Hero;
