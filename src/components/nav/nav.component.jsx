import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import './nav.styles.scss'


const Nav = () => {
    return(
        <div className='header'>
            <Link className="option" to='/search'>
                SHOP
            </Link>
            <Link className="option" to='/saved'>
                SAVED
            </Link>      
        </div>
    )
}


export default Nav