import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import AddLauncher from './pages/AddLauncher';
import LauncherDetails from './pages/LauncherDetails';
import Update from './pages/Update';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Users from './pages/Users';
import Register from './pages/Register';
import EditUser from './pages/EditUser';
import Admin from './components/protect/admin';
import Intelligence from './components/protect/intelligence';
import Air from './components/protect/air';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <Air>
              <Home />
            </Air>
          } />
          <Route path='/AddLauncher' element={
            <Intelligence>
              <AddLauncher />
            </Intelligence>
          } />
          <Route path='/LauncherDetails/:id' element={
            <Intelligence>
              <LauncherDetails />
            </Intelligence>
          } />
          <Route path='/Update/:id' element={
            <Intelligence>
              <Update />
            </Intelligence>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={
            <Admin>
              <Users />
            </Admin>
          } />
          <Route path='/register' element={
            <Admin>
              <Register />
            </Admin>
          } />
          <Route path='/editUser/:id' element={
            <Admin>
              <EditUser />
            </Admin>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App