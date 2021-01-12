/*
Diketahui terdapat sebuah text dengan kalimat berikut:
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.
Dari kalimat tersebut hitunglah setiap karakter (dari A sampai Z) terdapat berapa kali pengulangan, contoh output :
karakter A sebanyak 10 kali
karakter B sebanyak 3 kali
karakter Z sebanyak 2 kali
Dari kalimat tersebut pada setiap karakter geserlah sebanyak 5 karakter, contoh abc menjadi fgh
*/

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum mi eu magna fermentum, vel luctus tellus semper. Nunc dignissim eleifend ipsum, nec viverra mauris pellentesque non. Fusce auctor ex id mauris egestas, quis luctus nunc pharetra. Sed in dignissim nisi. Aliquam sed tempor urna, nec aliquam mi. Aenean eu feugiat lacus, vel dictum eros. Nulla condimentum porttitor aliquet. Vestibulum vehicula elit non arcu auctor maximus. Quisque est eros, maximus nec diam faucibus, mollis odio.';

// Hitung karakter 
function totalChar(char) {
    let letter = char.toLowerCase();
    let total = 0;
    for (let i = 0; i < text.length; i++) {
        if (letter === text[i].toLowerCase()) {
            total += 1;
        }
    }
    return total;
}
const huruf = 'abcdefghijklmnopqrstuvwxyz';
for (let i = 0; i < huruf.length; i++) {
    console.log(`Huruf ${huruf[i]} terdapat ${totalChar(huruf[i])} perulangan`);
}

// Geser karakter
function swipeChar(char) {
    let charLowerCase = char.toLowerCase();
    let letter = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i = 0; i < alphabet.length; i++) {
        if (charLowerCase === alphabet[i]) {
            if (i < 21) {
                letter = alphabet[i + 5];
            } else {
                const alphabetSisa = 'vwxyz';
                for (let j = 0; j < alphabetSisa.length; j++) {
                    if (charLowerCase === alphabetSisa[j]) {
                        letter = alphabet[j];
                    }
                }
            }
        }
    }
    return letter;
}
let newText = ''
for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
        newText += ' ';
    } else {
        newText += swipeChar(text[i]);
    }
}
console.log(swipeChar('x'));
console.log(`text setelah digeser : ${newText}`);