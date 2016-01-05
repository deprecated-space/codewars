// Source : http://www.codewars.com/kata/5558cc216a7a231ac9000022
// Author : Han Zichi
// Date   : 2016-01-05

function duplicates(arr) {
  //TODO: return the array of duplicates from arr
  var hash = {};  // number
  var _hash = {};  // string
  var ans = [];
  for(var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      if (!hash[arr[i]])
        hash[arr[i]] = 1;
      else 
        hash[arr[i]] ++;
    } else {
      if (!_hash[arr[i]])
        _hash[arr[i]] = 1;
      else 
        _hash[arr[i]] ++;
    }
  }

  for(var i in hash) {
    if (hash[i] >= 2)
      ans.push(Number(i));
  }

  for(var i in _hash) {
    if (_hash[i] >= 2)
      ans.push(i)
  }

  return ans;
}