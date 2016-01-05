// Source : http://www.codewars.com/kata/52b7ed099cdc285c300001cd
// Author : Han Zichi
// Date   : 2016-01-05

function sumIntervals(intervals){
  //TODO
  intervals.sort(function(a, b) {
    if (a[0] !== b[0]) 
      return a[0] > b[0];
    return a[1] > b[1];
  });

  var ans = 0;

  var start = intervals[0][0]
    , end = intervals[0][1];

  for (var i = 1, len = intervals.length; i < len; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      ans += end - start;
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }

  ans += end - start;
  return ans;
}