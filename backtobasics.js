let name = "Johnny"
function length(name) {
 return charNumber = name.length
}
console.log(length(name))


// In addition to the length property, strings have methods. These are functions that are applied to 
// the string. Like the length property, these methods are appended with a point to the string or to
// a variable that contains a string. The arguments enclosed in parentheses follow. Two of these 
// string methods are the parameterless methods toUpperCase and toLowerCase. They return the
//  string in uppercase or lowercase.

let team = 'Miami Heat'
function toCase(team) {
return team.toLowerCase() + '-' + team.toUpperCase()
}
console.log(toCase(team))

// To get a character from a string at a specified index, use the charAt(index) method:
// let char0 = 'Frantz'.charAt(0);
// let char1 = 'Frantz'.charAt(1);
// let char9 = 'Frantz'.charAt(9);
// The first character has the index 0. So char0 has the value 'F' and char1 has the value 'r'.
//  If the index is larger than the index of the last character, the empty string is returned. 
//  So char9 has the value ''

let string1 = 'Thadeus'
let string2 = 'Young'
function shortcut(string1,string2) {
  return string1.charAt(0) + string2.charAt(0)
}
console.log(shortcut(string1,string2))

// The trim method removes whitespaces from both ends of a string.
// let input = ' Rosa Parks ';
// let name = input.trim();
// name contains the string 'Rosa Parks'. Notice that input still contains the string ' Rosa Parks '.
// Exercise

// Write a function firstChar, which returns the first character that is not a space when
//  a string is passed.

// Example: firstChar(' Rosa Parks ') should return 'R'.

let input = ' Marc Jacobs '
function firstChar(input) {
 let name = input.trim()
  return name.charAt(0)
}
console.log(firstChar(input))