import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
    </Routes>
    </AnimatePresence>
  );
}

/* The pages component is in charge of routing all pages to their correct html path. It imports them from their file and attachs them to a route.
They are set-up like / (component) / : (dependant variable).
By having all theese routed through this file it kepts the code tidy and neat. */ 

export default Pages