var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkat = 1;

for (noAngkat; noAngkat <= jmlAngkot; noAngkat++) {
  if (noAngkat <= angkotBeroperasi) {
    console.log("Angkot No." + noAngkat + " beroperasi dengan baik");
  } else {
    console.log("Angkot No." + noAngkat + " sedang tidak beroperasi");
  }
}
