import React, { useState } from 'react';
import Modal from './modal';
export default function Card({ img, name, author,setshowmodal,children }) {

  return (
    <div className='relative'>
      <img src={img} alt={name} />
      <div>
        <p>{name}</p>
        <p>{author}</p>
      </div>

     {children}
    </div>
  );
}