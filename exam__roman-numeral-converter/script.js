"use strict";

const btn = document.getElementById('convert-btn');

btn.addEventListener('click', () => {
    const output = document.getElementById('output');
    const input = document.getElementById('number').value;

    if (input.length === 0) {
        return output.innerText = "Please enter a valid number";
    } else if (input <= 0) {
        return output.innerText = "Please enter a number greater than or equal to 1";
    } else if (input >= 4000) {
        return output.innerText = "Please enter a number less than or equal to 3999";
    } else {
        function decimalToRoman(num) {
            const romanNumerals = [
                { value: 1000, symbol: 'M' },
                { value: 900, symbol: 'CM' },
                { value: 500, symbol: 'D' },
                { value: 400, symbol: 'CD' },
                { value: 100, symbol: 'C' },
                { value: 90, symbol: 'XC' },
                { value: 50, symbol: 'L' },
                { value: 40, symbol: 'XL' },
                { value: 10, symbol: 'X' },
                { value: 9, symbol: 'IX' },
                { value: 5, symbol: 'V' },
                { value: 4, symbol: 'IV' },
                { value: 1, symbol: 'I' }
            ];
            let result = '';
            for (const { value, symbol } of romanNumerals) {
                while (num >= value) {
                    result += symbol;
                    num -= value;
                }
            }
            return result;
        }
        const romanNumeral = decimalToRoman(Number(input));
        output.innerText = `${romanNumeral}`;
    }
});