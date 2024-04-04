// IntersectionObserver를 사용하여 요소가 화면에 나타날 때 효과를 추가하는 모듈
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 화면에 나타나면 opacity를 1로 변경
      entry.target.style.opacity = 1;
    } else {
      // 화면에서 사라지면 opacity를 0으로 변경
      entry.target.style.opacity = 0;
    }
  });
});

let li = document.querySelectorAll("li");
li.forEach((item) => {
  // 각 li 요소를 observer로 관찰
  observer.observe(item);
});

// 각 .card-img 요소에 마우스 이벤트 리스너를 추가하는 모듈
let cardImgs = document.querySelectorAll('.card-img');
cardImgs.forEach((img) => {
  img.addEventListener('mousemove', function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    var rotateY = 1 / -5 * x + 20;
    var rotateX = 4 / 30 * y - 20;

    // 마우스 이동에 따라 요소를 회전
    img.style.transform = `perspective(350px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  });

  img.addEventListener('mouseleave', function () {
    // 마우스가 요소를 벗어나면 회전 효과 제거
    img.style.transform = '';
  });
});
