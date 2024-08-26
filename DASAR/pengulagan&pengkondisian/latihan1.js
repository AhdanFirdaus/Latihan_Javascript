//variabel gambar segitiga
var s = "";

//pengulagan pertama 
for (let i = 0; i <= 10; i++) {
    for (let j = 0; j < i; j++) {
        s += '*';// membuat tanda *
    }
    s += "\n";
}

//pengulagan kedua
for (let i = 10; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        s += "*";// membuat tanda *
    }
    s += "\n";
}

console.log(s);