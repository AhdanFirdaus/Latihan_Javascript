// function init() {
//     // let nama = 'Sandhika';
//     return function (nama) {
//         console.log(nama);
//     }
//     // tampilNama();
// }

// // init();
// let panggilnama = init();
// panggilnama('sandhika');
// panggilnama('galih');

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//   };
// }

// let selamatpagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// // selamatpagi('Sandhika');
// // selamatMalam('Galih');

// console.dir(selamatMalam("sandhika"));

// // ini disebut Factory Function karena membuat function sesuai function yang lain

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

// let a = add(); // untuk mempersingkat tidak perlu menggunakan ini

// counter = 10;
// agar tidak terganggu atau menghoisting tidak perlu menggunakan ini
// solusinya menggunakan closure

// console.log(a());
console.log(add());
console.log(add());
console.log(add());