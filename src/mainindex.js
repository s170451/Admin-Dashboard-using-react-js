import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import index from "./index";


const mainindex = () => {
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/index" element={<index />} />
        
        </Routes>
      </Router>
    </div>
  );
};

export default mainindex;

const styles = {
  app: {
    padding: 50,
  },
};