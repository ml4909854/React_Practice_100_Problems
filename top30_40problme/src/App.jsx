import React, { useState, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./React_Router/Navbar";
import lazyWithDelay from "./lazyWithDelay"; // Import the lazyWithDelay utility function
import Loader from "./Loader"; // Import Loader component

// Lazy-loaded components with delay
const Home = lazyWithDelay(() => import("./React_Router/Home"), 1500);
const Contact = lazyWithDelay(() => import("./React_Router/Contact"), 1500);
const About = lazyWithDelay(() => import("./React_Router/About"), 1500);
const Dashboard = lazyWithDelay(() => import("./React_Router/Dashboard"), 1500);
const Profile = lazyWithDelay(() => import("./React_Router/Profile"), 1500);
const Settings = lazyWithDelay(() => import("./React_Router/Settings"), 1500);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        {/* Navbar is a regular component */}
        <Navbar />
        {/* Wrap lazy-loaded components in Suspense */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />}>
              {/* Nested routes */}
              <Route path="profile" element={<Profile />} />
              <Route path="setting" element={<Settings />} />
            </Route>
            <Route path="*" element={<p>No Page found</p>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
