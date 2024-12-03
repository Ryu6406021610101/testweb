function findPerimeter(length, width) {
    return (length + width) * 2;
}

console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));

function equation(text) {
    text = splitWord(text);
    text = text.split("");
    let sum = [];
    
    while(text.length > 0) {
        for(operator of ['*', '/', '+', '-']) {
            let index = text.indexOf(operator);
            if(index >= 0) {
                let a = parseInt(text[index-1]);
                let b = parseInt(text[index+1]);
                switch(operator) {
                    case '*':
                        text.length > 1 ?
                        !isNaN(a) ?
                        sum.push(a * b) : sum.push(sum.pop() * b)
                        : sum.push(sum.pop() * sum.pop());
                        break;
                    case '/':
                        text.length > 1 ?
                        !isNaN(a) ?
                        sum.push(a / b) : sum.push(sum.pop() / b)
                        : sum.push(sum.pop() / sum.pop());
                        break;
                    case '+':
                        text.length > 1 ?
                        !isNaN(a) ?
                        sum.push(a + b) : sum.push((sum.pop() + b))
                        : sum.push(sum.pop() + sum.pop());
                        break;
                    case '-':
                        text.length > 1 ?
                        !isNaN(a) ?
                        sum.push(a - b) : sum.push(sum.pop() - b)
                        : sum.push(sum.pop() - sum.pop());
                        break;
                }
                text.splice(index+1 , 1);
                text.splice(index , 1);
                !isNaN(a) && text.splice(index-1 , 1);
                break;
            }
        }
    }

    return sum[0];
}

function convertToNumber(text) {
    switch(text) {
        case 'one':
            return 1;
        case 'two':
            return 2;
        case 'three':
            return 3;
        case 'four':
            return 4;
        case 'five':
            return 5;
        case 'six':
            return 6;
        case 'seven':
            return 7;
        case 'eight':
            return 8;
        case 'nine':
            return 9;
        default:
            return 0;
    }
}

function splitWord(text) {
    text = text.toLowerCase();
    for(word of ['one', 'two', 'three', 'four', 'five',' six', 'seven', 'eight', 'nine', 'zero']) {
        text = text.replaceAll(word, convertToNumber(word));
    }
    return text;
}

console.log(equation("one+one"));
console.log(equation("seven*four-two"));
console.log(equation("one+one+one+one+one"));