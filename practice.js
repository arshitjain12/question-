//  question 15 find all zero 
 function zero(arr){
    let poss = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]!==0){
            arr[poss] =arr[i]
            poss++
        };
        
    }
    while (poss<arr.length){
            arr[poss] = 0
            poss++
    }
    return arr
 }
  console.log(zero([1,2,0,6,0,4,0,2,0]))