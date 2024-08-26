// nyoba ngasal
function inputNama() {
  let daftarNama = [];
  for (let index = 0; index <= 5; index++) {
    let nama = prompt("masukkan nama anda:");
    daftarNama.push(nama);
  }
  for (let index = 0; index < daftarNama.length; index++) {
    // Membuat elemen baru
    var h1 = document.createElement("h1");

    // Membuat node teks
    var isi = document.createTextNode(daftarNama[index]);

    // Menambahkan node teks ke dalam elemen
    h1.appendChild(isi);

    // Menambahkan elemen ke dalam dokumen
    document.body.appendChild(h1);
  }
}

inputNama();
