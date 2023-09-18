function countNumberOfNinesInNumber(number) {
  let count = 0;
  number = number.toString();
}

  function countNumberOfNinesInNumber(number) {
    let count = 0;
    for (let i = 0; i < String(number).length; i++) {
      const digit = String(number)[i];
      if (9 == digit) {
        count++;
      }
    }
    return count;
  }

console.log(countNumberOfNinesInNumber(9875749))
