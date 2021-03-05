import React from 'react';

import './Chats.css';
import Chat from './Chat';

function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Jerry"
                message="Hello"
                timestamp="10 seconds ago"
                profilePic="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
            <Chat
                name="Par"
                message="How are you?"
                timestamp="1 mins ago"
                profilePic="https://images.unsplash.com/photo-1555169062-013468b47731?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
            <Chat
                name="Tow"
                message="Meow"
                timestamp="45 seconds ago"
                profilePic="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFuaW1hbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
    );
}

export default Chats;
