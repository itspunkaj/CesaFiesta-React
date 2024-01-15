import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override= {
    display: "block",
    margin: "0 auto",
  };

function Loader({loading}) {

  return (
    <div className="sweet-loading pt-16">

      <ClipLoader
        color="#2D2727"
        loading={loading}
        cssOverride={override}
        size={35}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;