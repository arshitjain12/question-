// find min number
let arr = [5,6,9,2,8];
function min(arr){
         let min = arr[0] 
    for (let i = 0; i < arr.length; i++) {

        if (arr[i]>min) {
            min = arr[i]
        }
    }
    return min
     
}
  console.log(min(arr));
//   ...
let arr = [5,6,9,2,8];
 let max = Math.max(...arr)
 console.log(max);
 