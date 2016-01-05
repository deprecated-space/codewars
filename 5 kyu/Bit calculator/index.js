// Source : http://www.codewars.com/kata/52ece9de44751a64dc0001d9
// Author : Han Zichi
// Date   : 2016-01-05

// 两个二进制字符串相加求和 
// parseInt disallowed
// 字符串模拟整数相加

function calculate(num1,num2){
  num1 = num1.split('').reverse().join('');
  num2 = num2.split('').reverse().join('');
  
  var add = 0
    , ans = '';
  for (var i = 0, len = num1.length > num2.length ? num1.length : num2.length; i < len; i++) {
    var a = i < num1.length ? Number(num1[i]) : 0
      , b = i < num2.length ? Number(num2[i]) : 0;
      
    var c = a + b + add;
    ans += c & 1;
    add = c >= 2 ? 1 : 0;
  }

  if (add) ans += add;

  var sum = 0;
  for (var i = 0, len = ans.length; i < len; i++)
    sum += Number(ans[i]) << i;

  return sum;
}