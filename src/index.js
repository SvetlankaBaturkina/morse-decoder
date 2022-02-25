const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    ' ': ' '
};

function decode(expr) {
    let resultString = '';
    let arrString = [];
    for(let i = 0; i < expr.length; i += 10) { // выделим подстоки по 10 символов 
        arrString.push(expr.substr(i, 10)); // запишем в созданный массив
    };
    arrString.forEach((item) => { // для каждого элемента массива
        let codeString = ''; // переведем каждый элемент массива в строку
        if (item === '**********') { // найдем закодированный пробел
            codeString += ' ';
        };
            for (let i = 0; i < item.length; i += 2) {
                if (item.charAt(i) + item.charAt(i + 1) === '11') { 
                    codeString += '-'; // найдем в коде тире
                };
                if (item.charAt(i) + item.charAt(i + 1) === '10') { 
                    codeString += '.'; // найдем в коде точки
                };
            };
        resultString += MORSE_TABLE[codeString]; // раскодируем строку
    });
    return resultString; // возвращаем результат
};
module.exports = {
    decode
};