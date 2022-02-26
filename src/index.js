const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.split("");
    const res = [];
    for (let i = 0; i < arr.length; i += 10) {
        let chunk = arr.slice(i, i + 10);
        res.push(chunk);
    }
    res.forEach(function (elem) {
        elem
    })
    let resul = []
    res.forEach(function (elem) {
        elem = elem.slice(elem.indexOf("1"))
        resul.push(elem)
    })
    console.log(resul)

    let resultall = []
    resul.forEach(function (elem) {
        let result = []
        for (let w = 0; w < elem.length; w = w + 2) {
            result.push(elem[w] + elem[w + 1]);
        }
        resultall.push(result)
    })
    let finish = ""
    console.log(resultall)
    let allkod = []
    resultall.forEach(function (elem) {
        let kod = ""
        for (let r = 0; r < elem.length; r++) {
            if (elem[r] === "10") {
                kod += (".")
            }
            else if (elem[r] === "11") {
                kod += ("-")
            }
            else if (elem[r] === "*") {
                kod += ("*")
            }
        }
        allkod.push(kod)
    })
    console.log(allkod)
    allkod.forEach(function (elem) {
        if (MORSE_TABLE[elem] == undefined) {
            finish += " "
        }
        else {
            finish += MORSE_TABLE[elem]
        }

    })
    return finish
}

module.exports = {
    decode
}