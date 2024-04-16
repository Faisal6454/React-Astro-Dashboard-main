import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/Context';
import Layout from './components/shared/Layout';
import GramStain from './pages/GramStain';
import ViewLayout from './components/shared/ViewLayout'; // Import ViewLayout component
import View from './pages/View';




function App() {
  // const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  // const OpenSidebar = () => {
  //   setOpenSidebarToggle(!openSidebarToggle)
  // }

  return (
  <>
    <DataProvider>
    <div className='grid-container'>
    <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/gramstain' element={<GramStain />} />
                {/* <Route path="/view/:index" element={<View />} /> */}
            </Route>
            
            {/* Use ViewLayout for ViewPage */}
            <Route path="/view/:index" element={<ViewLayout />}>
                <Route index element={<View />} />
              </Route>

          </Routes>
        </Router>
      {/* <NavBar OpenSidebar={OpenSidebar}/> */}
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
    </div> 
    </DataProvider>
  </>
  )
}

export default App
