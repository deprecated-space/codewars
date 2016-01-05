// Source : http://www.codewars.com/kata/55749101ae1cf7673800003e
// Author : Han Zichi
// Date   : 2016-01-05

function pattern(n){
  var output = '';
  if (n <= 1) return '';
  if (n & 1) n--;
  for(var i = 2; i <= n; i += 2) {
    for(var j = 1; j <= i; j++)
      output += i;
    if (i !== n)
    output += '\n';
  }
    
  return output;
}