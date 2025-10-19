window.onload = function () {
  // const header1 = document.querySelectorAll('h1');
  const header = this.document.getElementById('header');

  header.innerHTML = '<i> i 태그 입니다.</i><br/>';
  header.innerHTML += '&lt;i&gt;i 태그입니다. &lt;/i&gt;';
  header.textContent = '<i>i 태그입니다.';
};

// innerHTML 과 textContent의 차이점
// innerHTML => HTML 태그를 해석하여 렌더링
// textContent => HTML 태그를 일반 텍스트로 취급
// 보안문제때문에 innerHTML은 잘 사용하지 않는다.
// 하지만 연습을 위해 조금 사용해보겠다.
