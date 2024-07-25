//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .99

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -7
ball.vy = -7
ball.color = `white`

function generateParticles(x, y, count) {
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(x, y));
    }
}

//particles array
var particles = [];

//Player array
var player = []

//keys array
var keys = ["w", "s" , "ArrowUp", "ArrowDown"] 

// key state object
var keyState = {};

// event listeners for key presses and releases
document.addEventListener('keydown', function(e) {
    keyState[e.key] = true;
});

document.addEventListener('keyup', function(e) {
    keyState[e.key] = false;
});

//pad array
var pad = []

//creates two players
player[0] = new Player()
player[1] = new Player()

//store the pads array with players 
pad[0] = player[0].pad = new Box()
pad[1] = player[1].pad = new Box()


//set the pads width and height
pad[0].w = 20
pad[0].h = 100
pad[0].x = 0 + pad[0].w/2
pad[1].w = 20
pad[1].h = 100
pad[1].x = c.width - pad[1].w/2

//define pad score
pad[1].score = 0
pad[0].score = 0
//get the divs inside the score section to display the score
var score = document.querySelectorAll(`#score div`)

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)

    //display the scoreboard
    for (let i = 0; i < score.length; i++)
    {
        score[i].innerHTML = "Player " + (i + 1) + ":" + pad[i].score;
    }
    //for loop for key presses
    for (let i = 0; i < keys.length; i++) {
        if (keyState[keys[i]]) {//if the key is pressed down
            if (i % 2 === 0) {//if i is even(0("w"), 2("ArrowUp")), pad that is accessed moves up in game
                pad[Math.floor(i / 2)].vy += -pad[Math.floor(i / 2)].force;
            } else {//if i is odd (1("s"), 3("ArrowDown")), pad that is accessed moves down in game
                pad[Math.floor(i / 2)].vy += pad[Math.floor(i / 2)].force;
            }
        }
    }
    //for loop for friction and movement
    for (let i = 0; i < pad.length; i++)
    {
        //applies friction
        pad[i].vy *= fy
        //player movement
        pad[i].move();
    }
    //ball movement
    ball.move()

    //for loop for pads collision with top and bottom of wall as well as ball collision
    for (let i = 0; i < pad.length; i++)
    {
        if(pad[i].y < 0 + pad[i].h/2) {
            pad[i].y = 0 + pad[i].h/2;
            pad[i].vy = 0; // Set vertical velocity to 0
        }
        if(pad[i].y > c.height - pad[i].h/2) {
            pad[i].y = c.height - pad[i].h/2;
            pad[i].vy = 0; // Set vertical velocity to 0
        }
        //ball collision 
        if(ball.x < 0)
            {
                ball.x = c.width/2
                ball.y  =c.height/2
                pad[1].score += 1
            }
            if(ball.x > c.width)
            {
                ball.x = c.width/2
                ball.y = c.height/2
                pad[0].score += 1
            }
            if(ball.y < 0)
            {
                ball.y = 0
                ball.vy = -ball.vy
            }
            if(ball.y > c.height)
            {
                ball.y = c.height
                ball.vy = -ball.vy
            }
    }
    for (let i = 0; i < pad.length; i++) {
        if (ball.collide(pad[i])) {
            if (i === 0) {
                ball.x = pad[i].x + pad[i].w / 2 + ball.w / 2;
            } else {
                ball.x = pad[i].x - pad[i].w / 2 - ball.w / 2;
            }
            ball.vx = -ball.vx;
            generateParticles(ball.x, ball.y, 10); // Generate 10 particles at the collision point
        }
        particles = particles.filter(p => p.life > 0); // Remove dead particles
        particles.forEach(p => {
        p.move();
        p.draw(ctx); // Ensure ctx is passed here
        });
    }
    //for loop to draw the objects
    for (let i = 0; i < pad.length; i++)
    {
        pad[i].draw()
        ball.draw()
        console.log(pad[0].score + " | " + pad[1].score)
    }
}
