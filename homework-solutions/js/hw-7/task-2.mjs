/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== 'string') {
    return false;
  }
  const wordLowerCase = word.toLowerCase();
  const wordTurnOver = wordLowerCase.split('').reverse().join('');

  if (wordLowerCase === wordTurnOver) {
    return true;
  } else return false;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string') {
    return [];
  }
  const sentenceNoSpace = [];
  for (const i of sentence.split(' ')) {
    if (i !== '') {
      sentenceNoSpace.push(i);
    }
  }

  const longestWordArray = [];
  let maxLength = 0;
  for (const i of sentenceNoSpace) {
    if (i.length >= maxLength) {
      maxLength = i.length;
    }
  }

  for (const i of sentenceNoSpace) {
    if (i.length === maxLength) {
      longestWordArray.push(i);
    }
  }
  return longestWordArray;
}

export { isPalindrom, findLongestWords };
