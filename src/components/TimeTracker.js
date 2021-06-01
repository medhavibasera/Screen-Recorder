import "../css/TimeTracker.css";
import DisplayComponent from "./DisplayComponents";
import BtnComponents from "./BtnComponents";
import React, { useState, useEffect } from "react";
function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [spenthour, setspenthour] = useState("");
  const [spentmin, setspentmin] = useState("");
  const [spentsec, setspentsec] = useState("");

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };
  useEffect(() => {
    start();
    return () => {
      setspenthour(time.h);
      setspentmin(time.m);
      spentsec(time.s);
    };
  }, []);
  var updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    updatedS++;

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };
  //   const stop = () => {
  //     clearInterval(interv);
  //     setStatus(2);
  //   };
  //   const reset = () => {
  //     clearInterval(interv);
  //     setStatus(0);
  //     setTime({ s: 0, m: 0, h: 0 });
  //   };
  const resume = () => start();

  return (
    <div className="main-tracker-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponents
            status={status}
            // reset={reset}
            // resume={resume}
            // stop={stop}
            start={start}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
