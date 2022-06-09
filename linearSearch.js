// Create a array contains number unordered list of numbers from 1 to 100 randomly
const arr = [];
for (let i = 0; i < 50; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
}


// Tek tek tüm listeyi dolaşır ve istenen value indexini döndürür. O(n) = N
function checkingArr(arr, value){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(checkingArr(arr,13));
console.log(checkingArr(arr,191));