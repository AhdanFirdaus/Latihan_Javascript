function getComSelect() {
  const com = Math.random();
  if (com < 0.34) return "gajah";
  if (com >= 0.34 && com < 0.67) return "orang";
  return "semut";
}

function getResult(com, player) {
  const result = "";
  if (player == com) return "Draw";
  if (player == "gajah") return com == "orang" ? "You Win!" : "You Lose!";
  if (player == "orang") return com == "gajah" ? "You Lose!" : "You Win!";
  if (player == "semut") return com == "orang" ? "You Lose!" : "You Win!";
}

function rotate() {
  const imgComputer = document.querySelector(".img-komputer");
  const image = ["gajah", "orang", "semut"];
  let i = 0;
  //get date time saat itu
  const timeStart = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - timeStart > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + image[i++] + ".png");
    if (i == image.length) {
      i = 0;
    }
  }, 100);
}

// ! lebih efektif dengan forEach
const select = document.querySelectorAll("li img");
let win = 0;
let lose = 0;

select.forEach(function (sl) {
  sl.addEventListener("click", function () {
    const sCom = getComSelect();
    const sPlayer = sl.className;
    const result = getResult(sCom, sPlayer);

    rotate();

    // set timeout for result & score
    setTimeout(() => {
      const imgCom = document.querySelector(".img-komputer");
      imgCom.setAttribute("src", "img/" + sCom + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = result;

      // menampilkan score
      const scoreCom = document.querySelector(".score-computer");
      const scorePlayer = document.querySelector(".score-player");

      if (result == "You Win!") {
        scorePlayer.innerHTML = ++win;
      }
      if (result == "You Lose!") {
        scoreCom.innerHTML = ++lose;
      }
    }, 1000);
  });
});
