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

//Example 4
function factorial(n) {
  //base condition
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

//Ans: O(N)

//Example 5
function fib(n) {
  //base case
  if (n <= 0) return 0;
  if (n == 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
//Ans: O(2^N)

//Example 6
//Fib memoization
function fibMemo(n) {
  let memo = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    console.log(`${i} -> ${fib(n, memo)}`);
  }

  function fib(n, memo) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    else if (memo[n] > 0) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  }
}

//Ans: O(N)
