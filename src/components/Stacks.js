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
  //   const emptyArr = new Array(count);
  console.log(numbers);
  return (
    <div style={s.container}>
      {numbers.map((num, id) => (
        <div
          key={`${id}${num}`}
          style={{
            ...s.stack,
            height: `${num / 3}%`,
            background:
              current === id || current + 1 === id ? "#ed5336" : "#222"
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stacks;
