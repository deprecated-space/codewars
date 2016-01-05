// Source : http://www.codewars.com/kata/526571aae218b8ee490006f4
// Author : Han Zichi
// Date   : 2016-01-05

// 计算二进制中 bit 1 个数
// http://www.cnblogs.com/zichi/p/4798233.html
var countBits = function(n) {
  // Program Me
  n = ((n & 0xAAAAAAAA) >>> 1) + (n & 0x55555555);
  n = ((n & 0xCCCCCCCC) >>> 2) + (n & 0x33333333);
  n = ((n & 0xF0F0F0F0) >>> 4) + (n & 0x0F0F0F0F);
  n = ((n & 0xFF00FF00) >>> 8) + (n & 0x00FF00FF);
  n = ((n & 0xFFFF0000) >>> 16) + (n & 0x0000FFFF);
  return n;
};