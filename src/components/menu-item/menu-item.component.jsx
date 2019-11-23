import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss'

const MenuItem = ({ title, subtitle, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className='background-image'
             style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>{subtitle}</span>
        </div>
    </div>
);

// Need to wrap a component with HOC
// HOC takes a component as an argument and returns a modified component.
// In this case, HOC withRouter is used to give access to 'history' and 'match' of Router
export default withRouter(MenuItem);
