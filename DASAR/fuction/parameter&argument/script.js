function tambah (a,b) { // a dan b adalah parameter
    return a + b;
}

function kali (a,b) {
    return a * b;
}

var hasil = kali (tambah(1,2), tambah (3,4)); // argument yang menggunakan function

console.log(hasil); 