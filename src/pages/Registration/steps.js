import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import "./steps.scss";

const Steps = ({ demos, step, setSteps,setclass }) => {
  

  return (
    <>
      <div className="steps-main-div w-100">
        <Stepper className="stepper-box" activeStep={step} activeColor connectorStateColors>
          <Step
            className="step-btn"
            label="Step 1"
            onClick={(e) => {
              setSteps(0);
              setclass(false)
            }}
          />
          <Step
            className="step-btn"
            label="Step 2"
            disabled={false}
            onClick={(e) => {
              setSteps(1);
              setclass(false)
            }}
          />
          <Step
            className="step-btn"
            label="Step 3"
            disabled={false}
            onClick={(e) => {
              setSteps(2);
              setclass(false)
            }}
          />
          <Step
            className="step-btn"
            label="Step 4"
            disabled={false}
            onClick={(e) => {
              setSteps(3);
            }}
          />

          {/* <Step
            className="step-btn"
            label="Step 5"
            disabled={false}
            onClick={(e) => {
              setSteps(4);
            }}
          /> */}
        </Stepper>

        <div className="steps-content">{demos[step].content}</div>
      </div>
    </>
  );
};

export default Steps;
