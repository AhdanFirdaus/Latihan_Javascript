// membuat object
// object literal
var mhs1 = {
    nama : "Muhammad Ahdan Firdaus",
    nrp : "043040023",
    email : "muhammadahdanf1@gmail.com",
    jurusan : "Pengembang erangkat Lunak dan Gim"
}

var mhs2 = {
    nama : "Rakha Fausat Adinarta Raharja",
    nrp : "043040023",
    email : "rakafd@gmail.com",
    jurusan : "Teknik Informatika"
}

// function declaration
function buatObejctMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObejctMahasiswa('Nofariza', '023040123', 'nofa@yahoo.com', 'Teknik Pangan');

// constructor
function Mahasiswa (nama, nrp, email, jurusan) {
    // var this = {}
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erik', '0120220030', 'erik@icloud.com', 'Teknik Mesin');