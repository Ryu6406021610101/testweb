function reverseString(value) {
    let reversedValue = "" ;

    value.split("").forEach((chars) => {
        reversedValue = chars + reversedValue ;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me")) ;