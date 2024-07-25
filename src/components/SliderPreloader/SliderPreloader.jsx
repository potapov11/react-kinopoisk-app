import React from "react";
import styles from "./styles.css";

import { CircularProgress } from "@mui/material";

function SliderPreloader() {
  return (
    <div className="sliderPreloader">
      <CircularProgress />
    </div>
  );
}

export default SliderPreloader;
