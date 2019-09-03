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
    padding: "0 16px",
    background: "#888",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer"
  }
};

const Menu = ({ startSort, generate, stopSort, setBlockCount, blockCount }) => (
  <div style={s.container}>
    <div>
      Block Count:
      <input
        value={blockCount}
        onChange={e => setBlockCount(e.target.value)}
        type="number"
        max="200"
      />
    </div>
    <div style={s.button} onClick={() => startSort()}>
      Sort
    </div>
    <div style={s.button} onClick={() => generate()}>
      Generate
    </div>
    <div style={s.button} onClick={() => stopSort()}>
      Stop
    </div>
  </div>
);

export default Menu;
