var bird
var pipes = []
var score = 0
var gameoverFrame = 0
var a = true

function setup(){
	createCanvas(400, 600)
	bird = new Bird()
	pipes.push(new Pipe())
}

function draw() {
	background(0)
	bird.update()
	bird.show()

	if ((frameCount - gameoverFrame) % 60 ==0) {
		pipes.push(new Pipe())
	}

	for (var i = pipes.length-1; i >= 0; i--) {
		pipes[i].show()
		pipes[i].update()

		if (pipes[i].offscreen()) {
			pipes.slice(i, 1) 
		}

		if (pipes[i].hits(bird)) {
		  reset()
		  break
		}

		if (pipes[i].pass(bird)) {
		  score++;
		}

	}	



	  showScores();

}

function reset() {
	score = 0;
	pipes = [];
	bird = new Bird();
	pipes.push(new Pipe());
	gameoverFrame = frameCount - 1;
 	console.log('reset')
}

function keyPressed() {
	if (key == ' ') {
		bird.up()
	}
}

function showScores() {
	textSize(32)
	text('score: ' + score, 1, 32)
}

function pause() {

}
