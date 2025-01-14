function promiseTimeout(ms) {
    return new Promise((resolve , reject)  => {
        setTimeout(resolve , ms);
    });
}

console.log('Start');
promiseTimeout(2000)
    .then(()  => {
        console.log("Done!!") ;
    })
    .catch(() => {
        console.log("Error!");
    });
console.log('End');