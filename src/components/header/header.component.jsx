import React from 'react';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import { connect } from 'react-redux'; // HOC that allows access to redux stuff
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

/**
 * @function mapStateToProps: name can be anything but this is the standard name with redux codebases. Retrieves state as props.
 * @param state: root reducer object. i.e., 'combineReducers' obj from 'root-reducer.js'
 * @returns an object as props that gets deconstructed
 */
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

// connect: HOC that allows access to redux stuff
export default connect(mapStateToProps)(Header);
