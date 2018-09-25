/*! decrement_if_less_than_first v0.0.0 - MIT license */
'use strict';

var decrement_if_less_than_first = function (list) {

    for (var i = 0; i < list.length; i++)
    {
      if (list[i] < list[0])
      {
        list[i] = list[i] - 1;
      }
   }
   return list;
}

if ( typeof module !== "undefined" ) {
  module.exports = decrement_if_less_than_first;
}
