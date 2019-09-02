import React, { useState, useEffect } from "react";

import Menu from "./components/Menu";
import Stacks from "./components/Stacks";

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

const range = [1, 300];

const App = () => {
  const [blockCount, setBlockCount] = useState(100);
  const [numbers, setNumbers] = useState([]);
  const [iter1, setIter1] = useState(0);
  const [iter2, setIter2] = useState(0);

  console.log("iter values", iter1, iter2);

  useEffect(() => {
    let nums = [];
    for (let i = 0; i < blockCount; i++) {
      nums.push(Math.ceil(Math.random() * 300));
    }
    setNumbers(nums);
  }, [blockCount]);

  const runSort = () => {
    console.log("Numbers", numbers);
    console.log("running sort instance", iter1, iter2);
    if (numbers[iter2] > numbers[iter2 + 1]) {
      let nums = numbers;
      [nums[iter2], nums[iter2 + 1]] = [nums[iter2 + 1], nums[iter2]];
      console.log("New Numbers", nums);
      setNumbers(nums);
    } else {
      setIter2(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (iter1 !== 0 || iter2 !== 0) {
      console.log("numbers effect");
      setIter2(prev => prev + 1);
    }
  }, [numbers]);

  useEffect(() => {
    if (iter2 !== 0) {
      console.log("iteration 2 effect");
      if (iter2 === numbers.length - iter1) {
        // restart loop
      } else {
        console.log("next iteration starting in 1 sec");
        setTimeout(() => {
          runSort();
        }, 1000);
      }
    }
  }, [iter2]);

  return (
    <div style={s.container}>
      <Menu startSort={runSort} />
      <div style={s.body}>
        <Stacks count={blockCount} numbers={numbers} current={iter2} />
      </div>
    </div>
  );
};

export default App;
