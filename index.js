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
//***************************** */
str = 'iron.com, email.com';
reg2 = /./; //this will match any first appeared char only
// console.log(str.replace(reg2, 'MATCH')); //MATCHron.com, email.com
//***************************** */
str = 'iron.com, email.com';
reg2 = /\./; //this will match only the first dot
// console.log(str.replace(reg2, 'MATCH')); //ironMATCHcom, email.com
//***************************** */
str = 'iron.com, email.com';
reg2 = /\./g; //this will match all the dots
// console.log(str.replace(reg2, 'MATCH')); //ironMATCHcom, emailMATCHcom
//***************************** */
str = 'iron.com, email.com';
reg2 = /./g; //this will match all char's
// console.log(str.replace(reg2, 'MATCH')); //MATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCHMATCH
//***************************** */
let arr = [
  { name: 'Dave Martin', phone: '615-555-7164' },
  { name: 'Martin', phone: '615.555.7164' },
  { name: 'Charles Harris', phone: '800*555*5669' },
];

let newArr;
newArr = arr.map(user => {
  let regex = /\d\d\d.\d\d\d.\d\d\d\d/g;
  return user.phone.replace(regex, '888-888-8888');
});
// console.log('Output for: newArr', newArr); //all phone numbers will be replaced
//***************************** */
newArr = arr.map(user => {
  let regex = /\d\d\d-\d\d\d-\d\d\d\d/g;
  return user.phone.replace(regex, '888-888-8888');
});
// console.log('Output for: newArr', newArr); //only all phone numbers with '-' will be replaced
//***************************** */
newArr = arr.map(user => {
  let regex = /\d\d\d[-.]\d\d\d[-.]\d\d\d\d/g;
  return user.phone.replace(regex, '888-888-8888');
});
// [] - Matches Characters in brackets
// console.log('Output for: newArr', newArr); //all phone numbers except '*' will be replaced
//***************************** */
newArr = arr.map(user => {
  let regex = /\d\d\d[^-.]\d\d\d[^-.]\d\d\d\d/g;
  return user.phone.replace(regex, '888-888-8888');
});
//[^ ] - Matches Characters NOT in brackets
// console.log('Output for: newArr', newArr); //all phone numbers except with '-' and '.' will be replaced
arr = ['615-555-7164', '615.555.7164', '800*555*5669'];
reg1 = /\d\d\d[^-.]\d\d\d[^-.]\d\d\d\d/g;
newArr = reg1.test(arr[0]); //false
newArr = reg1.test(arr[1]); //false
newArr = reg1.test(arr[2]); //true - this is match
//[^ ] - Matches Characters NOT in brackets
// console.log('Output for: newArr', newArr); //all phone numbers except with '-' and '.' will be replaced
//***************************** */
arr = [
  '615-555-7164',
  '615.555.7164',
  '800*555*5669',
  '900*555*5669',
  '800-222-2222',
];
//lets get the number starts with 800 or 900 and with '*'
newArr = arr.map(phone => {
  let regex = /[89]00[^-.]\d\d\d[^-.]\d\d\d\d/g;
  return phone.replace(regex, '888-888-8888');
});
// console.log('Output for: newArr', newArr);

//************** { quantifiers } *************** */
//quantifiers helps to make DRY(don't repeat yourself) code
newArr = arr.map(phone => {
  let regex = /\d{3}[^-.]\d{3}[^-.]\d{4}/g;
  return phone.replace(regex, '888-888-8888');
});
// console.log('Output for: newArr', newArr);

//************** ()|\.[] *************** */
arr = [
  'Mr. Chaffer',
  'Mr Smith',
  'Ms Delves',
  'Mrs Robins',
  'Mrs. Julia',
  'Mr. T',
  'Mr tj',
  'MrA',
];
//lets see how we can search for specific char
newArr = arr.map(name => {
  let regex = /Mr./g;
  return name.replace(regex, 'FOUND');
});
// console.log('Output for: newArr', newArr);
//---------------------------------------------
newArr = arr.map(name => {
  let regex = /Mr\.\s/g;
  return name.replace(regex, 'FOUND');
});
// console.log('Output for: newArr', newArr);
//---------------------------------------------
newArr = arr.map(name => {
  let regex = /Mr\.\s[A-Z]/g;
  return name.replace(regex, 'FOUND');
});
// console.log('Output for: newArr', newArr);
//---------------------------------------------
newArr = arr.map(name => {
  let regex = /Mr\.\s[A-Z]\w/g;
  return name.replace(regex, 'FOUND');
});
// console.log('Output for: newArr', newArr);
//---------------------------------------------
newArr = arr.map(name => {
  let regex = /M(r|s|rs)\.?\s[A-Za-z]\w+/g;
  return name.replace(regex, 'FOUND');
});
// console.log('Output for: newArr', newArr);
//  ["FOUND", "FOUND", "FOUND", "FOUND", "FOUND", "Mr. T", "FOUND", "MrA"]
//---------------------------------------------
newArr = arr.map(name => {
  let regex = /M(r|s|rs)\.?\s[A-Za-z]\w*/g;
  return name.replace(regex, 'FOUND');
});
// console.log('Output for: newArr', newArr);
// ["FOUND", "FOUND", "FOUND", "FOUND", "FOUND", "FOUND", "FOUND", "MrA"]
/M(r|s|rs)\.?\s[A-Za-z]\w*/g;
// look for capital 'M' after which comes 'r' or 's' or 'rs'
// after which '.' or nothing
// after which 'white space'
// after which capital or lowerCase letter
// after which 0 or more word
//---------------------------------------------
newArr = arr.map(name => {
  let regex = /(M(r|s|rs))\.?\s([A-Za-z]\w*)/g;
  //we select groups with $ sign
  //everything inside () are called groups
  //group 1 - (M(r|s|rs))
  //group 2 -  (r|s|rs)
  //group 3 - ([A-Za-z]\w*)
  //   return name.replace(regex, '$1');
  return name.replace(regex, '$3'); //we get the actual names - the second word in the string
});
console.log('Output for: newArr', newArr);
//when we select $1 - group 1
// ["Mr", "Mr", "Ms", "Mrs", "Mrs", "Mr", "Mr", "MrA"]
//when we select $2 - group 2
// ["r", "r", "s", "rs", "rs", "r", "r", "MrA"]
//when we select $3 - group 3
// ["Chaffer", "Smith", "Delves", "Robins", "Julia", "T", "tj", "MrA"]
//when we select $4 - group 4 which we don't have
// ["$4", "$4", "$4", "$4", "$4", "$4", "$4", "MrA"]
//this is good features of the regex for filtering strings
