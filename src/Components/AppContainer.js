/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import App from "../App";
import Form from "./Form";

const AppContainer = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/add" exact element={<Form />} />
    </Routes>
  </BrowserRouter>
);

export default AppContainer;
