var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkat = 1;

for (noAngkat; noAngkat <= jmlAngkot; noAngkat++) {
  if (noAngkat <= angkotBeroperasi) {
    console.log("Angkot No." + noAngkat + " beroperasi dengan baik");
  } else if (noAngkat === 8) {
    console.log("Angkot No." + noAngkat + " sedang lembur");
  } else {
    console.log("Angkot No." + noAngkat + " sedang tidak beroperasi");
  }
}
