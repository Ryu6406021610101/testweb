const array =[15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue;
    console.log(
        'accumulator: ${accumulator}, currentValur: ${currentValue}, index: ${index}, return: ${return}',
    );
    return returns;
}

array.reduce(reducer);