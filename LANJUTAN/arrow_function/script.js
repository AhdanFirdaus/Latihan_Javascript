// Function Expression
// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }
// console.log(tampilNama('sandhika'));

// Arrow Function
// const tampilNama = (nama) => {
//   return `Halo, ${nama}`;
// };
// console.log(tampilNama("sandhika"));

// const tampilNama = (nama, waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama("sandhika", 'malam'));

// implisit return
// kalau parameternya satu tidak perlu pakai ()
// namun kalau lebih dari satu wajib pakai kurung
// const tampilNama = (nama) => `Halo, ${nama}`;
// console.log("Erik");
// bahkan jika satupun tidak perlu menggunakan return
// dan kurung {}

// jika tidak ada parameter wajib menggunakan ()
// const tampilNama = () => `Hello World!`;
// console.log(tampilNama());

// let mhs = ["sandhika", "dobby", "erik"];

// let jumlahHuruf = mhs.map(function (nama) {
//     return nama.length;
// })
// console.log(jumlahHuruf)

// let jumlahHuruf = mhs.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mhs.map((nama) => ({ nama: nama, jumlahHuruf: nama.length }));
// console.table(jumlahHuruf);
// agar lebih mudah di lihat gunakan method .teble
// jika ingin object berikan ({})
// karena jika langsung {} dikira return
// dan jika ingin mnegembalikan obect yang sama dengan propertynya
// nama: nama
// cukup berikan nama

// konsep this pada arrow function

// constructor function
// const Mahasiswa = function () {
//   this.nama = "sandhika";
//   this.umur = 33;
//   this.sayHello = function () {
//     console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//   };
// };

// const sandhika = new Mahasiswa();
// sandhika.sayHello();

// arrow funstion
// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = () => {
//       console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };
//   };

//   const sandhika = new Mahasiswa();
//   sandhika.sayHello();

// object literal
// const mhs1 = {
//     nama: 'sandhika',
//     umur: 33,
//     SayHello: () => {
//         console.log(`hallo nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
//     }
// }
// arrow function tidak memiliki keyword this

// const Mahasiswa = function () {
//     this.nama = "sandhika";
//     this.umur = 33;
//     this.sayHello = function () {
//       console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
//     };

//     // setInterval(function() {
//     //     console.log(this.umur++);
//     // }, 500);
//     // jika mengguakan function declaration maka this akan mencari di global
//     // namun jika menggunakan arrow function akan mencari di lexical scope
  //   setInterval(() => {
  //       console.log(this.umur++);
  //   }, 500);
  // };

  // const sandhika = new Mahasiswa();
  // sandhika.sayHello();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {  
    // satu = temp;
    // satu = dua;
    // dua = temp;
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});

