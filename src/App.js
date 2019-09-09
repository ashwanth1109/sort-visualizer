import React, { useState, useEffect } from "react";

import Menu from "./components/Menu";
import Stacks from "./components/Stacks";
import useBubbleSort from "./hooks/useBubbleSort";
import { Container, Body } from "./styles";

const App = () => {
  const [blockCount, setBlockCount] = useState(20);
  const [numbers, setNumbers] = useState([]);
  const [speed, setSpeed] = useState(0);

  const generate = () => {
    let nums = [];
    for (let i = 0; i < blockCount; i++) {
      nums.push(Math.ceil(Math.random() * 300));
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
    <Container>
      <Menu
        startSort={() => runBubbleSort()}
        generate={() => resetAndGenerate()}
        stopSort={() => resetAndGenerate()}
        setBlockCount={setBlockCount}
        blockCount={blockCount}
      />
      <Body>
        <Stacks count={blockCount} numbers={newNumbers} current={iter2} />
      </Body>
    </Container>
  );
};

export default App;
