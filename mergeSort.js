// Merging arrays

// Method 1:
function mergeArrays(arr1,arr2){
    let result = [];
    let i = 0;
    let j =0;

    while(i < arr1.length && j < arr2.length){
        if( arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        } else{
            result.push(arr2[j]);
            j++;
        }
        }

        while(i < arr1.length){
            result.push(arr1[i]);
            i++;
        }

        while(j < arr2.length){
            result.push(arr2[j]);
            j++;
        }

        return result;
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}



// Method 2: /////////////////////////////////////////////////////////////
const merge = (arr1, arr2) => {
    let sorted = [];
  
    while (arr1.length && arr2.length) {
      if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
      else sorted.push(arr2.shift());
    };
  
    return sorted.concat(arr1.slice().concat(arr2.slice()));
  };
  

function mergeSort2(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),
        left = mergeSort2(arr.slice(0, mid)),
        right = mergeSort2(arr.slice(mid));
  
    return merge(left, right); 
  };
  




  // test

console.log(mergeArrays([1,3,5],[2,4,6]))
console.log(merge([2, 5, 10, 57], [9, 12, 13]));