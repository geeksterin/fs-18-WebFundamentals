/* eslint-disable react/prop-types */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
function Box({ boxName, toggleDiv, id, setToggleDiv }) {
    
  function handleBoxToggle(idToToggle) {
    setToggleDiv({...toggleDiv, [idToToggle] : !toggleDiv[idToToggle]});
  }
  //{box1: true, box2: true, box3: true}

  return (
    <div className="box">
      <h3>
        {boxName} <ArrowDropDownIcon onClick={() => handleBoxToggle(id)} />
      </h3>
      <div className={toggleDiv[id] ? "content visible" : "content"}>
        <img src="https://placehold.co/300x150" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut modi
          laudantium culpa dolores corporis voluptatum beatae quia odio labore!
          Vero ipsam quis, officiis odio at autem ut deleniti quod magnam!
        </p>
      </div>
    </div>
  );
}
export default Box;
