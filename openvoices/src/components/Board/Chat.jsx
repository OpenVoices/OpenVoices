import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SendIcon } from '../../assets/svgs/send-icon.svg'

const Chat = () => {
  return (
    <Wrapper>
      <div className='chat'></div>
      <div className='sender'>
        <form>
          <div className='form-control'>
            <input type='text' placeholder='Send message...' />
            <button type='submit' className='chat-icon-wrapper'>
              <SendIcon className = "send-icon"/>
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.aside`
  position: fixed;
  width: 500px;
  background: var(--main-color);
  top: 0;
  bottom: 0;
  padding: 0.5rem;
  margin: 0.5rem;
  right: 0;
  border-radius: 0.5rem;

  .chat {
    width: 100%;
    height: calc(100% - 70px);
    background: var(--white);
    border-radius: 0.5rem;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
  }

  .sender {
    margin: 0.5rem 0;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0.5rem;

    .form-control {
       height: 64px;
       position: relative;

      input {
        height: 100%;
        width: 100%;
        border-radius: 0.5rem;
        border: none;
        padding: 1rem;
        font-size: 1rem;

        &:focus {
          outline: none;
        }

        &::placeholder {
          color: var(--black);
        }
      }

      .chat-icon-wrapper{
        all:unset;
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%)
      }
    }
  }
`
export default Chat
