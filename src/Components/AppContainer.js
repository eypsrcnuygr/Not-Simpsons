import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";
import App from "../App";
import Form from "./Form";
import Details from "./Details";

const AppContainer = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/add" exact element={<Form />} />
      <Route path="/details" exact element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default AppContainer;
