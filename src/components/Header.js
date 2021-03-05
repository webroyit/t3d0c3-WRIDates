import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ChatIcon from '@material-ui/icons/Chat';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './Header.css';

function Header({ backButton }) {
    const history = useHistory();

    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIcon className="header__icon" fontSize="large" />
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon className="header__icon" fontSize="large" />
                </IconButton>
            )}
            
            <Link to="/">
                <h2>WRI Dates</h2>
            </Link>
            
            <Link to="/chat">
                <IconButton>
                    <ChatIcon className="header__icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    );
}

export default Header;
