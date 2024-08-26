// Rest parameter 

// function myFunc (...myArgs) {
//   return myArgs;  // 1,2,3,4,5
// }

// function myFunc (a, b, ...myArgs) {
//   return `a = ${a} b= ${b}, myArgs = ${myArgs}`; // a = 1 b= 2, myArgs = 3,4,5'
// }  

// function myFunc() {
//   return Array.from(arguments); // [ 1, 2, 3, 4, 5 ] untuk merubah object menjadi array
// }

// function myFunc() {
//   return [...arguments] // [ 1, 2, 3, 4, 5 ] bisa juga menggunakan spread operator
// }

// console.log(myFunc(1,2,3,4,5))

// function jumlahkan (...angka) {
  // let total = 0;
  // for (const a of angka) {
  //   total += a;
  // }
  // return total; // 15

  // return angka.reduce((acc, curr) => acc + curr); //15
// }

// console.log(jumlahkan(1,2,3,4,5))


// array destructuring

// const kelompok1 = ['sandika', 'ahdan', "farrel", "rakha", "alpin"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua); //sandhika



// object distructuring

// const team = {
//   pm: 'sandhika',
//   fe1: "ahdan",
//   fe2: "rakha",
//   be: "alpin",
//   ux: "farrel",
//   devops: "rado"
// }

// const {pm, ...myTeam} = team;
// console.log(pm); // sandhika



// filtering

function filterBy (type, ...values) {
  return values.filter(v => typeof v === type);
}

console.log(filterBy('number', 1, 2, 'sandhika', false, "dody", true)); // [ 1,2 ]
console.log(filterBy('string', 1, 2, 'sandhika', false, "dody", true)); // ['sandhika', 'dody']
console.log(filterBy('boolean', 1, 2, 'sandhika', false, "dody", true)); // [ false, true ]