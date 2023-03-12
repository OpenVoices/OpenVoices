import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/images/avatar.png';
import { FaPlus } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <Wrapper>
      <div className="avatar-wrapper">
         <img src={avatar} alt="avatar" />
      </div>
      <div className="server">
         <span>S</span>
      </div>
      <div className="add-channel">
        <button>
          <FaPlus className="add-icon" />
        </button>
      </div>
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
  padding: 0.3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 100%;
    border-radius: 50%;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  }

  .server {
    width: 100%;
    display: grid;
    place-content: center;
    width: 100%;
    height: 3.375rem;
    border: 2px solid var(--black);
    border-radius: 0.5rem;
    background: var(--white);

    span {
      font-size: 2rem;
      line-height: 1.2;
    }
  }

  .add-channel {
    button {
      all: unset;
      display: grid;
      place-content: center;
      width: 100%;
      height: 3.375rem;
      background: var(--white);
      border-radius: 0.5rem;
      cursor: pointer;

      .add-icon {
        font-size: 2rem;
        font-weight: 400;
      }
    }
  }
`;

export default Sidebar;
