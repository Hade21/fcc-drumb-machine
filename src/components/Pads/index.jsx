import React, { useCallback } from "react";

const Pads = ({ id, children, clip, power, volume, keyCode, setDisplay }) => {
  const playSound = (e) => {
    const sound = e.target.firstElementChild;
    sound.currentTime = 0;
    sound.volume = (volume / 100).toFixed(1);
    setDisplay(id);
    sound.play();
  };
  const handleClick = (e) => {
    if (power) {
      playSound(e);
    }
  };

  const handleKeypress = useCallback(
    (event) => {
      if (event.keyCode === keyCode) {
        const style = document.querySelector(`.${children}`);
        const active = `${children} drum-pad text-base font-sans font-bold p-6 rounded-lg bg-orange-500 translate-y-1 shadow-none`;
        const nonactive = `${children} drum-pad p-6 text-base font-sans font-bold bg-slate-400 rounded-lg shadow-lg ${
          power ? "active:bg-orange-500" : "active:bg-slate-400"
        } active:translate-y-1 active:shadow-none`;
        style.setAttribute("class", active);
        setTimeout(() => {
          style.setAttribute("class", nonactive);
        }, 100);
        const sound = style.firstElementChild;
        sound.currentTime = 0;
        sound.volume = (volume / 100).toFixed(1);
        setDisplay(id);
        sound.play();
      }
    },
    [volume]
  );

  const keyPress = (power) => {
    if (power) document.addEventListener("keydown", handleKeypress);
    else document.removeEventListener("keydown", handleKeypress);
  };
  keyPress(power);

  return (
    <div
      className={`${children} drum-pad text-base font-sans font-bold p-6 bg-slate-400 rounded-lg shadow-lg ${
        power ? "active:bg-orange-500" : "active:bg-slate-400"
      } active:translate-y-1 active:shadow-none`}
      id={id}
      onClick={handleClick}
    >
      <audio src={clip} className="clip" id={children} />
      {children}
    </div>
  );
};

export default Pads;
