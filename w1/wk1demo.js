let c = document.querySelector('canvas');
let ctx = c.getContext('2d');
let fps = 1000/60;
let timer = setInterval(main, fps);

let box = [];

for(let i = 0; i < 50; i++)
{
    box[i] = new GameObject();
    box[i].x = Math.round(Math.random() * c.width); 
    box[i].y = Math.round(Math.random() * c.height); 
    box[i].vx = 0;
    box[i].vy = rand(5, 15);
    box[i].w = box[i].vy;
    box[i].h = box[i].vy;
}
function main()
{
    ctx.clearRect(0, 0, c.width, c.height);
    
    for(let i = 0; i < box.length; i++)
    {
        box[i].move();
        if (box[i].y > c.height + box[i].h/2)
        {
            box[i].y = 0 - box[i].h/2;
        }
        box[i].render();
    }
   
}

function rand(low, high)
{
    return Math.random() * (high - low) + low;
}

//change the '<script src="game.js"></script>' in the index file to '<script src="wk1demo.js"></script>' to run this file