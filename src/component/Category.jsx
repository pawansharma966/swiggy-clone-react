import React, { useEffect, useState } from 'react'
import { FaArrowLeft ,FaArrowRight} from "react-icons/fa";
export default function Category() {

    const [slide, setSlide] = useState(0);
    const [categories, setCategory] = useState([]);

    const fetchCategory = async () => {
        try {
          const response = await fetch("/categories.json"); // path from public
          const data = await response.json();
          setCategory(data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };
    
      useEffect(() => {
        fetchCategory();
      }, []);

      const nextSlide = () =>{
        if (categories.length - 8 == slide) return false;
        setSlide(slide + 3);
      }
      const prevSlide = () =>{
        if (slide == 0) return false;
        setSlide(slide - 3);
      }
    
    return (
        <div className='max-w-[1200px] mx-auto'>
         <div className='flex my-3 items-center justify-between'>
            <div className='text-[25px] font-bold'>What's on your mind?</div>
            <div className='flex'>
                <div className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                    <FaArrowLeft />
                </div>
                <div className=' cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2'onClick={nextSlide}>
                    <FaArrowRight />
                </div>

            </div>
         </div>
     {/* api call */}
     <div className="flex border border-amber-500 overflow-hidden">
      {categories.map((cat, index) => (
        <div style={{
              transform: `translateX(-${slide * 100}%)`
        }} key={index} className="w-[150px] shrink-0 duration-500">
          <img
            src={`/images/${cat.image}`} // Assuming images are in public/images
            alt={cat.path}
          />
          {/* <p className="mt-2 capitalize">{cat.path.replace("-", " ")}</p> */}
        </div>
      ))}
    </div>
             <hr className='my-6 border-[1px]' />
        </div>
    )
}






