// Source : http://www.codewars.com/kata/54d418bd099d650fa000032d
// Author : Han Zichi
// Date   : 2016-01-05

var vampire_test = function(a, b){
  var c = (a * b).toString();
  var d = a + '' + b;

  var e = c.split('').sort().toString();
  var f = d.split('').sort().toString();
  
  return e == f;
}