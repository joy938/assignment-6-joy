import React from 'react';

const GymCards = ({card}) => {
   
 const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = card;



 return (
 
  <div className="bg-[#181818] border border-gray-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-gray-700 transition-all duration-350">
      
      <div className="w-full h-48 rounded-xl overflow-hidden mb-4 relative bg-[#202020] flex justify-center items-center">
          <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-103"
          />
      </div>

   
      <div className="flex flex-wrap gap-2 mb-3">
          {muscleGroups && muscleGroups.map((group, index) => (
              <span 
                  key={index} 
                  className="bg-[#ccff00] text-black text-[10px] lg:text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider"
              >
                  {group}
              </span>
          ))}
      </div>

    
      <div className="flex-grow mb-4 text-left">
        
          <h3 className="text-lg lg:text-xl font-extrabold text-white uppercase tracking-wide line-clamp-1">
              {name}
          </h3>
    
          <p className="text-xs font-medium text-gray-500 mt-1">
              {equipment}
          </p>
      </div>

     
      <div className="pt-2 border-t border-gray-800/60">
          <div className="flex justify-between items-center text-[11px] lg:text-xs font-semibold text-gray-400">
             
              <span className="flex items-center gap-1">
                  ⏱️ {duration} min
              </span>
             
              <span className="flex items-center gap-1">
                  🔥 {caloriesBurned} kcal
              </span>
            
              <span className="flex items-center gap-1 text-gray-400">
                  ⭐ {rating}
              </span>
          </div>
      </div>

  </div>
);

};

export default GymCards;