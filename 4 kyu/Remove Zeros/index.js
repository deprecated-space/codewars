// Source : http://www.codewars.com/kata/52aae14aa7fd03d57400058f
// Author : Han Zichi
// Date   : 2016-01-05

function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  
  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc
  
  // the correctly sorted array should be returned.
  var len = array.length
    , str = ''
    , index = 0;

  for (var i = 0; i < len; i++)
    if (array[i] === 0)
      str += '0';
    else if (array[i] === '0')
      str += '1';
    else 
      array[index++] = array[i];

  for (var i = 0, strLen = str.length; i < strLen; i++)
    if (str[i] === '0')
      array[index++] = 0;
    else 
      array[index++] = '0';

  return array;
}