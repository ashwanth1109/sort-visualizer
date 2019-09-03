import React, { useState, useEffect } from "react";

import Menu from "./components/Menu";
import Stacks from "./components/Stacks";
import useBubbleSort from "./hooks/useBubbleSort";

const s = {
  container: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  body: {
    flex: 1,
    padding: "32px"
  }
};

const max = 300;

const App = () => {
  const [blockCount, setBlockCount] = useState(20);
  const [numbers, setNumbers] = useState([]);
  const [speed, setSpeed] = useState(0);

  const generate = () => {
    let nums = [];
    for (let i = 0; i < blockCount; i++) {
      nums.push(Math.ceil(Math.random() * max));
    }
    setNumbers(nums);
  };

  const reset = () => {
    setNumbers([]);
  };

  const resetAndGenerate = () => {
    reset();
    generate();
  };

  useEffect(() => {
    if (blockCount <= 200) {
      reset();
      generate();
    }
  }, [blockCount]);

  const [newNumbers, iter2, runBubbleSort] = useBubbleSort(numbers, speed);

  return (
    <div style={s.container}>
      <Menu
        startSort={() => runBubbleSort()}
        generate={() => resetAndGenerate()}
        stopSort={() => resetAndGenerate()}
        setBlockCount={setBlockCount}
        blockCount={blockCount}
      />
      <div style={s.body}>
        <Stacks count={blockCount} numbers={newNumbers} current={iter2} />
      </div>
    </div>
  );
};

export default App;
