// Tagged Templates
// const nama = "sandhika galih";
// const umur = 33;

// function coba(strings, ...values) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //     result += `${str}${values[i] || ''}`
//   // });
//   // return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }

// const str = coba`halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = "sandhika galih";
const umur = 33;
const email = 'sandhikagalih@gmail.com'

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) => `${result}${str}<span class ="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`halo, nama saya ${nama}, saya ${umur} tahun, saya adalah : ${email}.`;

document.body.innerHTML = str;