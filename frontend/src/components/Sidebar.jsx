import React from 'react';
import Image from 'next/image';
import {FaPlus} from 'react-icons/fa'


const Sidebar = () => {
  return (
    <aside className='sidebar'>
      <div className='avatar-wrapper'>
         <img src='assets/images/avatar.png' alt="avatar" />
      </div>
      <div className='server'>
        <span>S</span>
      </div>
      <div className='add-channel'>
        <button>
          <FaPlus className='add-icon' />
        </button>
      </div>
    </aside>
  )
};

export default Sidebar;
