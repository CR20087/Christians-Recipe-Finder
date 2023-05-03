import Veggie from "../Components/Veggie";
import Popular from "../Components/Popular";
import { motion } from "framer-motion";
import React from 'react';

function Home() {
  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    >
        <Veggie />
        <Popular />
    </motion.div>
  );
}

// Home page imports components such as Veggie and popular Splides onto the home page with a transition attached to them for whenever they re-appear.

export default Home