// for (let i = 0; i < 10; i++) {
//   console.log(`ini adalah ke ${i+1}`)
// }

// var angka = prompt(`masukan angka:`);
// if (angka % 2 === 0) {
//   alert(`ini adlaah genap`)
// } else {
//   alert(`ini adalah ganjil`)
// }

// foreach in array
// let nums = [20, 30, 40, 50];
// nums.forEach((n, i, nums) => {
//   console.log(n*2)
// });

// let nums2 = nums.map((e, i, nums) => {
//   console.log(e, i , nums)
// });

// slice
// let nama = ["firdaus", "alpin", "rakha", "farrel", "andhika"];
// let nama2 = nama.slice(1,4);
// console.log(nama2);



// char at 
// let random = "ahdan".charAt(2);
// console.log(random)

// function 

// function penjumlahankubus(a,b) {
//   return a * a * a + b * b * b;
// }

// console.log(penjumlahankubus(2,3))


//  variable scope
// var a = 1;

// function test() {
//   var a = 2;
//   console.log(a);
// }

// test();



// Object

// var mhs = {
//   nama : "sandhika halih",
//   umur : 31,
//   ips : [3.00, 2.50, 3.20],
//   alamat : {
//     jalan : "jl. Ronggowarsito",
//     kota : "semarang",
//     provonsi : "jawa tengah"
//   }
// };

// function mahasiswa(nama, email, no) {
//   var mhs = {};
//   mhs.nama = nama;
//   mhs.email = email;
//   mhs.no = no;
//   return mhs;
// }
// var mhs1 = mahasiswa('sandhika galih', "@gmail.com", "08912312");


// function mahasiswa2(nama, email, no) {
//   this.nama = nama;
// }
// var mhs2 = new mahasiswa2("sandhika");



// belajar closure

// function ucapkan (waktu) {
//   return function (nama) {
//     console.log(`selamat ${nama} kamu sudah tiba pada ${waktu}`);
//   }
// }

// let pagi = ucapkan("pagi");
// console.dir(pagi("sandhika"))






// belajar DOM selection

// const headline =  document.querySelector('h1');
// headline.style.backgroundColor = 'yellow';

// const list = document.querySelector('ul li:nth-child(3)');
// list.style.textAlign = 'center';



// belajar DOM manipulation

// membuat element
// const pbaru = document.createElement('p');
// const pbarutxt = document.createTextNode('ini adalah percobaan');
// pbaru.appendChild(pbarutxt);

// meletakkan element ke section a 
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pbaru);



// menggunakan get attribute

// let pargarf = document.querySelector('section#c li');
// let text = pargarf.getAttribute('class');
// document.getElementById('demo').innerHTML = text;



// belajar DOM event 

// const p1 = document.getElementById('par');
// function ubahwarna() {
//   p1.style.backgroundColor = 'red';
// } 
// p1.onclick = ubahwarna;

// const coba = document.querySelector('section#a p');

// coba.addEventListener('click', function() {
//   const ul = document.querySelector('section#a ul');
//   const libaru = document.createElement('li');
//   const litxt = document.createTextNode('hallo dek');

//   libaru.appendChild(litxt);
//   ul.appendChild(libaru);
// });



