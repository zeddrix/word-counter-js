const displayText = () => {
  const inputPage = document.getElementById("input-page");
  const countPage = document.getElementById("count-page");
  const text = document.getElementById("text");
  const textValue = text.value;

  if (text.value !== "") { // normal flow will continue if the text-area is not empty
    inputPage.style.display = "none";
    document.getElementById("display-text").innerText = textValue;
    countPage.style.display = "block";
  } else { // if the text-area is empty, it will issue a warning.
    alert("Please enter some text first.")
  }

  const countWords = (str) => {
    return str.split(" ").length;
  };
  const wordCount = (countWords(textValue));

  const renderWordCount = () => {
    const wordCountDiv = document.getElementById("word-count");
    wordCountDiv.innerHTML = "<h1> Words Counted: " + wordCount + "</h1>";
  };
  
  const getWordDensity = (str) => {
    let wordList = {};
    str.split(/\s+/).forEach(word => {
      if(typeof wordList[word] == "undefined"){
        wordList[word] = 1;
      }
      else{
        wordList[word]++;
      }
    });
    return wordList;
  };
  const wordDensity = (getWordDensity(textValue));
  
  const renderWordDensity = () => {
    const wordDensityDiv = document.getElementById("word-density");
    
    let table = "<table>";
    for(let word in wordDensity){
      table += "<tr><td>" + word + "</td><td>" + wordDensity[word] + "</td></tr>";
    }
    table += "</table>";
    
    wordDensityDiv.innerHTML = "<h1> Word Density: </h1>" + table;
  };

  renderWordCount();
  renderWordDensity();
};