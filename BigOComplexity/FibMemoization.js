function fibMemo(n) {
  let memo = new Array(n + 1).fill(0);
  console.log(memo);
  for (let i = 0; i < n; i++) {
    console.log(`${i} -> ${fib(i, memo)}`);
  }

  function fib(n, memo) {
    if (n <= 0) return 0;
    else if (n == 1) return 1;
    else if (memo[n] > 0) return memo[n];
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
  }
}

fibMemo(5);
