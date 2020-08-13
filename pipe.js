function Pipe() {
	this.top = random(height/2)
	this.bottom = this.top+random(50)+100
	this.x = width
	this.w = 20
	this.speed = 4

  		this.hits = function(bird) {
	    let halfBirdHeight = bird.height / 2
	    let halfBirdwidth = bird.width / 2
	    if (bird.y - halfBirdHeight < this.top || bird.y + halfBirdHeight > this.bottom) {
	      //if this.w is huge, then we need different collision model
	      if (bird.x + halfBirdwidth > this.x && bird.x - halfBirdwidth < this.x + this.w) {
	        this.highlight = true
	        this.passed = true
	        return true
	      }
	    }
	    this.highlight = false
	    return false
	}

	this.pass = function(bird) {
	    if (bird.x > this.x && !this.passed) {
	      this.passed = true
	      return true
	    }
	    return false
  	}

	this.show = function() {
		fill(255)
		rect(this.x, 0, this.w, this.top)
		rect(this.x, this.bottom, this.w, height-this.bottom)
	}

	this.update = function() {
		this.x -= this.speed
	}

	this.offscreen = function() {
		return (this.x < -this.w)
	}

}