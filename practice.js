// question 10 miss num 
let arr = [1,2,3,5];
let n = arr.length+1;
let totalSum = (n*(n+1))/2;
let arrReducer = arr.reduce((acc , val)=>acc+val,0)
let value  = totalSum-arrReducer;
console.log(value);
                                                