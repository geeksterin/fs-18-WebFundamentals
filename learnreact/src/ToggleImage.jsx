import { useState } from "react";
import image from "./assets/ada sharma.jpg";
import "./toggleImage.css";

function ToggleImage() {
  const [isShown, setIsShown] = useState(true);

  function showHideImage() {
    if (isShown) {
      setIsShown(false);
    } else setIsShown(true);
  }

  return (
    <>
      <h1>Toggle Image</h1>
      <img
        src={image}
        alt=""
        style={{ width: "200px" }}
        className={isShown ? "" : "hidden"}
      />
      <button onClick={showHideImage}>Show / Hide Image</button>
    </>
  );
}
export default ToggleImage;
