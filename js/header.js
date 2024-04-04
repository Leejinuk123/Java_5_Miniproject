fetch('header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header').innerHTML = data;
  })
  .catch(error => {
    console.error('헤더 가져오기 실패:', error);
  });
//header.html 가져와서 붙이기.
