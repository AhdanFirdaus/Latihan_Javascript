// DOM Manipulation
// buat elemen baru
const pBaru = document.createElement("p");
const teksBaru = document.createTextNode("paragraf baru");
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksBaru);

// simpan pBaru di akhir Section A
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item Baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName("a")[0];

sectionA.removeChild(link);

const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksh2Baru = document.createTextNode("judul baru");

h2Baru.appendChild(teksh2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
li2.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
