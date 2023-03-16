import Image from 'next/image'

const Chat = () => {
  return (
    <div className='chat-wrapper'>
      <div className='chat'></div>
      <div className='sender'>
        <form>
          <div className='form-control'>
            <textarea
              className='message-box'
              type='text'
              placeholder='Send message...'
            />
            <button type='submit' className='chat-icon-wrapper'>
              <Image src='assets/svgs/send-icon.svg' height={20} width={20} alt='send message icon'/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Chat
