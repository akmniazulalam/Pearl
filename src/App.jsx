// import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {
//   createRoutesFromElements,
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
// import Home from './components/Home';
// import News from './components/News';
// import Page2 from './components/Page2';
// import ScrollToTop from './components/ScrollToTop';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//     <ScrollToTop/>
//       <Route
//         path="Home"
//         element={<Home />}
//       >
//       </Route>
//       <Route
//         path="News"
//         element={<News/>}
//       >
//       </Route>

//       <Route
//         path="Page2"
//         element={<Page2/>}
//       >
//       </Route>
//     </>
//   )
// );


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react'
window.scrollTo({ top: 0, behavior: 'smooth' });
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './components/News';
import Page2 from './components/Page2';
import ScrollToTop from './components/ScrollToTop';
import Home from './components/Home';
import Services from './components/Services';
import Elements from './components/Elements';
import Contact from './Contact';
import AboutUs from './AboutUs';
import Gallery from './Gallery';
import OurTeam from './OurTeam';
import Vacancies from './Vacancies';


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        >
        </Route>
        <Route
          path="News"
          element={<News />}
        >
        </Route>

        <Route
          path="Page2"
          element={<Page2 />}
        >
        </Route>
        <Route
          path="Services"
          element={<Services/>}
        >
        </Route>
        <Route
          path="Elements"
          element={<Elements/>}
        >
        </Route>
        <Route
          path="Contacts"
          element={<Contact/>}
        >
        </Route>
        <Route
          path="About Us"
          element={<AboutUs/>}
        >
        </Route>
        <Route
          path="Gallery"
          element={<Gallery/>}
        >
        </Route>
        <Route
          path="Our Team"
          element={<OurTeam/>}
        >
        </Route>
        <Route
          path="Vacancies"
          element={<Vacancies/>}
        >
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

