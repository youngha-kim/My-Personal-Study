const array1 = ["a", "b", "c"];

const testFn = (array) => {
  let value1 = array.forEach((el) => {
    return el;
  });
  let value2 = array.map((el) => {
    return el;
  });
  return { value1, value2 };
};

console.log(testFn(array1));

