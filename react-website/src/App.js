import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< Updated upstream
import Home from './pages/Home';
import Rules from './pages/Rules';
import Events from './pages/Events';
import Contact from './pages/Contact';

const App = () => {
    return (
        <Router>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>
        </Router>
    );
};
=======
import { Route,createBrowserRouter,
  createRoutesFromElements ,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
        <Route index element={<Navbar />} />
        {/*<Route path='/page' element={<Page />}/> */}
      </Route>
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  );
}
>>>>>>> Stashed changes

export default App;
