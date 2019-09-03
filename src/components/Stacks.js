import React from "react";

const s = {
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  stack: {
    flex: 1,
    border: "1px solid #888"
  }
};
const Stacks = ({ current, numbers }) => {
  return (
    <div style={s.container}>
      {numbers.map((num, id) => {
        const colorDiv = current - 1 === id || current === id;
        return (
          <div
            key={`${id}`}
            style={{
              ...s.stack,
              height: `${num / 3}%`,
              background: colorDiv ? "#ed5336" : "#222"
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Stacks;
