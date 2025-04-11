import React from "react";
import { motion } from "framer-motion";

export default function Notifications() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Notifications</h2>
      <p>Stay updated with real-time notifications about your applications.</p>
    </motion.div>
  );
}
