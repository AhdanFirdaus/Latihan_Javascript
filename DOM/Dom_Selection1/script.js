// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Ahdan Firdaus";

// document.getElementsByTagName() -> HTMLCollections
const p = document.getElementsByTagName("p");

// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// document.getElementsByClassName()
// HTMLCollection
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "Ini di ubah dari javascript";
