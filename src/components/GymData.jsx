import React from 'react';
import GymCards from './GymCards';

const Cards = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  const data = await res.json();
  return data;
};

// ৩. মূল কম্পোনেন্ট
const GymData = async () => {
  const cards = await Cards();

  return (
    <div>

      <h2>Hello this is GymCard page: {cards?.length}</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {cards && cards.map((card) => {

    return <GymCards key={card.id} card={card} />;
  })}
</div>

    </div>
  );
};

export default GymData;


    
