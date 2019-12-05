import React from 'react';
import './contact.styles.scss';

const Contact = () => (
    <div className='contact-page'>
        <h1 className='title'>Contact</h1>
        <div className='contact-info'>
            <img src={`https://i.ibb.co/K0xXcy1/Kakao-Talk-20191205-235627612.jpg`} alt='person'/>
            <div className='info'>
                <h1>Hee Su Kim</h1>
                <span> kessris@outlook.com </span>
            </div>
        </div>
    </div>
);

export default Contact;
