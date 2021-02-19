import React from "react";

function HelloPage(props) {
  return (
    <div>
        <h>Hello {props.user.username}</h>
    </div>
  );
}

export default HelloPage;