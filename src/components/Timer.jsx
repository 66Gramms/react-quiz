import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const date = new Date(0);
  date.setSeconds(secondsRemaining); // specify value for SECONDS here
  const timeString = date.toISOString().substring(14, 19);

  useEffect(
    function () {
      const intervalFunc = setInterval(() => dispatch({ type: "tick" }), 1000);
      return () => clearInterval(intervalFunc);
    },

    [dispatch]
  );
  return <div className="timer">{timeString}</div>;
}
