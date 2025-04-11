import React from "react";
import { motion } from "framer-motion";

export default function Payments() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Fee Payments</h2>
      <p>Make payments for applications and other services.</p>
    </motion.div>
  );
}
