import React from "react";
import { motion } from "framer-motion";

export default function Refunds() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Refund Status</h2>
      <p>Track your refund requests and status here.</p>
    </motion.div>
  );

}

