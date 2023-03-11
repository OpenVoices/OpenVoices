import React from 'react'
import styled from 'styled-components'
import { ReactComponent as BarsIcon } from '../../assets/svgs/menu-icon.svg'
import { ReactComponent as HeadPhoneIcon } from '../../assets/svgs/head-phone-icon.svg'
import { ReactComponent as AudioMuteIcon } from '../../assets/svgs/audio-icon.svg'

const ChannelBar = () => {
  return (
    <Wrapper>
      <div className='left-side'>
        <BarsIcon />
        <p>CHANNEL NAME</p>
      </div>
      <div className="right-side">
         <AudioMuteIcon />
         <HeadPhoneIcon />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  left: 4rem;
  right: 500px;
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
  }

  .right-side {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    right: 200px;
  }
`

export default ChannelBar
