var hours = process.argv[2];
var minutes = process.argv[3];
var romanTime = '';
var magicDigits = [50, 40, 10, 9, 5, 4, 1];
var dict = { 50:'L', 40:'XL', 10:'X', 9:'IX', 5:'V', 4:'IV', 1:'I' };

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
    console.log('Время указано неверно');
else {
    romanTime = toRoman(hours) + ':' + toRoman(minutes);
    toAmazingGraphic(romanTime);
}

function toRoman(digit) {
    var str = '';
    while (digit !=0) {
        for (var i = 0; i < magicDigits.length; i++) {
            var current = magicDigits[i];
            if (digit >= current) {
                str += dict[current];
                digit -= current;
                break;
            }
        }
    }
    return str == '' ? '-' : str;
}

function toAmazingGraphic(time) {
    var dict = {
        'I' : ['ooo',
               ' o ',
               'ooo'],
        'L' : ['o  ',
               'o  ',
               'ooo'],
        'V' : ['o o',
               'o o',
               ' o '],
        'X' : ['o o',
               ' o ',
               'o o'],
        '-' : ['   ',
               '{ }',
               '   '],
        ':' : [' [] ',
               '    ',
               ' [] ']
    };
    var str = '';
    for (var j = 0; j < 3; j++) {
        for (var i = 0; i < time.length; i++) {
            str += dict[time[i]][j];
            str += ' ';
        }
        console.log(str);
        str = '';
    }
}
