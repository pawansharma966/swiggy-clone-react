
import React, { useEffect, useState } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
        const [data, setData] = useState([]);
          const fetchTopRestaurant = async () => {
                try {
                  const response = await fetch("/restaurantChains.json"); // path from public
                  const apiData = await response.json();
                  setData(apiData);
                  console.log('data', apiData)
                } catch (error) {
                  console.error("Error fetching categories:", error);
                }
              };
            
              useEffect(() => {
                fetchTopRestaurant();
              }, []);
  return (
      <div className='max-w-[1200px] mx-auto '>
                    <div className='flex my-3 items-center justify-between'>
                       <div className='text-[25px] font-bold'>Restaurants with online food delivery in Jodhpur</div>
                       
                           </div>
            <div className='grid grid-cols-4 gap-3'>
                {data.map(
                    (d,i)=>{
                        return <Card {...d} />
                    })}
            </div>
                       </div>
                   
  )
}
