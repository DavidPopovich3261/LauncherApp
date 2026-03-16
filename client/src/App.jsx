import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import AddLauncher from './pages/AddLauncher';
import LauncherDetails from './pages/LauncherDetails';
import Update from './pages/Update';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AddLauncher' element={<AddLauncher />} />
          <Route path='/LauncherDetails/:id' element={<LauncherDetails />} />
          <Route path='/Update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App