import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;
