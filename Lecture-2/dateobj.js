//Date function return milliseconds that have elapsed
//since midnight on January 1, 1970 , UTC
//this example takes 2 seconds to run
const start = Date.now() ;

console.log('starting timer....') ;
//expected output : starting timer...

setTimeout(() => {
    const millis = Date.now() - start ;

    console.log(`seconds elapesd = ${Math.floor(millis / 1000)}` );
    //expected output : seconds elaped = 2
} , 2000) ;