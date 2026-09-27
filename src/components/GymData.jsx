import React from 'react'; 
import GymCards from './GymCards';


const Cards = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};


const GymData = async () => {
  const cards = await Cards();

  return (
    <div>
      <div className="text-left">
        
        
        <h2 className="text-3xl font-black text-white uppercase  mt-10">
          THE LIBRARY
        </h2>
        
    
        <p className="text-gray-400 text-sm font-medium mt-2 mb-8">
          Twelve lifts covering every major muscle group.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {cards && cards.map((card) => {
            return <GymCards key={card.id} card={card} />;
          })}
        </div>

      </div> 
    </div>
  );
};

export default GymData;
