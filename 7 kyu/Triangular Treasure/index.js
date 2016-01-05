// Source : http://www.codewars.com/kata/525e5a1cb735154b320002c8
// Author : Han Zichi
// Date   : 2016-01-05

// Return the nth triangular number
function triangular( n ) {
  if (n < 0) return 0;
  return (1 + n) * n / 2;
}