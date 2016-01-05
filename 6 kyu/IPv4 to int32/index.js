// Source : http://www.codewars.com/kata/52ea928a1ef5cfec800003ee
// Author : Han Zichi
// Date   : 2016-01-05

function ipToInt32(ip){
  var a = ip.split('.').map(function(item) {
    return Number(item);
  });

  var sum = ((a[0] << 24) >>> 0) + (a[1] << 16) + (a[2] << 8) + a[3];
  return sum;
}