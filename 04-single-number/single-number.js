// XOR (^) operator's property
var singleNumber = function (nums) {
  let result = 0;

  for (let num of nums) {
    result ^= num;
  }
  return result;
};

//using Set
var singleNumber = function (nums) {
  let set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      set.delete(num);
    } else {
      set.add(num);
    }
  }

  return Array.from(set)[0];
};

// Using Hasmaps

var singleNumber = function (nums) {
  let map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      map.delete(num);
    } else {
      map.set(num, true);
    }
  }

  return Array.from(map.keys())[0];
};
