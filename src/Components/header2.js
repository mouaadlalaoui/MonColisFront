// src/components/Header.js


import React from 'react';

const Header = () => {
    return (
        <div className="navbar bg-[#000000] text-white  px-16">
            <div className="flex-1">
                <a href="#FFFFFF" className="btn btn-ghost normal-case text-3xl"><i class="fas fa-box-open"></i>   MonColis</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li><a><i class="fas fa-home"></i>Home</a></li>
                    <li><a> <i className='fas fa-user'></i>Sign-up</a></li>
                    <li><a> 	<i class="fas fa-bus"></i>Trajet</a></li>
                    <li><a>  <i class="fas fa-phone"></i>Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;