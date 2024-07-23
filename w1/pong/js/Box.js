class Box
{
    constructor()
    {
        this.x = c.width/2
        this.y = c.height/2
        this.w = 100
        this.h = 100
        this.color = `red`
        this.vx = 0
        this.vy = 0
        this.force = 1;
    }

    draw()
    {
        ctx.save()
            ctx.translate(this.x, this.y)
            ctx.fillStyle = this.color
            ctx.fillRect(0-this.w/2, 0-this.h/2, this.w, this.h)
        ctx.restore()
    }

    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    left(){return this.x - this.w/2}
    right(){return this.x + this.w/2}
    top(){return this.y - this.h/2}
    bottom(){return this.y + this.h/2}

    collide(obj)
    {
        if(
            this.right() > obj.left() &&
            this.left() < obj.right() &&
            this.bottom() > obj.top() &&
            this.top() < obj.bottom()
        )
        {
            return true
        }
        return false
    }

}
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocity = { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 };
        this.size = Math.random() * 5 + 1;
        this.life = 100; // Decrease this value in the game loop to make the particle "fade"
        this.color = 'red';
    }

    move() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.life -= 1;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

