import React, { useState, useEffect } from "react";
import "../App.css";
import dice from "../Assets/icon-dice.svg";
import separator from "../Assets/pattern-divider-desktop.svg";


export function APIFetch({ update }) {
  const [advice, setAdvice] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log(data);
      setAdvice(data.slip.advice);
      setNumber(data.slip.id);
    }

    fetchData();
  }, [update]);

  return (
    <div>
      <br/>
      <h3 className="headText green">A D V I C E &nbsp;# {number.toString().split('').join(' ')}</h3>
      <p className="bodyText cyan">"{advice}"</p>
    </div>
  );
}

export function UpdateButton({ handleClick }) {
  return (
    <>
    <button onClick={handleClick} className="circle-btn">Update Advice</button>
    <img src={dice} alt="button icon" className="button-icon" />
    </>
    
  );
}

export function ParentDesktopComponent() {
  const [update, setUpdate] = useState(false);

  function handleUpdate() {
    setUpdate(!update);
  }

  return (
    <div>
      <APIFetch update={update} />
      <img src={separator} className="adviceLogo" alt="What" />
      <br/>
      <br/>
      <div className="button-container">
      <UpdateButton handleClick={handleUpdate} />
      </div>
    </div>
  );
}