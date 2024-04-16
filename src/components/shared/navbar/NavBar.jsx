import React from 'react';
import './NavBar.css';
import { BsGear }from 'react-icons/bs';
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineSearch } from 'react-icons/hi'
import { Dropdown } from '../../dropdown/Dropdown';

function NavBar({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
            
        </div>
        <div className='header-left'>
            {/* <BsSearch  className='icon'/> */}
            <div className="Navbar-Head">
			{/* <SelectDefault /> */}
                <Dropdown />
			<div className="search-bar">
				<HiOutlineSearch fontSize={20} className="search-bar-icon" />
				<input
					type="text"
					placeholder="Search..."
					className="search-bar-input"
				/>
			</div>
			</div>
        </div>
        <div className='header-right'>
            <BsGear className='icon'/>
            <IoNotificationsOutline className='icon'/>
            <a > <FaRegUserCircle className='icon'/> Cameron Williamson </a> 
        </div>
    </header>
  );
};

export default NavBar;