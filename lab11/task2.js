function calculateSum() {
    var sum = 0;
    for (var i = 1; i <= 128; i++) {
        sum += 1 / Math.pow(2 * i, 2);
    }
    return sum.toFixed(4);
}

document.getElementById('result').textContent = calculateSum();