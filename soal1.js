/* 
Sebuah angka 1234567 Buatlah output :

1000000
200000
30000
4000
500
60
7  
*/

const angka = 1234567;
const angkaString = angka.toString();
let zero = '0'.repeat(angkaString.length);

for (let i = 0; i < angkaString.length; i++) {
    zero = zero.substring(0, zero.length - 1);
    console.log(angkaString[i] + zero);
}