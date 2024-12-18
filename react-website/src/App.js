import './App.css';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Events from './pages/Events';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import React from 'react';


import { Route,createBrowserRouter,
  createRoutesFromElements ,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Events' element={<Events />}/>
        <Route path='/Rules' element={<Rules />}/>
      </Route>
  )
)

function App() {
  return (
    <>
    <Navbar/>
    <div>
    <Route path='/'>
    <Route index element={<Home/>}/>
    <Route path='/Contact' element={<Contact />}/>
    <Route path='/Events' element={<Events />}/>
    <Route path='/Rules' element={<Rules />}/>
  </Route>
  </div>
  </>
  );
}

export default App;
