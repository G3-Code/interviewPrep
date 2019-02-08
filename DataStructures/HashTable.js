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
  let storageLimit = 10;

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

  this.remove = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

let ht = new HashTable();
ht.add("a", "person");
ht.add("b", "dog");
ht.add("c", "dino");
ht.add("d", "Penguin");
ht.print();
