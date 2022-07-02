import React, { useEffect, useState } from "react";

//data
import data from "../data/data.json";

//components
import Pads from "./Pads";

const Main = () => {
  const bankData = data[0].data;
  const [list, setList] = useState(bankData.bankOne);
  const [bank, setBank] = useState(false);
  const [power, setPower] = useState(false);
  const [volume, setVolume] = useState(50);
  const [display, setDisplay] = useState("");

  const handleChecked = (e) => {
    if (e.target.id === "power-toggle") {
      setPower(e.target.checked);
    } else {
      setBank(e.target.checked);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
    setDisplay(`Volume : ${e.target.value}`);
  };

  useEffect(() => {
    if (bank) {
      setList(bankData.bankTwo);
      setDisplay("Smooth Piano Kit");
    } else {
      setList(bankData.bankOne);
      setDisplay("Heater Kit");
    }
  }, [bank, bankData.bankOne, bankData.bankTwo]);

  return (
    <div
      className="wrapper border-2 border-orange-500 flex gap-5 justify-between p-4"
      id="drum-machine"
    >
      <div className="pads-wrapper grid grid-cols-3 grid-rows-3 gap-3 w-3/5">
        {list.map((item) => {
          return (
            <Pads
              id={item.id}
              clip={item.url}
              keyCode={item.keyCode}
              power={power}
              volume={volume}
              setDisplay={setDisplay}
              key={item.id}
            >
              {item.keyTrigger}
            </Pads>
          );
        })}
      </div>
      <div className="control w-2/5 grid gap-y-4">
        <div className="power">
          <h3 className="title font-serif font-bold text-xl mb-2">Power</h3>
          <div className="flex justify-center">
            <label
              htmlFor="power-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                id="power-toggle"
                className="sr-only peer"
                onChange={handleChecked}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
        <div className="display bg-slate-300 rounded-lg px-6 py-4" id="display">
          <h3 className="innerText text-base font-sans font-bold">{display}</h3>
        </div>
        <div className="volume-slider">
          <label
            htmlFor="volume-range"
            className="block mb-2 text-base font-sans font-bold"
          >
            Volume
          </label>
          <input
            id="volume-range"
            type="range"
            value={volume}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            onChange={handleVolume}
          />
        </div>
        <div className="bank">
          <h3 className="title text-base font-sans font-bold mb-2">Bank</h3>
          <div className="flex justify-center">
            <label
              htmlFor="bank-toggle"
              className="inline-flex relative items-center cursor-pointer"
            >
              <input
                type="checkbox"
                onChange={handleChecked}
                id="bank-toggle"
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
