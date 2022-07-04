function trekkingMania(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 1; i <= n; i++) {
        let currentNumber = Number(input[index]);
        index++;
        if (currentNumber <= 5) {
            p1Counter += currentNumber;
        } else if (currentNumber >= 6 && currentNumber <= 12) {
            p2Counter += currentNumber;
        } else if (currentNumber >= 13 && currentNumber <= 25) {
            p3Counter += currentNumber;
        } else if (currentNumber >= 26 && currentNumber <= 40) {
            p4Counter += currentNumber;
        } else if (currentNumber >= 41) {
            p5Counter += currentNumber;
        }
    }
    let allAlpinists = p1Counter + p2Counter + p3Counter + p4Counter + p5Counter;
    let p1 = p1Counter / allAlpinists * 100;
    let p2 = p2Counter / allAlpinists * 100;
    let p3 = p3Counter / allAlpinists * 100;
    let p4 = p4Counter / allAlpinists * 100;
    let p5 = p5Counter / allAlpinists * 100;
    console.log(p1.toFixed(2) + "%");
    console.log(p2.toFixed(2) + "%");
    console.log(p3.toFixed(2) + "%");
    console.log(p4.toFixed(2) + "%");
    console.log(p5.toFixed(2) + "%");
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
