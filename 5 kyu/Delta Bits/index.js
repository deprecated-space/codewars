// Source : http://www.codewars.com/kata/538948d4daea7dc4d200023f
// Author : Han Zichi
// Date   : 2016-01-05

function convertBits(a, b){
  var ans = 0;
  for (var i = 0; i < 31; i++) 
    ans += (a & (1 << i)) ^ ( b & (1 << i)) ? 1 : 0;
  return ans;
}