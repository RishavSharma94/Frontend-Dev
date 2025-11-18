function applyOperation(numbers, operation) {
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        result.push(operation(numbers[i]));
    }
    return result;
}

function double(num) {
    return num * 2;
}

function square(num) {
    return num * num;
}

let arr = [1, 2, 3, 4];

let doubledArr = applyOperation(arr, double);
console.log("Doubled:", doubledArr);

let squaredArr = applyOperation(arr, square);
console.log("Squared:", squaredArr);
