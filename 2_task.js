function problem(x) {
    if (typeof x == "string") {
        return "Error";
    } else {
        x = x * 50 + 6;
        return x;
    }
}

function problem2(x) {
    return typeof x === "number" ? x * 50 + 6 : "Error";
}