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

//Example 2
function example2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + "," + arr[j]);
    }
  }
}

//Ans: O(N^2)

//Example 3
function primeNumber(n) {
  for (let x = 2; x * x <= n; x++) {
    if (n % x == 0) {
      return false;
    }
  }
  return true;
}

//Ans: O(SQRT(N))
