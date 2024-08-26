// Cara untuk membuat Obect pada javascript
// 1. Object Literal
// PROBLEM : tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//   nama: "Sandhika",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   },
// };

// let mahasiswa2 = {
//   nama: "Dobby",
//   energi: 12,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   },
// };

// 2. Funtion Declaration

// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`hallo ${nama}, selamat makan!`);
//   },

//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`hallo ${this.nama}, selamat bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`hallo ${this.nama},selamat tidur!`);
//   },
// };

// function Mahasiswa(nama, energi) {
//   let mahasiswa = Object.create(methodMahasiswa);
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.makan = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

//   return mahasiswa;
// }

// let sandhika = Mahasiswa("sandhika", 10);
// let dobby = Mahasiswa("dobby", 20);

// function Mahasiswa(nama, energi) {
// let mahasiswa = Object.create(methodMahasiswa);
// let mahasiswa = {}
// let this = Object.create(Mahasiswa.prototype);
// this.nama = nama;
// this.energi = energi;
//   mahasiswa.makan = methodMahasiswa.makan;
//   mahasiswa.makan = methodMahasiswa.main;
//   mahasiswa.tidur = methodMahasiswa.tidur;

// return mahasiswa;
// return this;
// }

// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `hallo ${this.nama}, selamat makan`;
// };
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `hallo ${this.nama}, selamat main`;
// };
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam * 2;
//   return `hallo ${this.nama}, selamat tidur`;
// };

// let sandhika = new Mahasiswa("sandhika", 10);

// versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  makan(porsi) {
    this.energi += porsi;
    return `hallo ${this.nama}, selamat makan`;
  }
  main(jam) {
    this.energi -= jam;
    return `hallo ${this.nama}, selamat main`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `hallo ${this.nama}, selamat tidur`;
  }
}

let sandhika = new Mahasiswa("sandhika", 10);
let dobby = new Mahasiswa("dobby", 20);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//       this.energi += porsi;
//       console.log(`hallo ${nama}, selamat makan!`);
//     };

//     this.main = function(jam) {
//       this.energi -= jam;
//       console.log(`hallo ${this.nama}, selamat bermain`);
//     }
// }

// let sandhika = new Mahasiswa('sandhika', 10)

// 4. Object.create
