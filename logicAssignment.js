const isPalindrome = (str) => {
  let newStr = str.split("").reverse().join("");
  if (str === newStr) {
    return "palindrome";
  } else {
    return "not palindrome";
  }
};

// console.log(isPalindrome("abcba"));

const findPrimeByRange = (n, range) => {
  console.log(typeof n);
  let result = [];
  for (let i = n; i < range; i++) {
    if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
      result.push(i);
    }
  }
  return result;
};

// console.log(findPrimeByRange(11, 40));

const arr = [
  "a",
  "a",
  "a",
  "b",
  "c",
  "c",
  "b",
  "b",
  "b",
  "d",
  "d",
  "e",
  "e",
  "e",
];

const group = (arr) => {
  let result = [];
  let temp = [arr[0]];
  for (let i = 1; i <= arr.length; i++) {
    if (temp[0] === arr[i]) {
      temp.push(arr[i]);
    } else {
      result.push(temp);
      temp = [arr[i]];
    }
  }
  return result;
};

console.log(group(arr));

const arrOfObj = (arr) => {
  const newArr = [];
  let num = 1;
  let char = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      num += 1;
      char = arr[i];
    }
    if (arr[i] !== arr[i + 1]) {
      char = arr[i];
      newArr.push({ num, char });
      num = 1;
      char = "";
    }
  }
  return newArr;
};

console.log(arrOfObj(arr));
