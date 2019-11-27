import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from '../../assets/mainLogo.svg';
import './header.styles.scss';

const Header = ({currentUser}) => (
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
          {
              // currentUser = null if not signed in
              currentUser?
                  <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                  :
                  <Link className='option' to='/sign-in'>SIGN IN</Link>
          }
      </div>
  </div>
);

export default Header;