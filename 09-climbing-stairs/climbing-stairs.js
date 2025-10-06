var climbStairs = function(n) {
   if (n <= 2) return n
   let first = 1
   let second = 2

   for(let i = 3; i <= n; i++){
    let current = first + second
    first = second
    second = current
   }

   return second 
}; 


// recursion
function climbStairs(n) {
  if (n <= 2) return n;
  return climbStairs(n - 1) + climbStairs(n - 2);
}