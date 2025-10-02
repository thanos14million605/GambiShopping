import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Homepage from "./pages/Homepage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="create" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{
          margin: "8px",
        }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "blue",
            color: "white",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default App;
