
    
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
    for (let i = 0; i < 50; i++){
      
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








// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(2,8);
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        fill('rgba(99, 30, 163, 0.76)');
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<85) {
            stroke('rgba(99, 30, 163, 0.2)');
            line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }
    
    // an array to add multiple particles
    let particles = [];
    
    function setup() {
      createCanvas(window.innerWidth, window.innerHeight);
      for(let i = 0;i<width/10;i++){
        particles.push(new Particle());
      }
    }
    
    function draw() {
      background('#ffffff');
      for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    }
