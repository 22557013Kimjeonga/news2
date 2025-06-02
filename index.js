// 첫 번째 페이지에서 transitionBlock div 클릭 시 애니메이션 적용
document.getElementById('transitionBlock').addEventListener('click', function() {
  // fade-out 클래스 추가하여 애니메이션 효과
  document.body.classList.add('fade-out');

  // 애니메이션이 끝난 후 두 번째 페이지로 이동
  setTimeout(function() {
    window.location.href = 'personal_page.html'; // 두 번째 페이지로 이동
  }, 1000); // 애니메이션 지속 시간 후 이동
});
