function callBack () {
    console.log('Timeout Completed');
}

console.log('Start')
setTimeout(callBack,3000) ; //wait 3 second
console.log('End')