// Source : http://www.codewars.com/kata/55466644b5d240d1d70000ba
// Author : Han Zichi
// Date   : 2016-01-05

function candies(kids){
  if(!kids.length || kids.length === 1) return -1;
  var sum = 0;
  var maxn = Math.max.apply(null, kids);
  for(var i = 0; i < kids.length; i++)
    sum += Math.abs(maxn - kids[i]);

  return sum;
}