import React, { useState, useEffect } from "react";
import { MovieContext } from "./context";
import { useContext } from "react";

function Preloader() {
  const { localState } = useContext(MovieContext);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {localState !== "true" ? (
        <div className={`preloader-wrapper`}>
          <div className={`preloader-text ${isMounted ? "preloader-width-min" : ""}`}>KINOPOISK APP</div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Preloader;
