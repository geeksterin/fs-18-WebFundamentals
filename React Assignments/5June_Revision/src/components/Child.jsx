import React, { memo } from "react";

function Child({ func }) {
  console.log("Child Rendered");
  return <div>Child</div>;
}

export default memo(Child);
