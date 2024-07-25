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


    //pad[0] accelerates when key is pressed 
    if(keys[`w`])
    {
        pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }
    //pad[1] accelerates when key is pressed
    if(keys[`ArrowUp`])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys[`ArrowDown`])
    {
        pad[1].vy += pad[1].force
    }
    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy
    //player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move()

    //pad[0] collision with top and bottom of the wall
    if(pad[0].y < 0 + pad[0].h/2) {
        pad[0].y = 0 + pad[0].h/2;
        pad[0].vy = 0; // Set vertical velocity to 0
    }
    if(pad[0].y > c.height - pad[0].h/2) {
        pad[0].y = c.height - pad[0].h/2;
        pad[0].vy = 0; // Set vertical velocity to 0
    }

    //pad[1] collision with top and bottom of the wall
    if(pad[1].y < 0 + pad[1].h/2) {
        pad[1].y = 0 + pad[1].h/2;
        pad[1].vy = 0; // Set vertical velocity to 0
    }
    if(pad[1].y > c.height - pad[1].h/2) {
        pad[1].y = c.height - pad[1].h/2;
        pad[1].vy = 0; // Set vertical velocity to 0
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

    //pad[0] with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
        generateParticles(ball.x, ball.y, 10); // Generate 10 particles at the collision point
        
    }

    //pad[1] with ball collision
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
        generateParticles(ball.x, ball.y, 10); // Generate 10 particles at the collision point
    }

    particles = particles.filter(p => p.life > 0); // Remove dead particles
    particles.forEach(p => {
        p.move();
        p.draw(ctx); // Ensure ctx is passed here
    });
    //display the scoreboard
    for (let i = 0; i < score.length; i++)
    {
        score[i].innerHTML = "Player " + (i + 1) + ":" + pad[i].score;
    }
    //draw the objects
    pad[0].draw()
    pad[1].draw()
    ball.draw()
    console.log(pad[0].score + " | " + pad[1].score)
}
