// Source : http://www.codewars.com/kata/558dd9a1b3f79dc88e000001
// Author : Han Zichi
// Date   : 2016-01-05

function findDup( arr ){
  var hash = [];
  for(var i = 0; i < arr.length; i++) 
    if (!hash[arr[i]])
      hash[arr[i]] = true;
    else return arr[i];
}