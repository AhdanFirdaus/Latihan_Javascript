// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama); // jika kita cari di console maka akan eror

// console.log(nama);
// var nama = 'sandhika';
// sekarang malah undifined

// var nama = 'sandhika';
// console.log(nama);
// sekarang akan muncul sandhika

// itu terjadi karena ada creation phase pada Global Context
// jika ada var contoh nama var = undifined
// jika ada function contoh nama function = fn() , nama function nya saja
// konsep ini disebut hoisting
// window = global object
// this = window

// execution phase

// console.log(sayHello); // jika tanpa sayHello() maka akan eror karena tidak menjalankan function nya

// var nama = "sandhika";
// var umur = 33;

// console.log(sayHello()); // kurung () akan menjalankan functionnya

// function sayHello() {
//   console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
// }

// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting (lokal)

// var nama = "Sandhika Galih";
// var username = "@sandhikagalih";

// function cetakURL(username) {
//   var instagramURL = "http://instagram.com/";
//   return instagramURL + username;
// }

// console.log(cetakURL(username));

function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }

    c();
  }

  b();
}

a();
