import React from 'react';
import "./SideBar.css";
import { HiOutlineChatAlt2 } from "react-icons/hi";


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                Logo
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' id='a1'>
                <a href="/gramstain">
                    Gram stain
                </a>
            </li>
            <li className='sidebar-list-item' id='a2'>
                <a href="">
                    Acid-fast stains
                </a>
            </li>
            {/* <li className='sidebar-list-item' id='a3'>
                <a href="">
                    Categories
                </a>
            </li> */}
            <li className='sidebar-list-item' id='a4'>
                <a href="">
                    New Dataset +
                </a>
                <span className="popup">3</span>
            </li>
        </ul>
        <div className="bottom-logo">
            <a className="chat-logo">
                <HiOutlineChatAlt2 size={25}/>
                <span className="popup2">1</span>
            </a>
        </div>
    </aside>
  );
};

export default Sidebar;