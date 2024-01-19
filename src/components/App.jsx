import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "./Home";
import Categories from "./Categories"
import Search from "./Search"


function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path="/filter/:search" element={<Search/>}>
          </Route>
          <Route path="/categories/:name" element={<Categories/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
          
        </Routes>

      </div>
    </Router>
  );
}

export default App;