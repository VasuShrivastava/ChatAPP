import React from 'react';
import './Chat.css';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function Chat() {
  return <div className='chat'>
      <div className='chatHeader'>
        <Avatar className='avatar' src ="https://i.kym-cdn.com/photos/images/newsfeed/001/688/970/a72.jpg"/>
        <div className='chatHeader_info'>
        <h4>3 Idiots</h4>
        <p>Vasu, Tarun, Vardaan</p>
        </div>
      </div>
      <div className='chatBody'>
        <p className='chat_message'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>
        
        <p className='chat_message'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className=' chat_message chat_reciever'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className='chat_message'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className='chat_message'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className='chat_message'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className=' chat_message chat_reciever'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className=' chat_message chat_reciever'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className=' chat_message chat_reciever'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>

        <p className=' chat_message chat_reciever'>
          <span className='chat_message_name'>Vasu</span>
          This is a message!
          <span className='chat_message_time'>{new Date().toLocaleTimeString()}</span>
        </p>
      
      
      
      
      
      
      
      </div>
      <div className='msgBar'>
        <form>
        <div className='typeMsg'>
          <InsertEmoticonIcon/>
          <input className='msg' placeholder='Message...'></input>
        </div>
        <SendIcon/>
        </form>
      </div>
  </div>;
}

export default Chat;

