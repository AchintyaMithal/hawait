import React from 'react';
import SelectsCard from './SelectsCard';
import {  useLocation} from 'react-router-dom';
import { render } from '@testing-library/react';

function Activities  (props)  {
  const location = useLocation();
  const title = location.state.title;
  const Surfing = {
    "name": "Surfing",
    "description": "Hawaii is known for its world-famous surf spots and waves that attract surfers from all over the globe. Here are some of the best islands for surfing in Hawaii:",
    "image": "https://storage.googleapis.com/topics-images/web-dev-images/surfing.jpg",
    "activities": [{
      "name": "North Shore, Oahu"
    }, {
      "name": "Waimea Bay, Oahu"
    }, {
      "name": "Sunset Beach, Oahu"
    }, {
      "name": "Pipeline, Oahu"
    }, {
      "name": "Maui"
    }, {
      "name": "Honolii Beach Park, Big Island"
    }, {
      "name": "Pe'ahi (Jaws), Big Island"
    }, {
      "name": "Hanalei Bay, Kauai"
    }, {
      "name": "Polihale State Park, Kauai"
    }, {
      "name": "Kaunakakai Town, Molokai"
    }]
  };
  const festival = {"name":"Traditional Festivals","description":"Hawaii is known for its rich cultural heritage and vibrant festivals that showcase the unique traditions of the Hawaiian Islands. Here are some of the best places to attend traditional festivals in Hawaii:","image":"https://storage.googleapis.com/topics-images/web-dev-images/traditional_festivals.jpg","activities":[{"name":"Merrie Monarch Festival in Hilo, Big Island"},{"name":"King Kamehameha Day Celebration in Honolulu, Oahu"},{"name":"Aloha Festivals Floral Parade in Honolulu, Oahu"},{"name":"Kauai Mokihana Festival in Lihue, Kauai"},{"name":"Maui Nui Cultural Festival in Kahului, Maui"},{"name":"Hawaii Island Festival of Birds in Hilo, Big Island"},{"name":"Eo E Emalani I Alaka'i Festival in Kilauea, Kauai"},{"name":"Prince Lot Hula Festival in Moanalua Gardens, Oahu"},{"name":"Pua Ali'i 'Ilima Festival in Honolulu, Oahu"},{"name":"Makahiki Festival at the Polynesian Cultural Center on Oahu"}]}
  const volcanoes = {"name":"Volcanoes","description":"Hawaii is home to several active volcanoes, making it a popular destination for those interested in geology and natural wonders. Here are some of the most popular volcanoes to attend in Hawaii:","image":"https://storage.googleapis.com/topics-images/web-dev-images/volcanoes.jpg","activities":[{"name":"Kilauea Volcano, Big Island"},{"name":"Mauna Loa, Big Island"},{"name":"Mount Kilimanjaro, Big Island"},{"name":"Haleakala, Maui"},{"name":"Mauna Kea, Big Island"}]}

  let surf = false;
  let volc = false;
  let fest = false;
  if(title ==="Surfing"){
    surf = true;
  }else if(title ==="Volcanoes"){
     volc = true;
  }
  else if(title ==="Traditional Festivals"){
    fest = true;
  }
   
  return  (
    <div>
    <div>
    {surf ? (
      <div className='pt-8'>{Surfing.activities.map((element,index) => {
        return <ul key={index}>
          <li className='list-disc font-ibm text-emerald-600' >
         {element.name}
          </li>
        </ul>

      })}
        </div>
    ) :''}
  </div>
  <div>
    {volc ? (
     <div className='pt-8'>{volcanoes.activities.map((element,index) => {
      return<ul key={index}>
      <li className='list-disc font-ibm text-emerald-500' >{element.name}</li>
  </ul>

    })}
      </div>
    ) :''}
  </div>
  <div>
    {fest ? (
      <div className='pt-8'>{festival.activities.map((element,index) => {
        return <ul   key={index}>
          <li className='list-disc font-ibm text-emerald-600' >
          {element.name}
          </li>
        </ul>

      })}
        </div>
    ) : ('')}
  </div>
      
  </div>
    
          

    
  );
  };


export default Activities;
