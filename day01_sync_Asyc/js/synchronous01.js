function sleep(func, delay) {
  const delayUntill = Date.now() + delay;

  // delay 시간동안 반복문 실행 작업
  while (Date.now() < delayUntill);

  // 전달한 func 함수 delay 시간 이후 호출
  func();
}

function foo() {
  console.log('foo');
}

function bar() {
  console.log('bar');
}
