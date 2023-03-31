import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SideCart = ({ countWatchTime }) => {
  const [time, setTime] = useState(countWatchTime);

  const [breakTime, setBreakTime] = useState(0);

  useEffect(() => {
    const getWatchTimeFromStorage = localStorage.getItem("watchTime");
    setTime(getWatchTimeFromStorage);

    const getBreakTime = localStorage.getItem("breakTime");
    setBreakTime(getBreakTime);
  }, [countWatchTime]);

  const handleBreakTime = (bt) => {
    localStorage.setItem("breakTime", bt);
    setBreakTime(bt);
  };

  const handleComplete = () => {
    toast("Wow so easy !");
  };

  return (
    <div>
      <h3>My Cart</h3>
      <div className="mt-5 text-center">
        <p>total watch time</p>
        <input value={time} type="text" disabled />
      </div>

      <h5 className="mt-5">Add Break time</h5>
      <button
        onClick={() => handleBreakTime(15)}
        className="w-25 btn-circle m-1 btn btn-info"
      >
        15
      </button>
      <button
        onClick={() => handleBreakTime(20)}
        className="w-25 btn-circle bg-warning btn btn-info"
      >
        20
      </button>

      <input type="text" value={breakTime} disabled />

      <button onClick={handleComplete} className="mt-5 btn btn-info w-100">
        Complete
      </button>
    </div>
  );
};

export default SideCart;
