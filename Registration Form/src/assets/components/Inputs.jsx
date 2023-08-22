import { useState } from "react";

const Inputs = ({firstName, setFirstName, secondName, setSecondName, email, setEmail}) => {


  function firstNameHandler(event) {
    setFirstName(event.target.value);
  }

  function secondNameHandler(event) {
    setSecondName(event.target.value);
  }

  function emailHandler(event) {
    setEmail(event.target.value);
  }
    
  return (
    <>
      <input type="text" placeholder="First name" onChange={firstNameHandler} />
      <input type="text" placeholder="Second name" onChange={secondNameHandler} />
      <input type="text" placeholder="Email" onChange={emailHandler} />
    </>
  );
};

export default Inputs;
