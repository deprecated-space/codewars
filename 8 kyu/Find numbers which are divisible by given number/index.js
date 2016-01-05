// Source : http://www.codewars.com/kata/55edaba99da3a9c84000003b
// Author : Han Zichi
// Date   : 2016-01-05

function divisibleBy(numbers, divisor){
  var ans = [];
  for (var i = 0, len = numbers.length; i < len; i++)
    if (numbers[i] % divisor === 0)
      ans.push(numbers[i]);
  return ans;
}