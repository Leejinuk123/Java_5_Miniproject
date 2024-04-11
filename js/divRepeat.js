// 각 .card 요소에 이미지와 이름, 소개 추가하는 모듈
let createCardImg = document.querySelectorAll('.card');
const cardData = [
  {
    "name": "김민규",
    "intro": "활동적이고 삶을 재밌게 살아봐요",
    "img": "https://firebasestorage.googleapis.com/v0/b/sparta-5c4c5.appspot.com/o/1_profile.jpg?alt=media&token=49fe78ba-1c93-4656-be9f-ca8bfcdb3f4d"
  },
  {
    "name": "이진욱",
    "intro": "25살 코딩하는 남자",
    "img": "https://firebasestorage.googleapis.com/v0/b/sparta-5c4c5.appspot.com/o/3_profile.jpg?alt=media&token=f65467dd-8867-4f84-9b6c-f5a9d61c3ff7"
  },
  {
    "name": "주장현",
    "intro": "하루에 국밥 네끼<br> 먹는거 좋아하는 소개",
    "img": "https://i.ytimg.com/vi/euMU4VK8cQ4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBNWv0UceagUgZa5WpP419uMVUf6A"
  },
  {
    "name": "원지연",
    "intro": "펩시 제로 라임 최고",
    "img": "https://firebasestorage.googleapis.com/v0/b/sparta-5c4c5.appspot.com/o/4_profile.jpg?alt=media&token=141ad445-aae8-4378-a913-2d3443da6d01"
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
