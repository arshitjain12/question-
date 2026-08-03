// question 8 remove duplicate
 let arr = [3,2,5,4,7,9,9,3,2,5,41];
 function dublicate(arr){
    let dub = [];
    for (let i = 0; i < arr.length; i++) {
        if(!dub.includes(arr[i])){
            dub.push(arr[i])
        }
    }
    return dub
 }
 console.log(dublicate(arr));
 