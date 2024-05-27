import data from "./data";
function ArrayOfObjects() {
  //   const data = ["Nawab", "Abhinav", "Elton", "Shashank", "Abhinandan"];

  return (
    <>
      {/* we cannot use for and foreach inside return, as these do not have any return values */}

      {/* {data.map((name, index) => {
        return (
          <h2 key={index} className="name">
            {name}
          </h2>
        );
      })} */}

      {/* {data.map((obj, idx) => {
        return (
          <>
            <h2
              key={idx}
              style={{
                color: "#fff",
                backgroundColor: "#000",
                fontSize: "1.2rem",
              }}
            >
              {obj.country}
            </h2>
            <ul style={{ listStyle: "none" }}>
              {obj.states.map((state, index) => {
                return <li key={index}>{state}</li>;
              })}
            </ul>
          </>
        );
      })} */}

      {data.map((obj, idx) => {
        return (
          <>
            <h2 key={idx}>{obj.country}</h2>
            <ul>
              {obj.states.map((state, index) => {
                return <li key={index}>{state}</li>;
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}
export default ArrayOfObjects;
