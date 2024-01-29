import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
    <AuthProvider>
      <DataProvider>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </BrowserRouter>
      </UserProvider>
      </DataProvider>
      </AuthProvider>
      
    </>
  );
}

export default App;
