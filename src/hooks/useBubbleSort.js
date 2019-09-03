import { useState, useEffect } from "react";

const useBubbleSort = (numbers, n) => {
  const [iter1, setIter1] = useState(0);
  const [iter2, setIter2] = useState(0);
  const [canSort, setCanSort] = useState(false);

  useEffect(() => {
    setIter1(0);
    setIter2(0);
    setCanSort(false);
  }, [numbers]);

  // if iter1 changes & is non zero, reset iter2 to 0
  useEffect(() => {
    if (iter1 !== 0) {
      setIter2(1);
    }
  }, [iter1]);

  // if iter2 changes and is non zero, sort after 'n' seconds
  useEffect(() => {
    if (iter2 !== 0) {
      setTimeout(() => {
        setCanSort(true);
      }, 1000 * n);
    }
  }, [iter2]);

  // whenever sort is set to true
  useEffect(() => {
    if (canSort) {
      // reset sort
      setCanSort(false);
      // check if prev number greater than current number
      if (numbers[iter2 - 1] > numbers[iter2]) {
        // swap the two numbers
        [numbers[iter2 - 1], numbers[iter2]] = [
          numbers[iter2],
          numbers[iter2 - 1]
        ];
      }
      // if current number has not yet reached length - i, increment j
      if (iter2 < numbers.length - iter1) {
        setIter2(prev => prev + 1);
      }
      // else if i has not reached length, increment i
      else if (iter1 < numbers.length) {
        setIter1(prev => prev + 1);
      }
      // else sorting is complete
      else {
        console.log("sorting is complete?");
      }
    }
  }, [canSort]);

  // function to trigger to start bubble sort
  const runBubbleSort = () => {
    setIter1(1);
  };

  return [numbers, iter2, runBubbleSort];
};

export default useBubbleSort;
