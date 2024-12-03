function reverseString(value) {
    let reversedValue = "" ;

    value.split("").forEach((chars) => {
        reversedValue = char + reversedValue ;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me")) ;