


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDtxNslFizrxcdh0g4iTnZeyk7KJaHkN90",
    authDomain: "devmypage-681ee.firebaseapp.com",
    databaseURL: "https://devmypage-681ee-default-rtdb.firebaseio.com",
    projectId: "devmypage-681ee",
    storageBucket: "devmypage-681ee.appspot.com",
    messagingSenderId: "939106238125",
    appId: "1:939106238125:web:dc9c7879ccbd194d7a1024"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


   //firebaseのデーターベース（保存させる場所）
   const newPostRef = firebase.database().ref();

    

    // 送信ボタンをクリックされたら次の処理をする
    $("#send").on("click", function () {
        console.log(1);

    
    let getHotelName = $("#hotel").val();
    let getLink = $("#link").val();
    // let getRate = $("#rate").val();
    let getRate = score.val();
    
    // if (hotelName === 0){
    //     alert("入力されていません");
    //     return;
    // }
    //データを登録でObjectで送る
    newPostRef.push({
        hotelname:getHotelName, //ホテル名
        link:getLink, //リンク
        comment: $("#comment").val(), //感想
        rate:getRate //レート
      })
      
      $("#hotel").val("");//空にする
      $("#link").val(""); //空にする
      $("#comment").val(""); //空にする
      $("#rate").val(""); //空にする

});
   
// 受信処理
newPostRef.on("child_added", function (data) {
      let v = data.val(); //ここに保存されたデータが全て入ってくる
      // let k = data.key; //今回は無視

      // console.log(v);

      //テンプレートリテラルを利用
      let str = `<p>${v.hotelname}<br>${v.link}<br>${v.comment}<br>${v.rate}<br></p>`;

      $("#output").prepend(str);

    })


    //enter keyを押したら送信処理をする

    $("#text").on("keydown", function (e) {
      //eはeventの省略　　何かを実行してそこで何かをしたい時に使う
      console.log(e,'eventデータの塊')

      if(e.keyCode ===13){
        //送信処理を実行する

        newPostRef.push({
        hotelname:getHotelName, //ホテル名
        link:getLink, //リンク
        comment: $("#comment").val(), //感想
        rate:getRate //レート
      })
      
      $("#hotel").val("");//空にする
      $("#link").val(""); //空にする
      $("#comment").val(""); //空にする
      $("#rate").val(""); //空にする
      }

    })



// map

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoibmlldmVoIiwiYSI6ImNrcDhtamVtdTA5d20ybnBuOWNwZXAyNXYifQ._Tfqvlq9wqxhlvanhBh1Hw'
}).addTo(mymap);

// star rating

// $(function(){
//     $('#rate').raty();
   
//   });

// var score = $(function(){
//     $('#rate').raty();
   
// });



let score =
$(function(){
    $("#rate").raty('score');
    console.log(score);
});




    