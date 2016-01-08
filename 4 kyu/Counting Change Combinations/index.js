// Source : http://www.codewars.com/kata/541af676b589989aed0009e7
// Author : Han Zichi
// Date   : 2016-01-08

function countChange (target, arr) {
    // 如果要分解的数字小于等于 0，则方案数为 0
    if (target <= 0)
      return 0;

    // 如果第二个参数为空，则可以枚举的数为 1-target
    if (!arr) {
      arr = [];
      for (var i = 1; i <= target; i++)
        arr[i] = i;
    }

    var a = []
      , b = [];

    for (var i = 0; i <= target; i++)
      a[i] = b[i] = 0;

    // start
    a[0] = 1;

    // 枚举可以拼的数字
    for (var i = 0; i < arr.length; i++) {

      for (var j = 0; j <= target; j++)
        for (var k = 0; j + k <= target; k += arr[i])
          b[j + k] += a[j];

      for (var j = 0; j <= target; j++)
        a[j] = b[j], b[j] = 0;
    }

    return a[target];
  }
