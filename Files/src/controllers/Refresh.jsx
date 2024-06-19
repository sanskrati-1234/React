import React, { useEffect, useState } from "react";

function Refresh() {
  const [counter, setCounter] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((counter) => {
        if (counter === 9) {
          setFlag(true);
        } else if (counter === 1) {
          setFlag(false);
        }

        if (flag) {
          return counter - 1;
        } else {
          return counter + 1;
        }
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [flag]);
  return <div>{counter}</div>;
}

export default Refresh;
