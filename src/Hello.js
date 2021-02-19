import React from "react";

function HelloPage() {
  return (
    <div>
      <h>Hello {localStorage.getItem("currentUser")}</h>
    </div>
  );
}

export default HelloPage;
