// calculate pi
function unfoldPiTaylor(num) {
  let sum = 0, flag = true;
  for (var i = 0; i < num; i++) {
    sum += flag ? (1 / (2 * i + 1)) : (-1 / (2 * i + 1))
    flag = !flag;
    console.info('pi', sum * 4)
  }
  return sum * 4;
}


unfoldPiTaylor(1000000000)