import React from 'react';

export default function InputBox({ label }) {
  return (
    <div className="inputBox">
      <p>{label}</p>
      <div className="inputDiv">
        <input></input>
      </div>
    </div>
  );
}
