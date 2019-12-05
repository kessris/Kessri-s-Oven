import React from 'react';
import {connect} from 'react-redux';
import MenuItem from "../directory-preview/directory-preview.component";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";
import './directory.styles.scss'

const Directory = ({ sections }) => (
    <div className='directory-menu'>
        {
            // ES6 trick: '{title, subtitle, imageUrl, size, linkUrl}' equivalent to '...otherSectionProps'
            // Can use this because 'size={size}' for example, are named the same. That's why 'key={id}' cannot be replaced.
            sections.map(({ id, ...otherSectionProps }) =>
                <MenuItem key={id} {...otherSectionProps} />)
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
