import React from "react";

const Pads = ({ id, children, clip, power, volume }) => {
  const playSound = (e) => {
    const sound = e.target.firstElementChild;
    sound.currentTime = 0;
    sound.play();
  };
  const handleClick = (e) => {
    if (power) {
      console.log(e.target.innerText);
      playSound(e);
    }
  };
  return (
    <div
      className={`drum-pad p-6 bg-slate-400 rounded-lg shadow-lg ${
        power ? "active:bg-orange-500" : "active:bg-slate-400"
      } active:translate-y-1 active:shadow-none`}
      id={id}
      onClick={handleClick}
    >
      <audio src={clip} />
      {children}
    </div>
  );
};

export default Pads;
