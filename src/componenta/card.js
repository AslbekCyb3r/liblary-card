import React from 'react';

export default function Card({ img, name, author }) {
  return (
    <div>
      <img src={img} alt={name} />
      <div>
        <p>{name}</p>
        <p>{author}</p>
        <button className='bg-blue-600 p-2 rounded-md w-full text-white'>Batafsil</button>
      </div>
    </div>
  );
}