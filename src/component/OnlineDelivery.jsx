import React, { useEffect, useState, useRef } from 'react'
import Card from './Card';

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    const refElement = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (refElement.current) {
                const rect = refElement.current.getBoundingClientRect();
                setIsAtTop(rect.top <= 0); // Checks if the element reaches top 0
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const fetchTopRestaurant = async () => {
        try {
            const response = await fetch("/restaurantChains.json"); // path from public
            const apiData = await response.json();
            setData(apiData);
            console.log('data', apiData);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchTopRestaurant();
    }, []);

    return (
        <div className='max-w-[1200px] mx-auto px-2 'ref={refElement}>
            <div className='flex my-3 items-center justify-between' ref={refElement}>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Jodhpur</div>
            </div>

            {/* Sticky Filter & Sort Section */}
            <div className={isAtTop ? "fixed top-0  z-[9999999] bg-white w-full left-0 " : ""}>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3 border-red-500'>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort By</div>
                </div>
            </div>

            {/* Restaurant Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {data.map((d, i) => (
                    <Card key={i} {...d} />
                ))}
            </div>
        </div>
    );
}
