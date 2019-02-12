function foo1() {
  return {
    bar: "hello"
  };
}
function foo2() {
  return;
  {
    bar: "hello";
  }
}

// console.log("foo1 returns");
// console.log(foo1());
// console.log("foo2 returns");
// console.log(foo2());

function strRev(val) {
  val = val.replace(/\W/g, "").toLowerCase();
  return (
    val ===
    val
      .split("")
      .reverse()
      .join("")
  );
}

// console.log(strRev("malayalam"));

function sum(x) {
  console.log(arguments.length);
  return function(y) {
    console.log("for y" + arguments.length);
    return x + y;
  };
}

// console.log(sum(1, 2, 3, 4)(2));

var d = {};
["zebra", "horses"].forEach(function(k) {
  d[k] = undefined;
});
// console.log(d);

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
