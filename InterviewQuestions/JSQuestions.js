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

console.log(strRev("malayalam"));
