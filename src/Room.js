import React, { useState } from "react";
import "./App.css";

const Room = () => {
  let [isLit, setLit] = useState(true);
  let [rmTemp, setTemp] = useState(22);
  return (
    <div className={`room ${isLit ? "light" : "dark"}`}>
      <h4>
        Here is the 'ROOM' example to practice the use of "useState" hook in
        order to understand "State" concept in react. <br />
        <br /> We use 'useState hook' concept to control following two states of
        given room:
      </h4>
      <ul>
        <li>
          <strong>Mode</strong>(light/dark)
        </li>
        <li>
          <strong>Temperature</strong>
        </li>
      </ul>
      The room is {isLit ? "light" : "dark"}.
      <br />
      Temperature of the room: {rmTemp}
      <br />
      <button
        onClick={() => {
          setLit(!isLit);
        }}
      >
        Toggle Light
      </button>
      <br />
      <button
        onClick={() => {
          setLit(true);
        }}
      >
        ON
      </button>
      <br />
      <button
        onClick={() => {
          setLit(false);
        }}
      >
        OFF
      </button>
      <br />
      <button
        onClick={() => {
          setTemp(++rmTemp);
        }}
      >
        +
      </button>
      <br />
      <button
        onClick={() => {
          setTemp(--rmTemp);
        }}
      >
        _
      </button>
    </div>
  );
};

export default Room;
