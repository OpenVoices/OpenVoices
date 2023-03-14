import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/avatar.png';
import { FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="avatar">
         <img src={avatar} alt="avatar" />
      </div>
      <button className="server">
         <span>S</span>
      </button>
      <button className="add-server">
          <FaPlus className="add-icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  width: 4rem;
  top: 0;
  left: 0;
  bottom: 0;
  background: var(--main-color);
  position: fixed;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .avatar {
    display: flex;
    padding-bottom: 0.5rem;
    img {
      width: 100%;
      border-radius: 50%;
      box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
    }
  }
  
  button {
    aspect-ratio: 1 / 1;
    font-size: 1.5rem;
    border-radius: 0.75rem;
    border: 0;
    cursor: pointer;
    &.server {
      width: 100%;
      display: grid;
      place-content: center;
      background: var(--white);
      
      &.active {
        border: 2px solid var(--black);
      }
    }
  
    &.add-server {
      display: grid;
      place-content: center;
      width: 100%;
      background: var(--white);

      .add-icon {
        font-size: 1.4rem;
        font-weight: 400;
      }
    }
  }

`;

export default Sidebar;
