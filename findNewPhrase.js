// JSON testing script for CocoColor phrases localization

var findNewPhrase = function(newPhrases, oldPhrases) {
  var newPhrasesKeys = Object.keys(newPhrases);
  var oldPhrasesKeys = Object.keys(oldPhrases);

  for (var key of oldPhrasesKeys) {
    var pos = newPhrasesKeys.indexOf(key)
    if (pos !== -1) {
      newPhrasesKeys.splice(pos, 1);
    }
  }

  for (var oldPhrase of newPhrasesKeys) {
    console.log(oldPhrase);
  }
  console.log(newPhrasesKeys);
}

var englishPhrases = { // insert english phrases here


};

var phrasesToCheck = { // insert phrases to cross check here

};

findNewPhrase(englishPhrases, phrasesToCheck);