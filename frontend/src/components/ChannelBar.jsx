import React from 'react';
import Image from 'next/image'

const ChannelBar = () => {
  return (
    <div className='channelbar-container'>
      <header>
        <div className='left-side'>
          <button>
            <Image
              src={'assets/svgs/menu-icon.svg'}
              width={20}
              height={20}
              alt='menu icon'
            />
          </button>
          <p>CHANNEL NAME</p>
        </div>
        <div className='right-side'>
          <button>
            <Image
              src='assets/svgs/audio-icon.svg'
              height={20}
              width={20}
              alt='mute audio icon'
            />
          </button>
          <button>
            <Image
              src='assets/svgs/head-phone-icon.svg'
              height={20}
              width={20}
              alt='headphone icon'
            />
          </button>
        </div>
      </header>
    </div>
  )
};

export default ChannelBar;
