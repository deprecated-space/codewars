// Source : http://www.codewars.com/kata/50654ddff44f800200000001
// Author : Han Zichi
// Date   : 2016-01-05

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}