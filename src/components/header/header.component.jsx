import React from 'react';
import {Link} from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/mainLogo.svg';
import './header.styles.scss';

const Header = () => (
  <div className='header'>
      <Link to="/" className='logo-container'>
        <Logo/>
      </Link>
      <div className='options'>
          <Link className='option' to='/bulk-orders'>
              BULK ORDERS
          </Link>
          <Link className='option' to='/contact'>
              CONTACT
          </Link>
      </div>
  </div>
);

export default Header;