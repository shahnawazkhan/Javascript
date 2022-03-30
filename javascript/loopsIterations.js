// level {1/2/3}
/* 
Level 2
*/
// 1 1 2 3 5 8

function fibonacci(num) {
  let fibo = 0;
  let prev = 1;
  let next = 0;
  for (let i = 1; i <= num; i++) {
    fibo = prev + next;
    prev = next;
    next = fibo;
    console.log(fibo);
  }
}
