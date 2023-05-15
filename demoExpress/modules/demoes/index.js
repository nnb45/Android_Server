

const dienTich = async (dai, rong) => {
    return dai * rong;
}

const chuVi = async (dai, rong) => {
    return (dai + rong) * 2;
}

const tongSoLe = async (number1 = 1, number2 = 100) => {
    let sum = 0;
    for (let i = number1; i <= number2; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

module.exports = { dienTich, chuVi, tongSoLe};