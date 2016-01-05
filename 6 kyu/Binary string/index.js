// Source : http://www.codewars.com/kata/52654ea8e218b83553000666
// Author : Han Zichi
// Date   : 2016-01-05

// number->二进制string
// number.toString(2) is disallowed.

function toBinaryString(number){
  // Your code goes here
  if (number === 0) return '0';
  var tmp = '';
  while (number) {
    tmp += number & 1 ? 1 : 0;
    number >>= 1;
  }
  
  return tmp.split('').reverse().join('');
}