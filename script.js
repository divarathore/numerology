
let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown",function(event){

  // Detect when we specifically press enter key
  if (event.key == "Enter"){
    let total = 0;
    
    
    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";
    
    //Clear the reading result from last time
    result.innerHTML = "";
    
    // Loop through 4 times
    for (let i = 0; i < 15; i++){
      
      // Print the number we're at in the loop
      // console.log(i);
      
      // Get the i-th letter in the name
      let letter = name[i];
      if (!letter) { return }
      // console.log(letter, i);
      
      function addTextNode(text) {
        var newtext = document.createTextNode(text),
          p1 = document.getElementById("result");
          p1.appendChild(newtext);
      }
      // If letter is any of these, use the no.
      if (["a", "i", "j", "q", "y"].includes(letter)){
        addTextNode("1");
        total += 1;
      }
      if (["b", "k", "r"].includes(letter) ){
        addTextNode("2");
        total += 2;
      }
      if (["c", "g", "l", "s"].includes(letter)){
        addTextNode("3");
        total += 3;
      }
      if (["d", "m", "t"].includes(letter)){
        addTextNode("4");
        total += 4;
      }
      if (["e", "h", "n", "x"].includes(letter)){
        addTextNode("5");
        total += 5;
      }
      if (["u", "v", "w"].includes(letter)){
        addTextNode("6");
        total += 6;
      }
      if (["o", "z"].includes(letter)){
        addTextNode("7");
        total += 7;
      }
      if (["f", "p"].includes(letter)){
        addTextNode("8");
        total += 8;
      }
      console.log(total);
      result.innerText = total;
      
    }
    
    
  }
})