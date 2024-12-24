let arr1 = ["A" , true , 2];

//Push and opo
console.log("\n******Push and pop ******\n") ; 
console.log(arr1.push("new value")) ;
console.log(arr1) ;
console.log(arr1.pop()) ; //Remove last value
console.log(arr1) ;

//shift and unshift
console.log("\n***** Shift and unshift******\n") ;
console.log(arr1.unshift("new value")) ;
console.log(arr1) ; 
console.log(arr1.shift()) //Remove first value
console.log(arr1) ;

//Concat
console.log("\n******Concat*******") ; 
let arr2 = ["B" , false ,3] ;
let newArr = arr1.concat(arr2) ; 
let newArr2 = arr2.conxat([1,2,3] ); 
console.log(newArr);
console.log(newArr2);