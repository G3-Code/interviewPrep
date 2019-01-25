//Example 1
function example1(arr) {
  let sum = 0;
  let prod = 1;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    prod = prod * arr[i];
  }

  console.log(sum + "," + prod);
}

//Ans: O(N)
