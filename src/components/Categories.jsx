import React, { Component } from 'react';
import { useState } from 'react';
import Desktop_Ellipse_10 from '../assets/Desktop_Ellipse_10.png';

import CategoryCard from './CategoryCard';

class Categories extends Component  {



  categories =  [{
	"name": "Adventure",
	"activities": [{
		"title": "Surfing in the waves of Waikiki"
	}, {
		"title": "Hiking the Diamond Head trail in Oahu"
	}, {
		"title": "Exploring Hawaii Volcanoes National Park"
	}, {
		"title": "Snorkeling at the beaches of Maui"
	}, {
		"title": "Taking a helicopter tour to see the active volcanoes and waterfalls"
	}]
}, {
	"name": "Culinary",
	"activities": [{
		"title": "Taking a Hawaiian cooking class"
	}, {
		"title": "Trying Poke at a local restaurant"
	}, {
		"title": "Going on a coffee tasting tour in the Big Island"
	}, {
		"title": "Attending a Hawaiian luau dinner show"
	}, {
		"title": "Visiting a local market to taste exotic fruits and other local products"
	}]
}, {
	"name": "Eco-tourism",
	"activities": [{
		"title": "Hiking in the lush forests of the Big Island"
	}, {
		"title": "Kayaking through the mangroves of Maui"
	}, {
		"title": "Whale watching during the winter months"
	}, {
		"title": "Snorkeling with sea turtles at the Turtle Bay on Oahu"
	}, {
		"title": "Visiting the Akaka Falls State Park on the Big Island to see the stunning waterfall"
	}]
}, {
	"name": "Family",
	"activities": [{
		"title": "Visiting the Waikiki Aquarium in Oahu"
	}, {
		"title": "Going on a scenic drive to see the Road to Hana on Maui"
	}, {
		"title": "Exploring the Polynesian Cultural Center on Oahu"
	}, {
		"title": "Taking a sunset dinner cruise along the coast of Maui"
	}, {
		"title": "Attending a hula show or a Hawaiian music concert as a family"
	}]
}, {
	"name": "Sport",
	"activities": [{
		"title": "Playing golf on one of Hawaii's world-famous courses"
	}, {
		"title": "Going on a deep-sea fishing excursion"
	}, {
		"title": "Participating in a beach volleyball game on Waikiki Beach"
	}, {
		"title": "Hiking the challenging trails of the Koko Head Crater on Oahu"
	}, {
		"title": "Surfing lessons on the North Shore of Oahu"
	}]
}]
  constructor(){
    super();
    console.log("in cons");
    this.state={
      categories : this.categories,
      loading: false
    }
  }
  render(){
  return (
    <div className='bg-gray-300'>
    <div className='max-w-[1000px] max-h-max mx-auto px-4 py-16 grid sm:grid-cols-2  lg:grid-cols-2 gap-4'>
    <div >
        <h5 className='font-ibm font-bold'>Categories</h5>
      {this.state.categories.map((element)=>
      
      { 
        return <CategoryCard key={element.name} details={element.activities} text={element.name} />
      
      })}
    </div>
    <div>
        <h5 className='font-ibm font-bold'>Travel Guide</h5>
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    
    <div class="flex flex-row items-center overflow-hidden ">
        <div>
        <h5 class="mb-1 ml-6 text-xl font-bold font-ibm text-gray-900 ">Haldwin Merone</h5>
        <span class="text-sm ml-8 text-gray-500 font-ibm dark:text-gray-400">Guide Sice 2022</span>
        </div>
        <div>
        <img class="w-24 h-24  ml-10 mt-10 rounded-full shadow-lg" src={Desktop_Ellipse_10} alt="Bonnie image"/>
        </div>
    </div>
    <div class="ml-10 mb-10">
            <a href="#" class="inline-flex items-center px-4 py-2 font-ibm text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact</a>
            
        </div>
</div>
    </div>
    
    
        
    </div>
    </div>
  )
}
}

export default Categories