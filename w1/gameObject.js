class GameObject
{
    constructor ()
    {
        this.x = c.width/2;
        this.y = c.height/2;
        this.w = 100;
        this.h = 100;
        this.vx = 0;
        this.vy = 0;
        this.color = `#ffffff`;
    }
    move()
    {
        this.x += this.vx;
        this.y += this.vy;
    }

    render()
    {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.fillRect(0-this.w/2, -this.h/2, this.w, this.h);
        ctx.restore();
    }
}
