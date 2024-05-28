import { useState } from "react";
import "./boxshowhide.css";
function BoxHideShow() {
  const [toggleDiv, setToggleDiv] = useState({
    box1: true,
    box2: true,
    box3: true,
  });

  function handleToggle(text) {
    // console.log(text);
    const updatedText = text.toLowerCase().replace(" ", "");
    // const toggleDivCopy = toggleDiv;
    // toggleDivCopy[updatedText] = false;
    setToggleDiv((prevState) => {
      prevState[updatedText] = false;
    });
  }

  console.log(toggleDiv);

  return (
    <>
      <div className="box" id="box1">
        <h3 onClick={(e) => handleToggle(e.target.innerHTML)}>Box 1</h3>
        <div className="content" style={toggleDiv[this.id] ? {display: "block"} : {display: "none"}}>
          <img src="https://placehold.co/300x150" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi
            laudantium culpa dolores corporis voluptatum beatae quia odio
            labore! Vero ipsam quis, officiis odio at autem ut deleniti quod
            magnam!
          </p>
        </div>
      </div>

      <div className="box" id="box2">
        <h3 onClick={(e) => handleToggle(e.target.innerHTML)}>Box 2</h3>
        <div className="content" style={toggleDiv[this.id] ? {display: "block"} : {display: "none"}}>
          <img src="https://placehold.co/300x150" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi
            laudantium culpa dolores corporis voluptatum beatae quia odio
            labore! Vero ipsam quis, officiis odio at autem ut deleniti quod
            magnam!
          </p>
        </div>
      </div>

      <div className="box" id="box3">
        <h3 onClick={(e) => handleToggle(e.target.innerHTML)}>Box 3</h3>
        <div className="content" style={toggleDiv[this.id] ? {display: "block"} : {display: "none"}}>
          <img src="https://placehold.co/300x150" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi
            laudantium culpa dolores corporis voluptatum beatae quia odio
            labore! Vero ipsam quis, officiis odio at autem ut deleniti quod
            magnam!
          </p>
        </div>
      </div>
    </>
  );
}
export default BoxHideShow;
