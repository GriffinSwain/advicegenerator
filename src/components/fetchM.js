import React, { useState, useEffect } from "react";
import "../Mobile.css";
import dice from "../Assets/icon-dice.svg";
import mobileSeparator from "../Assets/pattern-divider-mobile.svg";


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
      <h1 className="headText green">A D V I C E &nbsp;# {number.toString().split('').join(' ')}</h1>
      <p className="bodyMobileText cyan">"{advice}"</p>
    </div>
  );
}

export function UpdateButton({ handleClick }) {
  return (
    <>
    <button onClick={handleClick} className="circle-Mobile-Btn">Update Advice</button>
    <img src={dice} alt="button icon" className="mobile-button-icon" />
    </>
    
  );
}

export function ParentMobileComponent() {
    const [update, setUpdate] = useState(false);
  
    function handleUpdate() {
      setUpdate(!update);
    }
  
    return (
      <div>
        <APIFetch update={update} />
        <img src={mobileSeparator} className="adviceLogo" alt="What" />
        <br/>
        <br/>
        <div className="mobile-button-container">
        <UpdateButton handleClick={handleUpdate} />
        </div>
      </div>
    );
  }