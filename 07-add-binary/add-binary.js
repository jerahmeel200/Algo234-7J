var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += a[i--] - "0";
    if (j >= 0) sum += b[j--] - "0";
    result.push(sum % 2);
    carry = Math.floor(sum / 2);
  }
  return result.reverse().join("");
};

// Convert to Decimal, Add, Convert Back. Another way
var addBinary = function(a, b) {
  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

//Use Built-in Parse and toString (not safe for very large inputs)
var addBinary = function(a, b) {
  return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
};