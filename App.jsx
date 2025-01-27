import React from "react";
import "./App.css";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Application Title */}
      <h1 style={{ color: "#2d89ff" }}>SaaS Healthcare Application</h1>

      {/* Description */}
      <p style={{ fontSize: "18px" }}>
        Welcome to the healthcare platform for lab technicians. Start annotating medical images, measuring regions of interest, and more!
      </p>

      {/* Placeholder for Canvas or Features */}
      <div style={{ marginTop: "30px", padding: "20px", border: "1px solid #ddd", borderRadius: "10px" }}>
        <h2>Upcoming Features</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🔍 Image Annotation</li>
          <li>📏 Geometric Measurements</li>
          <li>📐 Angle Calculations</li>
          <li>💾 Save and Export Data</li>
        </ul>
      </div>
    </div>
  );
}

export default App;