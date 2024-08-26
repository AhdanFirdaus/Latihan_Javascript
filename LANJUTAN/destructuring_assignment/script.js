// Destructing variable / assignment

// Destructing Array

// const perkenalan = ["halo", "nama", "saya", "sandhika"];

// const [salam, satu, dua, nama] = perkenalan;

// skipping items
// const [salam, , , nama] = perkenalan;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b)[(a, b)] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a,b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6];
// console.log(a);
// console.log(values);

// Destructing Object
// const mhs = {
//     nama: 'sandhika galih',
//     umur: 33
// }

// const {nama, umur} = mhs;
// console.log(nama);

// Assignment tanpa deklarasi object
// ( {nama, umur} = {
//     nama: 'sandhika galih',
//     umur: 33
// });
// console.log(nama);

// Assign ke variabel baru
// const mhs = {
//   nama: "sandhika galih",
//   umur: 33,
// };

// const { nama: n, umur: u } = mhs;
// console.log(u);

// memberikan default value
// const mhs = {
//     nama: 'sandhika galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// }  

// const {nama, umur, email = 'email@default.com'} = mhs;
// console.log(email);

// memberikan nilai defalut + assign ke variabel baru
// const mhs = {
//     nama: 'sandhika galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// }

// const {nama: n, umur: u, email: e = 'email@default.com'} = mhs;
// console.log(e);

// rest parameter
// const mhs = {
//     nama: 'sandhika galih',
//     umur: 33,
//     email: 'sandhikagalih@unpas.ac.id'
// }

// const {nama, ...values} = mhs;
// console.log(values);

// mengambil field pada object, setelah dikirm sebagai parammeter untuk function

const mhs = {
  id: 123,
  nama: "sandhika galih",
  umur: 33,
  email: "sandhikagalih@unpas.ac.id",
};

function getIdMhs({id}) {
  return id;
}


console.log(getIdMhs(mhs))
