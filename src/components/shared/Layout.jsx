import React from 'react';
import './Layout.css'
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/SideBar';
import Navbar from './navbar/NavBar';
import Footer from './footer/Footer';

export default function Layout() {
	return (
		<div className="h-screen w-screen overflow-hidden flex flex-row Layout-Container">
			<Sidebar />
			<div className="flex flex-col flex-1 Layout-Box">
				<Navbar />
				<div className="flex-1 p-4 min-h-0 overflow-auto border-2 border-blue-500 Layout-Outlet">
					<Outlet />
				</div>
				<Footer />
			</div>
		</div>
	);
};
