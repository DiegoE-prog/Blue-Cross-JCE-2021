import React, { useEffect } from "react";

function Test(props) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}

export default Test;
