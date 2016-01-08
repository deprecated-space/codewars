// Source : http://www.codewars.com/kata/55983863da40caa2c900004e
// Author : Han Zichi
// Date   : 2016-01-05

// http://www.cnblogs.com/zichi/p/4396548.html

function nextBigger(n){
  //your code here
  var a = n; // 要求的数字
  var s = a.toString();
  var len = s.length;
  for(var i = len - 2; i >= 0; i--) {
    if(s[i] >= s[i + 1]) continue;
    for(var j = len - 1; j > i; j--) {
      if(s[j] > s[i]) {
        var index = j;
        break;
      }
    }
    break;
  }
  var arr = s.split('');

  if (i === -1)
    return -1;

  if(i !== -1) {
    arr[i] = [arr[index], arr[index] = arr[i]][0];
    var ans = arr.slice(0, i + 1).concat(arr.slice(i + 1).reverse()).join('');
  }
  
  return +ans;
}