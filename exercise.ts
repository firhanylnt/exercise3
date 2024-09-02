// Problem: 
//  1. Write a code to display the multiplication table of a given integer.
// Hint:
//  1. What multiplication table is
//  2. The formula is loop the number until n
// Solution:
//  1. Define variable and assign value to variable
        let n: number = 9;
        let _length: number = 10;
//  2. Implement the formula
        for (let i = 1; i <= _length; i++) {
            const output = `${n} x ${i}`;
            console.log(output);
        }

// Problem: 
//  2. Write a code to check whether a string is a palindrome or not.
// Hint:
//  1. What palindrome is and how to check if the string is a palindrome or not
//  2. First define the word, then change it into lowercase and remove any non-aplhanumeric characters 
//  3. use .split() to split the character to array and reverse the character position and then use .join() to merge the characters
//  4. last, compare the words to get the result 
// Solution:
//  1. Define variable and assign value to variable
        let _words: string = 'malam';
        let result: boolean = false;
//  2. Implement the formula
        const replaceString = _words.toLowerCase().replace(/[^a-z0-9]/g, '');
        const reverseWords = replaceString.split('').reverse().join('');

        result = _words === reverseWords ? true : false;
        console.log(result);

// Problem: 
//  3. Write a code to convert centimeter to kilometer.
// Hint:
//  1. Find out how to convert centimeter to kilometer
//  2. The formula is the number of centimeter divided by 100000
// Solution:
//  1. Define variable and assign value to variable
        let cm: number = 100000;
        let km: number = 0;
//  2. Implement the formula
        km = cm / 100000;
        console.log(`${km} km`);


// Problem: 
//  4. Write a code to format number as currency (IDR)
// Hint:
//  1. Find out how to convert the number to currency with built-in object
//  2. use Intl.NumberFormat in javascript
// Solution:
//  1. Define variable and assign value to variable
        let amount: number = 1000;
//  2. Implement the formula
        let convert: string = '';
        const val = amount.toString().replace('.', ',');
        convert =  val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        if (amount % 1 === 0) {
            convert += ',00';
        }
        console.log(`Rp ${convert}`);


// Problem: 
//  5. Write a code to remove the first occurrence of a given “search string” from a string
// Hint:
//  1. Find out how to get the first word and replace the word by search string
//  2. The formula is split the sentence to words, and get the first word to replace by search string
// Solution:
//  1. Define variable and assign value to variable
        let _string: string = 'Hello world';
        let searchString: string = 'ell';
//  2. Implement the formula
        const arr = _string.split(' ')
        const _replace = arr[0].replace(searchString, '');
        const output = _replace + ' ' + arr[1];
        console.log(output);

// Problem: 
//  6. Write a code to remove the first occurrence of a given “search string” from a string
// Hint:
//  1. Find out how to get the first word and replace the word by search string
//  2. The formula is split the sentence to words
//  3. get the first word and change the first character into uppercase
//  4. get the second word and change the first character into uppercase
// Solution:
//  1. Define variable and assign value to variable
        _string = 'hello world';
//  2. Implement the formula
        const newWords = _string.split(' ');
        const first = newWords[0]
        const second = newWords[1];
        const capitalizeFirst = first.charAt(0).toUpperCase() + first.slice(1);
        const capitalizeSecond = second.charAt(0).toUpperCase() + second.slice(1);
        console.log(`${capitalizeFirst} ${capitalizeSecond}`);


// Problem: 
//  7. Write a code to swap the case of each character from string 
// Hint:
//  1. Define the character and set to array 
//  2. Loop the array and make conditional to change the character type 
//  3. create conditional if lowercase change it to uppercase and uppercase to lowercase
// Solution:
//  1. Define variable and assign value to variable
        const __words: string= 'The QuiCk BrOwN Fox';
        const splitWords = __words.split('');
        let final: string = '';
//  2. Implement the formula
        for (let i = 0; i < splitWords.length; i++) {
            if(splitWords[i] === splitWords[i].toUpperCase()){
                final += splitWords[i].toLowerCase()
            }else if(splitWords[i] === splitWords[i].toLowerCase()){
                final += splitWords[i].toUpperCase()
            }
        }
        console.log(final);

// Problem: 
//  8. Write a code to find the largest of two given integers
// Hint:
//  1. Define the variable
//  2. create conditional if first variable bigger than second variable
// Solution:
//  1. Define variable and assign value to variable
        let num1: number = 42;
        let num2: number = 27;
//  2. Implement the formula
        const largest = num1 > num2 ? num1 : num2;
        console.log(largest);

// Problem: 
//  9. Write a conditional statement to sort three numbers
// Hint:
//  1. Define the variable
//  2. create multiple conditional to check the variable
// Solution:
//  1. Define variable and assign value to variable
        let _num1: number = 42;
        let _num2: number = 27;
        let _num3: number = 18;
//  2. Implement the formula
        if(_num1 > _num2 && _num2 > _num3 && _num1 > _num3){
            console.log(_num3, _num2, _num1)
        } else if(_num1 < _num2 && _num2 < _num3 && _num1 < _num3){
            console.log(_num1, _num2, _num3)
        }

// Problem: 
//  10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
// Hint:
//  1. Define the variable
//  2. create conditional to check if the variable is the data type
// Solution:
//  1. Define variable and assign value to variable
        const _input: string = 'hello';
        // const _input: number = 11;
        // const _input: boolean = true;
//  2. Implement the formula
        if(typeof _input === 'string'){
            console.log(1);
        } else if(typeof _input === 'number'){
            console.log(2);
        } else {
            console.log(3);
        }

// Problem: 
//  11. Write a code to change every letter a into * from a string of input
// Hint:
//  1. Define the variable
//  2. Change value of the variable to replace character 'a and A' to '*' with regex
// Solution:
//  1. Define variable and assign value to variable
        const _newStr = 'An apple a day keeps the doctor away';
//  2. Implement the formula
        const strReplace: string = _newStr.replace(/[Aa]/g,'*')
        console.log(strReplace);