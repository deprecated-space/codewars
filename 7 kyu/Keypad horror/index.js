// Source : http://www.codewars.com/kata/5572392fee5b0180480001ae
// Author : Han Zichi
// Date   : 2016-01-05

function computerToPhone(numbers){
  // ...
  var str = '';
  for(var i = 0; i < numbers.length; i++) {
    var tmp = Number(numbers[i]);
    if (tmp >= 4 && tmp <= 6 || tmp === 0)
      str += tmp;
    else if (tmp < 4)
      str += tmp + 6;
    else 
      str += tmp - 6;
  }

  return str;
}