import React, { useContext } from "react";
import Header from "./components/Header/Header";
import Preloader from "./components/Preloader";
import { Outlet } from "react-router-dom";
import { MovieContext } from "./contecsts/context";
import "./App.css";

function App() {
  const { isLoaded } = useContext(MovieContext);

  return (
    <div className="App">
      <div className="container">
        {isLoaded ? (
          <>
            <div className="content">
              <Header />
              <Outlet />
            </div>
          </>
        ) : (
          <div className="loader">
            <Preloader />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
