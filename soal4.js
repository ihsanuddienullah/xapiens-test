/*
Buatlah algoritma untuk tebak angka dengan aturan sebagai berikut:

Telah disiapkan sebuah angka random antara 1 hingga 100, contoh 47
program akan mencari angka tersebut dan menyebutkan berapa langkah yang dibutuhkan untuk mencari angka tersebut
*/

const randomInt = Math.floor(Math.random() * 100);
console.log(randomInt);
let arr = [];
for (let i = 0; i <= 100; i++) {
    arr.push(i);
}

// Tebak angka
let step = 0;
let randomChoice = Math.floor(Math.random() * 100);
console.log(randomChoice);
do {
    step++
} while (randomChoice !== randomInt);
console.log(step);