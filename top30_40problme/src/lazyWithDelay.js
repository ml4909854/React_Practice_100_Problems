import React from "react";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const lazyWithDelay = (importFunction, delayTime = 1000) => {
  return React.lazy(() =>
    Promise.all([importFunction(), delay(delayTime)]).then(
      ([moduleExports]) => moduleExports
    )
  );
};

export default lazyWithDelay;
