"use strict";
var hash = function(key, max) {
  var hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % max;
};
let HashTable = function() {
  let storage = [];
  let storageLimit = 4;

  this.print = function() {
    console.log(storage);
  };
};
