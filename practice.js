// largest second
let arr = [3,2,5,4,6,98,75,56,44]
function largestSecond (arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]>largest){
            secondLargest = largest
            largest = arr[i]
        }else if (  arr[i]>secondLargest && arr[i]!==largest){
            secondLargest = arr[i];
        }
        
    }
    return secondLargest;
}
console.log(largestSecond(arr));
