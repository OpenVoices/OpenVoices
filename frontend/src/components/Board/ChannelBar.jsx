import React from 'react';
import styled from 'styled-components';
import { ReactComponent as BarsIcon } from '../../assets/svgs/menu-icon.svg';
import { ReactComponent as HeadPhoneIcon } from '../../assets/svgs/head-phone-icon.svg';
import { ReactComponent as AudioMuteIcon } from '../../assets/svgs/audio-icon.svg';

const ChannelBar = () => {
  return (
    <Wrapper>
      <header>
        <div className="left-side">
          <button>
            <BarsIcon />
          </button>
          <p>CHANNEL NAME</p>
        </div>
        <div className="right-side">
          <button>
            <AudioMuteIcon />
          </button>
          <button>
            <HeadPhoneIcon />
          </button>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: fixed;
  left: 4rem;
  right: 508px;
  top: 0;
  bottom: 0;
  header {
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    .left-side {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1.2;
      font-weight: 400;
      display: flex;

      button{
        all:unset;
        cursor: pointer;
        display: grid;
        place-content: center;
      }

      p {
        color: var(--dark);
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      button {
        all: unset;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 800px) {
    right: 200px;
  }
`;

export default ChannelBar;
