/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import App from "../App";

const AppContainer = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
    </Routes>
  </BrowserRouter>
);

export default AppContainer;
