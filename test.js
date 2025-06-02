
let isKorean = false;

function toggleLanguage() {
  const allElements = document.querySelectorAll('[data-en][data-ko]');
  allElements.forEach(el => {
    // 텍스트만 교체하고 HTML 구조는 그대로 유지
    const newContent = isKorean ? el.getAttribute('data-ko') : el.getAttribute('data-en');
    el.textContent = newContent;  // 텍스트만 교체
  });

  // 버튼 텍스트도 함께 바꿔주기
  const button = document.querySelector('.button button');
  button.textContent = isKorean ? '한국어' : 'English';

  isKorean = !isKorean;
}
