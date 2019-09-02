import React from "react";

const s = {
  container: {
    width: "100%",
    marginTop: "16px",
    height: "30px",
    background: "#fff",
    display: "flex",
    justifyContent: "space-around"
  },
  button: {
    height: "100%",
    width: "50px",
    background: "#888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff"
  }
};

const Menu = ({ startSort }) => (
  <div style={s.container}>
    <div>Block Count: 300</div>
    <div style={s.button} onClick={() => startSort()}>
      Sort
    </div>
  </div>
);

export default Menu;
