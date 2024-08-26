// Manipulasi array 
// Menggunakan cara manual

// 1. Menambah isi array 

// var arr = ["a", 1, true];
// arr [0] = "ahdan";
// arr [1] = "alpin";
// arr [2] = "rakha";
// arr [3] = "farrel";
// arr [4] = "andhika";

// console.log(arr);


// 2. Menghapus array

// var arr = ["ahdan", "alpin", "rakha", "farrel", "andhika"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan isi array 

// var arr = ["ahdan", "alpin", "rakha", "farrel", "andhika"];

// for (var i = 0; i < arr.length; i++) {
//     console.log("Mahasiswa ke- " + (i+1) + " adalah: " + arr[i]);
// }








// Method pada array 

// 1. join
// var arr = ["ahdan", "alpin", "rakha", "farrel", "andhika"];
// console.log(arr.join(" - "));

// 2. push & pop
// arr.push('andhika');
// arr.pop();
// arr.pop();
// console.log(arr.join(" - "));

// 3. unshift & shift
// arr.unshift("andhika");
// arr.shift();
// console.log(arr.join(" - "));

// 4. splice
// splice (indexAwal, mauDihapusBerapa, elemanBaru1, elemenBaru2, ...)
// arr.splice(1,0, "andhika");  
// console.log(arr.join(" - "));

// 5. slice
// slice(awal, akhir)
// var arr2 = arr.slice(1,4);
// console.log(arr.join(" - "));
// console.log(arr2.join(" - "));

// 6. forEach 
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ["ahdan", "alpin", "rakha", "farrel", "andhika"];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e){
//     console.log(e);
// });

// nama.forEach(function(e, i){
//     console.log('Mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })



// 7. map 
// var angka = [1,3,4,2,9,5,6,8];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });

// console.log(angka2.join(" - "));

// 8. sort 
// var angka = [1,3,10,4,2,9,5,20,6,8];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(" - "));

// 9. filter & find
var angka = [1,3,10,4,2,9,5,20,6,8];

// var angka2 = angka.filter(function(x) {
//     return x < 5;
// });

// console.log(angka2.join(" - "));

var angka2 = angka.find(function(x){
    return x > 5;
});

console.log(angka2);














