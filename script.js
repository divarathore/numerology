let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");

// Detect when we press a key while in the text box
inputElement.addEventListener("keydown", function(event) {

	let total = 0;
	let singleDigit;
	// Detect when we specifically press enter key
	if (event.key == "Enter") {

		// Get the contents of the text input (aka name)
		let name = inputElement.value;
		console.log(name);

		//We can also clear what we wrote in the text box
		inputElement.value = "";

		//Clear the reading result from last time
		result.innerHTML = "";

		// Loop through 4 times
		for (let i = 0; i < name.length; i++) {

			// Print the number we're at in the loop
			// console.log(i);

			// Get the i-th letter in the name
			let letter = name[i];
			if (!letter) {
				return
			}
			// console.log(letter, i);

			function addTextNode(text) {

				document.getElementById("result").textContent = text;
			}
			// If letter is any of these, use the no.
			if (["a", "i", "j", "q", "y", "A", "I", "J", "Q", "Y", "1"].includes(letter)) {
				total += 1;
			}
			if (["b", "k", "r", "B", "K", "R", "2"].includes(letter)) {
				total += 2;
			}
			if (["c", "g", "l", "s", "C", "G", "L", "S", "3"].includes(letter)) {
				total += 3;
			}
			if (["d", "m", "t", "D", "M", "T", "4"].includes(letter)) {
				total += 4;
			}
			if (["e", "h", "n", "x", "E", "H", "N", "X", "5"].includes(letter)) {
				total += 5;
			}
			if (["u", "v", "w", "U", "V", "W", "6"].includes(letter)) {
				total += 6;
			}
			if (["o", "z", "O", "Z", "7"].includes(letter)) {
				total += 7;
			}
			if (["f", "p", "F", "P", "8"].includes(letter)) {
				total += 8;
			}
			if (["9"].includes(letter)) {
				total += 9;
			}
			console.log(total);
		}

		//take the total and check if its is a single digit
		// if it is not a single digit add the digits to each other till they are single digits
		//if the digit is greater than 9 and is equal to 11 or 22 then dont add them further.
		const num = total;
		const sumDigit = (num, sum = 0) => {
			if (num) {
				return sumDigit(Math.floor(num / 10), sum + (num % 10));
			}
			return sum;
		};
		const sumRepeatedly = num => {
			while (num > 9 && !(num == 11 || num == 22)) {
				num = sumDigit(num);
			};
			return num;
		};
		console.log(sumRepeatedly(num));
		singleDigit = sumRepeatedly(num);

		result.innerText = singleDigit;

		//find the display_text class and remove the class hidden from the individual p tag equal to the total aka singleDigit.
    document.querySelectorAll('.display_text').forEach((p) => p.classList.add('hidden'));
		document.querySelector(`[data-number="${singleDigit}"]`).classList.remove('hidden')

	}
})




// this class describes the properties of a single particle.
class Particle {
	// setting the co-ordinates, radius and the
	// speed of a particle in both the co-ordinates axes.
	constructor() {
		this.x = random(0, width);
		this.y = random(0, height);
		this.r = random(2, 8);
		this.xSpeed = random(-2, 2);
		this.ySpeed = random(-1, 1.5);
	}

	// creation of a particle.
	createParticle() {
		noStroke();
		fill('rgba(120, 218, 248, 0.913)');
		circle(this.x, this.y, this.r);
	}

	// setting the particle in motion.
	moveParticle() {
		if (this.x < 0 || this.x > width)
			this.xSpeed *= -1;
		if (this.y < 0 || this.y > height)
			this.ySpeed *= -1;
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	// this function creates the connections(lines)
	// between particles which are less than a certain distance apart
	joinParticles(particles) {
		particles.forEach(element => {
			let dis = dist(this.x, this.y, element.x, element.y);
			if (dis < 85) {
				stroke('rgba(120, 218, 248, 0.3)');
				line(this.x, this.y, element.x, element.y);
			}
		});
	}
}

// an array to add multiple particles
let particles = [];

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	for (let i = 0; i < width / 10; i++) {
		particles.push(new Particle());
	}
}

function draw() {
	background('#242526');
	for (let i = 0; i < particles.length; i++) {
		particles[i].createParticle();
		particles[i].moveParticle();
		particles[i].joinParticles(particles.slice(i));
	}
}
