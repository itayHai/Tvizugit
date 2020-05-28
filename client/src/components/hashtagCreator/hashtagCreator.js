import React from "react";

const HashtagCreator = (props) => {
  const wordsToIgnore = [
    "אני",
    "אז",
    "לא",
    "את",
    "כן",
    "היה",
    "זה",
    "אבל",
    "יש",
    "עוד",
    "פעם",
    "רק",
    "לי",
    "לו",
    "כך",
    "כדי",
    "הם",
    "הייתה",
    "גם",
    "אתה",
    "כי",
    "לה",
    "כל",
    "מאוד",
    "מה",
    "כחלק",
    "יפצה",
    "פיצוי",
    "חלק",
    "נגד",
    "היא",
    "הוא",
    "שם",
    "כלום",
    "על",
    "אותו",
    "אותה",
    "טוב",
    "קצת",
    "עדיין",
    "קשה",
    "קל",
    "או",
    "אל",
    "יותר",
    "בין",
    "אף",
    "היתה"

  ];

  function createWordMap(wordsArray) {
    const wordsMap = {};
    wordsArray.forEach(function (key) {
      if (wordsMap.hasOwnProperty(key)) {
        wordsMap[key]++;
      } else {
        wordsMap[key] = 1;
      }
    });
    return wordsMap;
  }

  function sortByCount(wordsMap) {
    var finalWordsArray = [];
    finalWordsArray = Object.keys(wordsMap).map(function (key) {
      return {
        name: key,
        total: wordsMap[key],
      };
    });
    finalWordsArray.sort(function (a, b) {
      return b.total - a.total;
    });
    return finalWordsArray;
  }

  function removeCommonWords(wordsArray) {
    var finalWordsArray = [];
    finalWordsArray = wordsArray.filter(
      (word) => !wordsToIgnore.includes(word)
    );

    return finalWordsArray;
  }

  let hashtags = [];
  let wordsArray = props.description.split(/\s+/);
  let namesArray = props.name.split(/\s+/);
  namesArray = removeCommonWords(namesArray);
  wordsArray = removeCommonWords(wordsArray);

  const wordsMap = createWordMap(wordsArray);
  const sortedWordsArray = sortByCount(wordsMap);

  hashtags = sortedWordsArray.map((word) => word.name);
  hashtags = hashtags.slice(0, 10);
  hashtags.push(...namesArray);
  props.defendant.map((defendant) => {
    hashtags.push(defendant);
  });

  return hashtags;
};

export default HashtagCreator;
