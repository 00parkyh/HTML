async function myName() {
  return 'echo';
}
console.log(myName());

async function showName() {
  const name = await myName(); // Promise 객체인 myName() 함수의 실행이 끝나길 기다려라
  console.log(name);
} //이름을 출력하는 함수

console.log(showName());
