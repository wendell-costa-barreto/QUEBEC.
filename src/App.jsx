import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/destinations" element={<Destinations />} />
        <Route path="/apropos" element={<About />}></Route>
        <Route path='/quoi-faire' element={<Todo />}></Route> */}
      </Routes>
    </HashRouter>
  );
}
