import React from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Home from '@mui/icons-material/HomeOutlined';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './styles.scss';

const Header:React.FC = () => {
  const { pathname } = useLocation();

  return (
    <header className="header__container">
      <div className="header__container--left">
        <img src={logo} alt="logo" />
        <Box>
          <Typography variant="h4" component="div">
            MeetList
          </Typography>
        </Box>
      </div>
      <nav className="header__container--right">
        <ul>
          <li>
            {pathname !== '/dashboard'
              ? (
                <Link to="/dashboard" className="nav__item">
                  <Home fontSize="large" />
                </Link>
              )
              : <Home fontSize="large" />}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
