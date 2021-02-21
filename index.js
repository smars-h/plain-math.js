function add(x, y) { 
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function div(x, y) {
    return x / y; 
}

function multi(x, y) {
    return x * y; 
}

function cos(x) {
    return Math.cos(x); 
}

function tan(x) {
    return Math.tan(x);
}


function abs(x) {
    return Math.abs(x); 
}


module.exports = {
    add: add,
    sub: sub,
    div: div,
    multi: multi,
    cos: cos,
    tan: tan,
    abs: abs
}