function add(a, b){
    return a + b; 
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function increment(n){
    return ++n;
}

function decrement(n){
    return --n;
}


function makeInt(string){
    if(isNaN(string)){
        return NaN;
    }
    else{
        return parseInt(string, 10);
    }
}

function preserveDecimal(string){
    if(isNaN(string)){
        return NaN;
    }
    else{
        return parseFloat(string);
    }
}


