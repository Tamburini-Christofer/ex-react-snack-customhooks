import { useEffect, useState } from "react";

function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    function downHandler(event) {
      if (event.key === targetKey) {
        setIsPressed(true);
      }
    }

    function upHandler(event) {
      if (event.key === targetKey) {
        setIsPressed(false);
      }
    }

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return isPressed;
}

export default useKeyPress;
