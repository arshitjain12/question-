	// rotation by k value 
    let arr = [1,2,3,5,9,7,6];
	let rotation = (arr,k)=>{
     k = k%arr.length;
    for (let i = 0; i <k; i++) {
       let last = arr.pop();
       arr.unshift(last);        
    } return arr;
} 
console.log(rotation(arr,3))