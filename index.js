// console.log('Hello World');
//1. One way of making regular expression(regex)
let reg1 = /d/;
//2.Another way
let reg2 = new RegExp('d');
// console.log(reg1.test('Hello World')); //true
// console.log(reg2.test('Hello World')); //true
//******************************************* */
reg1 = /h/;
// console.log(reg1.test('Hello World')); //false
//******************************************* */
reg1 = /a/;
// console.log(reg1.test('aaaaaaaaa')); //true
//******************************************* */
reg1 = /a/i; //i
// console.log(reg1.test('aaaaaaaaa')); //true
//******************************************* */
reg1 = /a{4,}/i; //match at least 4 a's
// console.log(reg1.test('aaa')); //false
//******************************************* */
//instead of putting one char we can make it any char
reg1 = /.{4,}/i; //match at least 4 any char's
// console.log(reg1.test('aaaa')); //true
// console.log(reg1.test('cccc')); //true
// console.log(reg1.test('ccc')); //false
//******************************************* */
reg1 = /e/;
let word = 'This is regex example string';
// console.log(word.replace(reg1, 'y')); //'This is rygex example string'//first found letter 'e' was replaced
//******************************************* */
reg1 = /e/i; //the same
word = 'This is regex example string';
// console.log(word.replace(reg1, 'y')); //'This is rygex example string'//first found letter 'e' was replaced
//******************************************* */
reg1 = /e/g; //global - finds all match
word = 'This is regex example string';
// console.log(word.replace(reg1, 'y')); //'This is rygyx yxamply string'//first found letter 'e' was replaced
//******************************************* */
reg1 = /e..x/g; //match all e and x between 2 char's
word = 'This is regex example string for regex';
// console.log(word.replace(reg1, 'E')); //This is rE example string for rE
//******************************************* */
reg1 = /e.a/g; //match all e and a between 1 char's
word = 'This is regex example string for regex';
// console.log(word.replace(reg1, 'A')); //This is regex Ample string for regex
//so it will replace all 3 char's with one
//******************************************* */
reg1 = /a.+c/g; //means match whatever between first 'a' and last 'c'
word = 'sssalc9999abc3333akc888888aYc77777agc';
// console.log(word.replace(reg1, 'CHANGED')); //sssCHANGED
//******************************************* */
reg1 = /a.+?c/g; // means - incase if between 'a' and 'c' after one char's after 'a' comes 'anything' accept that too, but not between 'c' and 'a'
word = 'sssal9999c7777ahc9999ak00000000c';
// console.log(word.replace(reg1, 'CHANGED')); //sssCHANGED7777CHANGED9999CHANGED
//******************************************* */
reg1 = /a.?c/g; // means - incase if between 'a' and 'c' after one char's after 'a' comes 'anything' accept that too, but not between 'c' and 'a'
word = 'alc6666ac0000acac9999akc';
// console.log(word.replace(reg1, 'CHANGED')); //CHANGED6666CHANGED0000CHANGEDCHANGED9999CHANGED
//******************************************* */
reg1 = /[xyz]/g; //matches lower any x or y or z
word = 'abcxyzabcxabcyabczabcXYZ';
// console.log(word.replace(reg1, 'D')); //abcDDDabcDabcDabcDabcXYZ
//******************************************* */
reg1 = /[a-z]/g; //matches lower a to z, but not upper, numbers or any other char's
word = 'abcxyzabcxabcyabczabcXYZ123';
// console.log(word.replace(reg1, 'D')); //DDDDDDDDDDDDDDDDDDDDDXYZ123
//******************************************* */
reg1 = /[a-z]/i; //only matches first lower a to z
word = 'abcxyzabcxabcyabczabcXYZ';
// console.log(word.replace(reg1, 'D')); //DbcxyzabcxabcyabczabcXYZ
//******************************************* */
reg1 = /[a-z0-9A-Z]/g; //matches lower a to z, A to Z upper,and numbers
word = 'abcxyzabcxabcyabczabcXYZ123';
// console.log(word.replace(reg1, 'D')); //DDDDDDDDDDDDDDDDDDDDDDDDDDD
//******************************************* */
reg1 = /\w/g; //matches lower a to z, upper A to Z ,and numbers
word = 'abcxyzabcxabcyabczabcXYZ123...,,,000??';
// console.log(word.replace(reg1, 'D')); //DDDDDDDDDDDDDDDDDDDDDDDDDDD...,,,DDD??
//*************** meta char escape *********************** */
reg1 = /[a-z0-9A-Z]\]/g; //escape lower a to z, upper A to Z ,and numbers
word = 'abcxyzabcxabcyabczabcXYZ123....,,,,,';
// console.log(word.replace(reg1, 'D')); //abcxyzabcxabcyabczabcXYZ123....,,,,,
//*************** meta char escape *********************** */
reg1 = /\W/g; //escape lower a to z, upper A to Z ,and numbers
word = 'abcxyzabcxabcyabczabcXYZ123....,,,,,';
// console.log(word.replace(reg1, 'D')); //abcxyzabcxabcyabczabcXYZ123DDDDDDDDD
//*************** *********************** */
reg1 = /\d/g; //match all the digits only
word = 'abcxyzabcxabcyabczabcXYZ123....,,,,,';
// console.log(word.replace(reg1, 'D')); //abcxyzabcxabcyabczabcXYZDDD....,,,,,
//*************** *********************** */
reg1 = /\D/g; // match all except digits
word = 'abcxyzabcxabcyabczabcXYZ123....,,,,,';
// console.log(word.replace(reg1, 'D')); //DDDDDDDDDDDDDDDDDDDDDDDD123DDDDDDDDD
//*************** match white space *********************** */
reg1 = /\s/g; // match all white space
word = 'abc yza bcx bcyabc  abc XZ123.... ,,,,,';
// console.log(word.replace(reg1, 'D')); //abcDyzaDbcxDbcyabcDDabcDXZ123....D,,,,,
//*************** match non white space *********************** */
reg1 = /\S/g; // match all except white space
word = 'abc yza bcx bcyabc  abc XZ123.... ,,,,,';
// console.log(word.replace(reg1, 'D')); //DDD DDD DDD DDDDDD  DDD DDDDDDDDD DDDDD
//***************** match date */
let str = 'Todays date is01-30-2020 or 1-30-2020 and Todays date is 01302020';
reg1 = /\d\d-\d\d-\d\d\d\d/g; // match exact format
// console.log(str.replace(reg1, 'CHANGED')); //Todays date isCHANGED or 1-30-2020 and Todays date is 01302020
//***************** match date */
str = 'Todays date is01-30-2020 or 1-30-2020 and Todays date is 01302020';
reg1 = /\d?\d-\d\d-\d\d\d\d/g; // match exact format first digits could be one or two
// console.log(str.replace(reg1, 'CHANGED')); //Todays date isCHANGED or CHANGED and Todays date is 01302020
//***************** match date */
str = 'Todays date is01-30-2020 or 1-30-2020 and Todays date is 01302020';
reg1 = /\d?\d-?\d\d-?\d\d\d\d/g; // match exact format first digits could be one or two
// console.log(str.replace(reg1, 'CHANGED')); //Todays date isCHANGED or CHANGED and Todays date is CHANGED
//without regex .replace changes only first one
// console.log(str.replace('d', 'D')); //ToDays date is01-30-2020 or 1-30-2020 and Todays date is 01302020
//lets add some div in HTML file

//*****************match starting letter *** */
str = 'string';
reg1 = /^s/;
// console.log(str.replace(reg1, 'MATCH')); //MATCHtring

str = 'String';
// console.log(str.replace(reg1, 'MATCH')); //String
//*****************match starting and ending letter *** */
str = 'string';
reg1 = /^s.+s$/;
// console.log(str.replace(reg1, 'MATCH')); //string
str = 'strings';
// console.log(str.replace(reg1, 'MATCH')); //MATCH
//***************** use pipe | for matching *** */
let num = '012 021 123 093';
reg1 = /0(12|21)/g;
// console.log(num.replace(reg1, 'MATCH')); //MATCH MATCH 123 093
//***************************** */
str = 'I am student. And I am a web developer';
//lets replace 'I am' with 'We are'
reg2 = /I am/g;
// console.log(str.replace(reg2, 'We are')); //We are student. And We are a web developer
reg2 = /I am(?= a web developer)/g;
// console.log(str.replace(reg2, 'We are')); //I am student. And We are a web developer
