/*
Buatlah algoritma untuk tebak angka dengan aturan sebagai berikut:

Telah disiapkan sebuah angka random antara 1 hingga 100, contoh 47
program akan mencari angka tersebut dan menyebutkan berapa langkah yang dibutuhkan untuk mencari angka tersebut
*/

const randomInt = Math.floor(Math.random() * 100);
console.log(`nilai random yang dipiilih : ${randomInt}`);

// Tebak angka
let step = 0;
let randomChoice = Math.floor(Math.random() * 100);
console.log(`pilihan pertama program ${randomChoice}`);
do {
    step++;
    randomChoice = Math.floor(Math.random() * 100);
} while (randomChoice !== randomInt);
console.log(`program mencari angka sebanyak ${step} langkah`);