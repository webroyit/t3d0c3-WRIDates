import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';

function Header() {
    return (
        <div className="header">
            <PersonIcon />
            <h2>Header</h2>
            <ChatIcon />
        </div>
    );
}

export default Header;
