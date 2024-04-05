// 각 .card 요소에 이미지와 이름, 소개 추가하는 모듈
let createCardImg = document.querySelectorAll('.card');
const cardData = [
  {
    "name": "김민규",
    "intro": "자기소개",
    "img": "https://3.bp.blogspot.com/-fRPuZTBN2rE/TodGV8UaVHI/AAAAAAAAO_o/G2xJUAZuawQ/s1600/pingu.jpg"
  },
  {
    "name": "이진욱",
    "intro": "자기소개",
    "img": "https://3.bp.blogspot.com/-fRPuZTBN2rE/TodGV8UaVHI/AAAAAAAAO_o/G2xJUAZuawQ/s1600/pingu.jpg"
  },
  {
    "name": "주장현",
    "intro": "하루에 국밥 네끼<br> 먹는거 좋아하는 소개",
    "img": "https://i.ytimg.com/vi/euMU4VK8cQ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNWv0UceagUgZa5WpP419uMVUf6A"
  },
  {
    "name": "원지연",
    "intro": "자기소개",
    "img": "https://3.bp.blogspot.com/-fRPuZTBN2rE/TodGV8UaVHI/AAAAAAAAO_o/G2xJUAZuawQ/s1600/pingu.jpg"
  }
];

createCardImg.forEach(function (item, index) {
  // 각 .card 요소에 들어갈 내용
  var content = `
    <div class="card-img">
      <img src="${cardData[index].img}" alt="..." width="200px" height="200px">
    </div>
    <div>
      <h5>${cardData[index].name}</h5>
      <p>${cardData[index].intro}</p>
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
