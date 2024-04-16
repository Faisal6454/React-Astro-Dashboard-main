import React from 'react';
import "./ViewSideBar.css";
import { HiOutlineChatAlt2 } from "react-icons/hi";


function ViewSidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="viewsidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='viewsidebar-title'>
            <div className='sidebar-brand'>
                Logo
            </div>
            <span className='viewicon viewclose_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='viewsidebar-list'>
            <li className='viewsidebar-list-item' id='View-a1'>
                <a href="/lebels">
                    Labels
                </a>
            </li>
            <li className='viewsidebar-list-item' id='View-a2'>
                <a href="">
                    Attributes
                </a>
            </li>
            {/* <li className='viewsidebar-list-item' id='View-a3'>
                <a href="">
                    Categories
                </a>
            </li> */}
            <li className='viewsidebar-list-item' id='View-a4'>
                <a href="">
                    Data
                </a>
            </li>
        </ul>
        <div className="viewbottom-logo">
            <a className="viewchat-logo">
                <HiOutlineChatAlt2 size={25}/>
                <span className="viewpopup2">1</span>
            </a>
        </div>
    </aside>
  );
};

export default ViewSidebar;