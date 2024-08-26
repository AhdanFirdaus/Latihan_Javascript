// 1. HTML Fragments
// const mhs = {
//   nama: "sandhika galih",
//   umur: 33,
//   nrp: "8720128",
//   email: "sandhikagalih@gmail.com",
// };

// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// 2. Looping
// const mhs = [
//     {
//         nama: 'sandhika galih',
//         email: 'sandhika@gmail.com'
//     },
//     {
//         nama: 'Dobby',
//         email: 'dobby@gmail.com'
//     },
//     {
//         nama: 'Erik',
//         email: 'erik@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul`).join('')}
// </div>`;

// 3. conditionals
// ternary
// const lagu = {
//   judul: "tetap dalam jiwa",
//   penyanyi: "isyana sarasvati",
//   feat: "rayi putra"
// };

// const el = `<div class="lagu">
// <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang

const mhs = {
  nama: "sandhika galih",
  semester: 5,
  mataKuliah: [
    "rekayasa web",
    "analisis dan perancangan sistem informasi",
    "pemrograman sistem interaktif",
    "perancangan sistem berorientasi object",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}</ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class ="semester"> semester: ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`;

document.body.innerHTML = el;
