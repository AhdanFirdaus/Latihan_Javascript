// Spread Operator
// memecah iterables menjadi single element 

// const mhs = ['sandhika', 'dobby', 'erik']
// console.log(mhs[0])

// menggabungkan 2 array 
// const mhs = ['sandhika', 'dobby', 'erik']
// const dosen = ['ade', 'hendra', 'wanda']
// const orang = [...mhs, 'aji',...dosen];
// // const orang = mhs.concat(dosen)
// // const orang = [mhs, dosen]
// console.log(orang)


// meng-copy array 
// const mhs = ['sandhika', 'dobby', 'erik']
// const mhs1 = [...mhs];
// mhs1[0] = 'fajar';
// console.log(mhs)


// const liMhs = document.querySelectorAll('li');
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);  
// }
// console.log(mhs);
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs)


const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
nama.innerHTML = huruf;