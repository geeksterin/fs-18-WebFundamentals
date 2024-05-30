import { useState } from "react";
import "./boxshowhide.css";
import Box from "./Box";

function BoxHideShow() {
  const [toggleDiv, setToggleDiv] = useState({
    box1: true,
    box2: true,
    box3: true,
  });

  return (
    <>
      <Box boxName="Box 1" toggleDiv={toggleDiv} id="box1" setToggleDiv={setToggleDiv} />
      <Box boxName="Box 2" toggleDiv={toggleDiv} id="box2" setToggleDiv={setToggleDiv} />
      <Box boxName="Box 3" toggleDiv={toggleDiv} id="box3" setToggleDiv={setToggleDiv} />

      {/* <div className="box" id="box1">
        <h3>
          Box 1 <ArrowDropDownIcon />
        </h3>
        <div className="content">
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
        <h3>
          Box 2 <ArrowDropDownIcon />
        </h3>
        <div className="content">
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
        <h3>
          Box 3 <ArrowDropDownIcon />
        </h3>
        <div className="content">
          <img src="https://placehold.co/300x150" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi
            laudantium culpa dolores corporis voluptatum beatae quia odio
            labore! Vero ipsam quis, officiis odio at autem ut deleniti quod
            magnam!
          </p>
        </div>
      </div> */}
    </>
  );
}
export default BoxHideShow;
