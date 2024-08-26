const judul = document.getElementById("judul");
judul.style.color = "red";

const li = document.getElementsByTagName("li");
li[2].style.fontSize = "20px";
li[3].innerHTML = "hallo kau menggunakan inner html";

const p = document.getElementsByTagName("p");

// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "yellow";
// }

const li4 = document.querySelector("section#b li");

li4.style.color = "lightblue";

const a = document.querySelector("section#a a");
a.setAttribute("href", "#home");

const secA = document.getElementById("a");
const p2 = secA.getElementsByTagName("p")[0];
p2.style.backgroundColor = "orange";

const secC = document.querySelector("section#c");
const anchor = secC.getElementsByTagName("a")[0];
const hrefValue = anchor.getAttribute("href");

// jika ingin mengambil variabel jangan pakai "" karena akan dianggap stings
console.log(hrefValue);

anchor.removeAttribute("href");

// classList
const p5 = secC.querySelector("p");
console.log(p5.classList.replace("satu", "tiga"));

// dom manipulatin 2

// buat element baru
const sBaru = document.createElement("strong");
const sText = document.createTextNode(
  "ini teks di buat menggunakan manipulasi node atau sampul dari dom tree"
);
// simpan tulisan ke dalam paragraf
sBaru.appendChild(sText);
// simpan sBaru di secA bagian bawah
secA.appendChild(sBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("ini menggunakan insert before");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

const secB = document.querySelector("section#b");
const a2 = secB.getElementsByTagName("a")[0];
// untuk menghapus tag anchor pada sectionb
secB.removeChild(a2);

const liC = secC.querySelector("li");

const h2Baru = document.createElement("h2");
const txtH2 = document.createTextNode("judul baru");

h2Baru.appendChild(txtH2);

secC.replaceChild(h2Baru, liC);

const secD = document.querySelector("section#d");
const p1 = secD.querySelector(".p1");

// p1.onclick = function() {
//   p1.style.color = 'red';
// }

// menggunakan event listener
p1.addEventListener("mouseenter", function () {
  p1.style.backgroundColor = "orange";
});

p1.addEventListener("mouseleave", function () {
  p1.style.backgroundColor = "red";
});
