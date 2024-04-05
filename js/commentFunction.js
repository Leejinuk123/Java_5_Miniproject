// Firebase SDK 라이브러리 가져오기
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import {
  addDoc,
  collection,
  getDocs,
  getDoc,
  getFirestore,
  query,
  where,
  orderBy,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyA0uKRVhtA_nWErGz239LyUEbzImyz1zK8",
  authDomain: "sparta-5c4c5.firebaseapp.com",
  projectId: "sparta-5c4c5",
  storageBucket: "sparta-5c4c5.appspot.com",
  messagingSenderId: "670267606385",
  appId: "1:670267606385:web:ccd38ce10b5feb6a7ca2d0"
};

// Firebase 인스턴스 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const urlParams = new URL(location.href).searchParams;
const currentDetail = urlParams.get('detail');

/*댓글 초기화*/
// onSnapshot??????????
let docs = await getDocs(query(collection(db, "comments"), where("detail", "==", currentDetail), orderBy("createAt", "asc")));
docs.forEach((doc) => {
  let data = doc.data();

  let commentId = doc.id;
  let nickname = data['nickname'];
  let content = data['content'];

  let createAt = data['createAt'].toDate();
  let dateFormat = createAt.getFullYear() + "-" +
    ("0" + (createAt.getMonth() + 1)).slice(-2) + "-" +
    ("0" + createAt.getDate()).slice(-2) + " " +
    ("0" + createAt.getHours()).slice(-2) + ":" +
    ("0" + createAt.getMinutes()).slice(-2) + ":" +
    ("0" + createAt.getSeconds()).slice(-2);
  // 2024-04-04 17:10:06 형식

  let temp_comment = `
      <li class="comment-item">
        <input type="hidden" class="comment-id" value="${commentId}">
        <div class="comment-item-nickname">${nickname}</div>
        <div class="comment-item-content">${content}</div>
        <div class="comment-item-datetime">${dateFormat}</div>
        <div class="comment-item-delete">
          <button class="popup-button">삭제</button>
          <div class="comment-delete-popup" style="display: none">
            <div class="popup-password">
                <input type="password" class="popupDeletePassword" placeholder="비밀번호" maxlength="16">
            </div>
            <div class="popup-delete">
              <button class="popupDeleteButton">확인</button>
            </div>
            <div class="popup-cancel">
              <button class="line-box popupCancelButton" aria-label="Name">
                <span class="line-01"></span>
                <span class="line-02"></span>
              </button>
            </div>
          </div>
        </div>
      </li>
      `;
  $("#comment-items").append(temp_comment);
});

$("#commentButton").on("click", async function () {
  let nickname = $("#commentNickname").val();
  let password = $("#commentPassword").val();
  let content = $("#commentInput").val();
  let date = new Date();

  let doc = {
    "nickname": nickname,
    "password": password,
    "content": content,
    "createAt": date,
    "detail": currentDetail
  };
  await addDoc(collection(db, "comments"), doc)
    .then(() => {
      alert("저장 완료");
      window.location.reload();
    })
    .error((error) => {
      alert("저장 실패")
      console.log("댓글 저장 실패 : ", error);
    });
});

// 댓글 삭제
$(".popupDeleteButton").on("click", async function () {
  let closestList = $(this).parents("li");
  let commentId = closestList.find(".comment-id").val();
  let password = closestList.find(".popupDeletePassword").val();
  console.log("입력 값\ncommentId : " + commentId + "\npassword : " + password);

  let testDoc = await getDoc(doc(db, 'comments', commentId));
  if (password === testDoc.data().password) {
    await deleteDoc(doc(db, "comments", commentId))
      .then(function () {
        alert("삭제 완료");
        window.location.reload();
      }).catch(function (error) {
        alert("삭제 실패")
        console.log("댓글 삭제 실패 : ", error);
      });
  } else {
    alert("비밀번호 틀림");
  }
  closestList.find(".popupDeletePassword").val("");
});

// 삭제버튼을 눌렀을때
$(".popup-button").on("click", function () {
  $(".comment-delete-popup").not($(this)).css("display", "none");
  $(".popupDeletePassword").val("");
  $(this).closest(".comment-item-delete").find(".comment-delete-popup").show();
});
// X 눌렀을 때
$(".popup-cancel").on("click", function () {
  $(".popupDeletePassword").val("");
  $(this).closest(".comment-delete-popup").hide();
});
