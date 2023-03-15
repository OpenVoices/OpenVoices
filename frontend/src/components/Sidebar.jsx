import React from 'react';
import Image from 'next/image';
import {FaPlus} from 'react-icons/fa'


const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='avatar-wrapper'>
         <img src='assets/images/avatar.png' alt="avatar" />
      </div>
      <button className='server'>
        <span>S</span>
      </button>
      <button className='server active'>
        <span>A</span>
      </button>
      <button className='add-server'>
        <FaPlus className='add-icon' />
      </button>
    </aside>
  )
};

export default Sidebar;
