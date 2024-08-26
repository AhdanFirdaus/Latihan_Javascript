// membuat fuction
function jumlahVolumeDuaKubus (a,b) {
    var volumeA;
    var volumeb;
    var total;

    volumeA = a * a * a;
    volumeb = b * b * b;

    total = volumeA + volumeb;

    return total;
}

// menjalankan function
alert(jumlahVolumeDuaKubus(8,3));
alert(jumlahVolumeDuaKubus(15,10)); // dapat di panggil atau digunakan berulang ulang

// jika ingin menampilkan bisa menggunakan console atau alert (BEBAS)