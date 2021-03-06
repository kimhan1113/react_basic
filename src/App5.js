import { current } from "immer";
import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";

const useCurrentTime = () => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const handler = setInterval(() => {
      const nowTime = moment().format("HH:mm:ss");
      //   const currentTime = new Date().toISOString().slice(11, 19);
      const currentTime = nowTime;
      setCurrentTime(currentTime);
    }, 1000);
    return () => clearInterval(handler);
  }, []);

  return currentTime;
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
};

const useWindowHeight = () => {
  const [height, setHeight] = useState(window.innerHeight);

  //   useEffect(() => {
  //     const onResize = () => {
  //       setHeight(window.innerHeight);
  //     };

  //     window.addEventListener("resize", onResize);
  //     return () => window.removeEventListener("resize", onResize);
  //   }, []);

  return height;
};

const App = () => {
  const currentTime = useCurrentTime();
  const windowWidth = useWindowWidth();
  const windowHeight = useWindowHeight();
  return (
    <div>
      <h1>íėŽėę°</h1>
      {currentTime}
      <h1>current window width</h1>
      {windowWidth}px
      <h1>current window height</h1>
      {windowHeight}px
    </div>
  );
};

export default App;
