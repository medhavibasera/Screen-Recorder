import React from "react";

function BtnComponents(props) {
  return (
    <div>
      {props.status === 0 ? (
        <button
          className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}
        >
          Start
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
export default BtnComponents;
