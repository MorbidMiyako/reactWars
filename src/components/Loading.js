import React from "react";
import { Spinner } from "reactstrap";

const createSpinnerArray = () => {
  let spinnerArray = []
  for (let i = 0; i < 54; i++) {
    spinnerArray.push(1)
  }
  return spinnerArray
}

const Loading = props => {
  return (
    <div className="loader">
      {createSpinnerArray().map(i => (

        <Spinner type="grow" className="spin" />
      ))
      }

    </div>
  );
};

export default Loading;
