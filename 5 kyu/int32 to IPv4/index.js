// Source : http://www.codewars.com/kata/52e88b39ffb6ac53a400022e
// Author : Han Zichi
// Date   : 2016-01-05

function int32ToIp(int32){
  var str = int32.toString(2)
    , a = [];

  while (str.length < 32) str = '0' + str;
  
  while (str) {
    var tmp = str.substring(0, 8);
    a.push(parseInt(tmp, 2));
    str = str.substring(8);
  }

  return a[0] + '.' + a[1] + '.' + a[2] + '.' + a[3];
}