import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

 const App = () => {

  const[progress,setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
 
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            progress={progress}
          ></LoadingBar>
          <Navbar></Navbar>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="1"
                  pageSize="6"
                  country="in"
                  category="general"
                ></News>
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="2"
                  pageSize="6"
                  country="in"
                  category="technology"
                ></News>
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="3"
                  pageSize="6"
                  country="in"
                  category="business"
                ></News>
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="4"
                  pageSize="6"
                  country="in"
                  category="sports"
                ></News>
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="5"
                  pageSize="6"
                  country="in"
                  category="science"
                ></News>
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="6"
                  pageSize="6"
                  country="in"
                  category="entertainment"
                ></News>
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  apiKey={apiKey}
                  setProgress={setProgress}
                  key="7"
                  pageSize="6"
                  country="in"
                  category="general"
                ></News>
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;
