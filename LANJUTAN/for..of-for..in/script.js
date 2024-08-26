// for..of

// array
// const mhs = ['sandhika', 'doby', 'erik'];

// for (let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);   
// }

// mhs.forEach(m => console.log(m))

// for (const m of mhs) {
//     console.log(m)
// }


// string
// const nama = 'sandhika';
// for (const n of nama) {
//     console.log(n)
// }

// const mhs = ['sandhika', 'doby', 'erik'];
// mhs.forEach((m, i) => { 
//     console.log(`${m} adalah mahasiswa ke ${i+1}`)
// });

// for (const [i, m] of mhs.entries()) {
//     console.log(`${m} adalah mahasiswa ke ${i+1}`)
// }


// Nodelist
// const liNama = document.querySelectorAll('.nama')

// liNama.forEach(n => console.log(n.textContent));

// for (const n of liNama) {
//     console.log(n.textContent)
// }

// arguments
// function jumlahAngka() {
    // return arguments.reduce((a,i) => a+i);
    // arguments.forEach(a => jumlah += a);
//     let jumlah = 0;
//     for (a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1,2,3,4,5));


// for..in
const mhs = {
    nama: 'sandhika',
    umur: 33,
    email: 'sandhikagalih@gmail.com'
}

for (m in mhs) { 
    console.log(mhs[m])
}