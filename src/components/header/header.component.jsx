import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import { connect } from 'react-redux'; // HOC that allows access to redux stuff
import { ReactComponent as Logo } from '../../assets/mainLogo.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className='header'>
      <Link to="/" className='logo-container'>
        <Logo/>
      </Link>
      <div className='options'>
          <Link className='option' to='/how-to-order'>
              HOW TO ORDER
          </Link>
          <Link className='option' to='/q&a'>
              Q&A
          </Link>
          <Link className='option' to='/contact'>
              CONTACT
          </Link>
          {
              // MY ORDER option is not present when user is not signed in
              currentUser?
                  <Link className='option' to='/my-orders'>MY ORDERS</Link>
                  :''
          }
          {
              // currentUser = null if not signed in
              currentUser?
                  <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                  :
                  <Link className='option' to='/sign-in'>SIGN IN</Link>
          }
          <CartIcon/>
      </div>
      {
          hidden? null:<CartDropdown/>
      }

  </div>
);

/**
 * @function mapStateToProps: name can be anything but this is the standard name with redux codebases. Retrieves state as props.
 * @param state: root reducer object. i.e., 'combineReducers' obj from 'root-reducer.js'
 * @returns an object as props that gets deconstructed
 */
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser, hidden
});

// connect: HOC that allows access to redux stuff
export default connect(mapStateToProps)(Header);
