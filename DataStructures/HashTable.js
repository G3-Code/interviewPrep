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

  this.add = function(key, value) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [key, value];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] == key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (!inserted) {
        storage[index].push([key, value]);
      }
    }
  };
};
