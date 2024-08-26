var pertanyaan = confirm("apakah mau dilanjutkan?");
var emosi = prompt("emosi anda sekarang apa: seneng, sedih, marah");

var h1 = document.createElement("h1");
h1.style.textAlign = 'center';
switch (emosi) {
  case "seneng":
    var textNode = document.createTextNode("kiww ><");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    break;
  case "sedih":
    var textNode = document.createTextNode("jangan sedih melulu");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    break;
  case "marah":
    var textNode = document.createTextNode("jangan sedih melulu");
    h1.appendChild(textNode);
    document.body.appendChild(h1);
    break;
  default:
    var textNode = document.createTextNode(
      "yang kamu masukan tidak ada di pilihan"
    );
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}