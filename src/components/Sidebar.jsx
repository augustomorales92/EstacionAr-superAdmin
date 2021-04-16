import React from 'react';
import {Link} from 'react-router-dom'

const sidebar = () => {
    return (
        <div >
        <div className='sideBar'>
      <div className='sideBar-h1'>
      <h1>EstacionAr</h1>

      </div>
      <div className='sideBar-titles'>
    <Link to='/' className='link'>
      <h2>HOME</h2>
    </Link>
   
    <Link to='/usuarios' className='link'>
      <h2>USUARIOS</h2>
    </Link>
    <Link to='/' className='link'>
      <h2>ADMINS</h2>
    </Link>
      </div>
      
    </div>
        </div>
    );
};

export default sidebar;