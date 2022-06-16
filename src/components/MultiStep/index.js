import React, { useState, useEffect } from "react";
import { Li, Todo, Doing, Done, Ol } from "./style";
import { Button } from "react-bootstrap";

const getStep = (defaultIndex, newIndex, length) => {
  if (newIndex <= length) {
    return newIndex;
  }
  return defaultIndex;
};

const getTopNavStyles = (indx, length) => {
  const styles = [];
  for (let i = 0; i < length; i++) {
    if (i < indx) {
      styles.push("done");
    } else if (i === indx) {
      styles.push("doing");
    } else {
      styles.push("todo");
    }
  }
  return styles;
};

const getButtonsState = (indx, length) => {
  if (indx > 0 && indx < length - 1) {
    return {
      showPreviousBtn: true,
      showNextBtn: true,
    };
  } else if (indx === 0) {
    return {
      showPreviousBtn: false,
      showNextBtn: true,
    };
  } else {
    return {
      showPreviousBtn: true,
      showNextBtn: false,
    };
  }
};

export default function MultiStep(props) {
  const { activeComponentClassName, inactiveComponentClassName } = props;
  const showNav =
    typeof props.showNavigation === "undefined" ? true : props.showNavigation;

  const [activeStep] = useState(
    getStep(0, props.activeStep, props.steps.length)
  );
  const [stylesState, setStyles] = useState(
    getTopNavStyles(activeStep, props.steps.length)
  );
  const [compState, setComp] = useState(activeStep);
  const [buttonsState, setButtons] = useState(
    getButtonsState(activeStep, props.steps.length)
  );

  useEffect(() => {
    console.log("Index changed: ", props.activeStep);
    setStepState(props.activeStep);
  }, [props.activeStep]);

  const setStepState = (indx) => {
    setStyles(getTopNavStyles(indx, props.steps.length));
    setComp(indx < props.steps.length ? indx : compState);
    setButtons(getButtonsState(indx, props.steps.length));
  };

  const next = () => setStepState(compState + 1);
  const previous = () =>
    setStepState(compState > 0 ? compState - 1 : compState);

  const handleOnClick = (evt) => {
    if (
      evt.currentTarget.value === props.steps.length - 1 &&
      compState === props.steps.length - 1
    ) {
      setStepState(props.steps.length);
    } else {
      setStepState(evt.currentTarget.value);
    }
  };

  const renderSteps = () =>
    props.steps.map((s, i) => {
      if (stylesState[i] === "todo") {
        return (
          <Li className={Todo} onClick={handleOnClick} key={i} value={i}>
            <span>{i + 1}</span>
          </Li>
        );
      } else if (stylesState[i] === "doing") {
        return (
          <Li className={Doing} onClick={handleOnClick} key={i} value={i}>
            <span>{i + 1}</span>
          </Li>
        );
      } else {
        return (
          <Li className={Done} onClick={handleOnClick} key={i} value={i}>
            <span>{i + 1}</span>
          </Li>
        );
      }
    });

  const renderNav = (show) =>
    show && (
      <div>
        <Button
          variant="primary"
          style={
            buttonsState.showPreviousBtn ? props.prevStyle : { display: "none" }
          }
          onClick={previous}
          type="submit"
        >
          Prev
        </Button>
        <Button
          variant="primary"
          style={
            buttonsState.showNextBtn ? props.nextStyle : { display: "none" }
          }
          onClick={next}
          type="submit"
        >
          Next
        </Button>
      </div>
    );

  return (
    <div className="container">
      <Ol>{renderSteps()}</Ol>
      {inactiveComponentClassName ? (
        props.steps.map((step, index) => {
          const className =
            index === compState
              ? activeComponentClassName
              : inactiveComponentClassName;
          return (
            <div className={className} key={index}>
              {step.component}
            </div>
          );
        })
      ) : (
        <div>{props.steps[compState].component}</div>
      )}
      <div>{renderNav(showNav)}</div>
    </div>
  );
}
