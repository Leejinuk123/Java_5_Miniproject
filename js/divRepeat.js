// 각 .card 요소에 이미지와 이름, 소개 추가하는 모듈
let createCardImg = document.querySelectorAll('.card');
const testImg = "https://3.bp.blogspot.com/-fRPuZTBN2rE/TodGV8UaVHI/AAAAAAAAO_o/G2xJUAZuawQ/s1600/pingu.jpg";
const nameIntro = [["김민규", "자기소개"], ["이진욱", "자기소개"], ["주장현", "자기소개"], ["원지연", "자기소개"]];

createCardImg.forEach(function (item, index) {
  // 각 .card 요소에 들어갈 내용
  var content = `
    <div class="card-img">
      <img src="${testImg}" alt="..." width="200px" height="200px">
    </div>
    <div>
      <h5>${nameIntro[index][0]}</h5>
      <p>${nameIntro[index][1]}</p>
    </div>`;
  item.innerHTML = content;
});
//<div class="card-img">
//  <img src="https://3.bp.blogspot.com/-fRPuZTBN2rE/TodGV8UaVHI/AAAAAAAAO_o/G2xJUAZuawQ/s1600/pingu.jpg" alt="..." width="200px" height="200px">
//</div>
//<div>
//  <h5>김민규</h5>
//  <p>자기 소개</p>
//</div>
