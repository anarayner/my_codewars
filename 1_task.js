/**
 * Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
 */

function list(names) {
  let arr = [];

  for (let i = 0; i < names.length; i++) {
    arr.push(names[i].name);
  }
  if (names.length > 2) {
    const endNames = arr.splice(-2).join(" & ");
    const startNames = arr.join(", ");
    let srt = startNames + ", " + endNames;
    return srt;
  } else if (names.length > 1) {
    const endNames = arr.join(" & ");
    return endNames;
  } else {
    return arr.toString();
  }
}

function list2(names){
    return names.reduce(function(prev, current, index, array){
     if (index === 0){
       return current.name;
     }
     else if (index === array.length - 1){
       return prev + ' & ' + current.name;
     }
     else {
       return prev + ', ' + current.name;
     }
   }, '')}



