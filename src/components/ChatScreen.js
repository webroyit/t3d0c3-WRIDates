import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';

import './ChatScreen.css';

function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Tom',
            image: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFuaW1hbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            message: "Meow"
        },
        {
            name: 'Tom',
            image: 'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGFuaW1hbHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            message: "Meow Meow"
        },
        {
            message: "Hello"
        }
    ]);

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Tom on 3/06/2021</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen__image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            <form className="chatScreen__input">
                <input
                    className="chatScreen__inputField"
                    type="text"
                    placeholder="Type a message..."
                    />
                <button className="chatScreen__inputButton">Send</button>
            </form>
        </div>
    );
}

export default ChatScreen;
