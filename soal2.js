/*
Diketahui ada array dengan data sebagai berikut :
{1,2,33,44,55,33,44,22,44,33,2,77,66,1,2,3,4,5,6,7,89,3,3,8,9,75,4,3,2,2,1,3}
Bagi data tersebut menjadi 3 kelompok
Tampilkan data setiap kelompok secara terurut dari besar ke kecil
Hitung total setiap kelompok data,
Hitung rata rata setiap kelompok data,
Carilah nilai tertinggi dan terendah setiap kelompok data 
*/

const arr = [1, 2, 33, 44, 55, 33, 44, 22, 44, 33, 2, 77, 66, 1, 2, 3, 4, 5, 6, 7, 89, 3, 3, 8, 9, 75, 4, 3, 2, 2, 1, 3];
const sizegrup = arr.length / 3;
let grup = [];

// membagi data menjadi 3 kelompok
for (let i = 0; i < arr.length; i++) {
    grup[i] = arr.splice(0, sizegrup);
}
console.log(grup[0]);
console.log(grup[1]);
console.log(grup[2]);

// fungsi mengurutkan dari besar ke kecil
function sortGrup(array) {
    let swipe;
    let n = array.length - 1;
    let x = array;
    do {
        swipe = false;
        for (let i = 0; i < n; i++) {
            if (x[i] < x[i + 1]) {
                let temp = x[i];
                x[i] = x[i + 1];
                x[i + 1] = temp;
                swipe = true;
            }
        }
        n--;
    } while (swipe);
    return x;
}
console.log(sortGrup(grup[0]));
console.log(sortGrup(grup[1]));
console.log(sortGrup(grup[2]));

// fungsi total data
function sumGrup(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sumGrup(grup[0]));
console.log(sumGrup(grup[1]));
console.log(sumGrup(grup[2]));

// fungsi rata-rata
function avgGrup(array) {
    let sum = sumGrup(array);
    return sum / array.length;
}
console.log(avgGrup(grup[0]));
console.log(avgGrup(grup[1]));
console.log(avgGrup(grup[2]));

// Mencari nilai max dan min 
function minmaxGrup(array) {
    const sort = sortGrup(array);
    const max = sort[0];
    const min = sort[sort.length - 1];
    console.log(`Nilai tertinggi : ${max}, nilai terendah : ${min}`);
}
minmaxGrup(grup[0]);
minmaxGrup(grup[1]);
minmaxGrup(grup[2]);
