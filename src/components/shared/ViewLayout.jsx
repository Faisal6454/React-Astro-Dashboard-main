import React from 'react';
import './ViewLayout.css';
import { Outlet } from 'react-router-dom';
import ViewSidebar from './view-sidebar/ViewSidebar';
import ViewSidebar2 from './view-sidebar/ViewSidebar2';
import Footer from './footer/Footer';

export default function ViewLayout() {
	return (
		<div className="View-Layout-Container">
			<ViewSidebar />
           
			<div className="View-Layout-Box">
				
				<div className="View-Layout-Outlet">
            <ViewSidebar2 />
					  <Outlet />
				</div>
				<Footer />
			</div>
		</div>
	);
};
