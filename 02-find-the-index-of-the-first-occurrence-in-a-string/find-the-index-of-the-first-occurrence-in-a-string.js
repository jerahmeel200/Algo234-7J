/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle === "") return 0

  for(let i = 0; i <= haystack.length - needle.length; i++){
    if(haystack.substring(i, i + needle.length) === needle){
        return i
    }
  }

  return -1
};

//another simpler way to solve this is to use the indexOf() method

var strStr = function(haystack, needle) {
  return haystack.indexOf(needle)
};