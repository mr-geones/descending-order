function descendingOrder(n){
  let arr = Array.from(String(n), Number).sort().reverse();
  n = parseInt(arr.join(''));
  return n;
}
