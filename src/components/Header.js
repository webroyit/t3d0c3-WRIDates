import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';

import './Header.css';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
            
            <h2>WRI Dates</h2>

            <IconButton>
                <ChatIcon className="header__icon" fontSize="large" />
            </IconButton>
            
        </div>
    );
}

export default Header;
