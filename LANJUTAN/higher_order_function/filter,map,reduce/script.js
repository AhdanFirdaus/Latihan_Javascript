const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);

// filter
// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);

// map
// kalikan semua angka dengan 2
// const newAngka = angka.map((a) => a * 2);
// console.log(newAngka);

// reduce
// jumlahkan seluruh elemen pada array
// reduce memliki 2 argument makanya menggunakan () lagi
// nilai awal + -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
// const newAngka = angka.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   5
// );
// console.log(newAngka);
// nilai awal secara default adalah 0

// method chaining
// mencari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka
  .filter((a) => a > 5) // 8,9,9
  .map((a) => a * 3) // 24,27, 27
  .map((a) => a / 2)
  .reduce((acc, cur) => acc + cur); // 78
console.log(hasil); // 39
