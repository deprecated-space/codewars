// Source : http://www.codewars.com/kata/55c098aa8468f3b9030000f1
// Author : Han Zichi
// Date   : 2016-01-05

function move_zeros(arrNum, isRight){
  //Your Code logic should written here
  if (isRight === undefined)
    isRight = true;
  
  var ans = []
    , cnt = 0;

  arrNum.forEach(function(item) {
    if (item) 
      ans.push(item);
    else
      cnt++;
  });

  while (cnt--) {
    isRight ? ans.push(0) : ans.unshift(0);
  }

  return ans;
}