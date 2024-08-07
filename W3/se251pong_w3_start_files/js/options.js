
var options = document.querySelector(`#options h2`);
options.addEventListener(`click`, e =>document.querySelector(`.sides`).classList.toggle(`hidden`));

var player_controls = document.querySelectorAll(`.op`);

player_controls.forEach((player_control, i) => {

    var color = Array.from(player_control.querySelectorAll(`.fill, .stroke`));
    color.forEach((input, index) => {
        input.value = player[i][index === 0 ? `fill` : `stroke`];
        input.nextElementSibling.innerHTML = player[i][index === 0 ? `fill` : `stroke`];
        input.addEventListener(`input`, e => {
            player[i][index === 0 ? `fill` : `stroke`] = e.target.value;
            player[i].pad[index === 0 ? `fill` : `stroke`] = e.target.value;
            input.nextElementSibling.innerHTML = e.target.value;
        });
    });

    var keys = Array.from(player_control.querySelectorAll(`.u, .d, .s`));
    keys.forEach((key, j) => {
        key.value = player[i].keys[j === 0 ? `u` : j === 1 ? `d` : `s`];
        key.nextElementSibling.innerHTML = player[i].keys[j === 0 ? `u` : j === 1 ? `d` : `s`];
        key.addEventListener(`keydown`, e => {
            key.value = e.key;
            player[i].keys[j === 0 ? `u` : j === 1 ? `d` : `s`] = e.key;
            key.nextElementSibling.innerHTML = e.key;
        });
        key.addEventListener(`focus`, e => currentState = `pause`);
        key.addEventListener(`blur`, e => currentState = `game`);
    });
});

//Create the slider and number inputs
var slider = Array.from(document.querySelectorAll('input[type="range"]'));
var number = Array.from(document.querySelectorAll('input[type="number"]'));-
slider.forEach((i,num) => {
    i.value = ball.fill.num;
    number[num].value = i.value;    
    i.addEventListener('input', e => {
        ball.fill = `rgb(${slider[0].value},${slider[1].value},${slider[2].value})`;
        i.nextElementSibling.innerHTML = i.value;
        number[num].value = i.value;
    });
});
number.forEach((i,num) => {
    i.addEventListener('input', e => {
        slider[num].value = i.value;
        ball.fill = `rgb(${slider[0].value},${slider[1].value},${slider[2].value})`;
    });
});
//-------------OLD WAY OF DOING IT(BEFORE CHALLENGE)-----------------
/*
var fill = document.querySelectorAll(`.fill`);
fill.forEach((input, index) => {
    // Set each input's value to equal the player's fill property
    input.value = player[index].fill;
    
    // Set the output div's inner HTML to equal the player's fill property
    input.nextElementSibling.innerHTML = player[index].fill;
    
    // Add an `input` event to the fill input
    input.addEventListener(`input`, e => {
        // Change the appropriate player's fill color so that it uses the fill input's value
        player[index].fill = e.target.value;
        
        // Set the appropriate pad's fill to equal the player's fill
        player[index].pad.fill = player[index].fill;
        
        // Update the output to display the appropriate player's fill
        input.nextElementSibling.innerHTML = player[index].fill;
    });
});
var stroke = document.querySelectorAll(`.stroke`);
stroke.forEach((input, index) => {
    //set the input's value to the appropriate player's current stroke property
    input.value = player[index].stroke;
    //set the output div to display the player's stroke property
    input.nextElementSibling.innerHTML = player[index].stroke;

    //add an input event to the stroke input
    input.addEventListener(`input`, e => {
        //change the appropriate player's stroke property to equal the input's value
        player[index].stroke = e.target.value;
        //change the appropriate pad's stroke property to equal the player's stroke property
        player[index].pad.stroke = player[index].stroke;
        //set the output div to display the new stroke property
        input.nextElementSibling.innerHTML = player[index].stroke;
    });
});

var up = document.querySelectorAll(`.u`);
up.forEach((input, index) => {
    //set the input's value to the appropriate player's current keys u property
    input.value = player[index].keys.u;
    //focus event
    input.addEventListener(`focus`, e => {
        currentState = `pause`;
    })
    //blur event
    input.addEventListener(`blur`, e => {
        currentState = `game`;
    })
    //key down event
    input.addEventListener(`keydown`, e => {
        //make the input value equal the key that was pressed
        input.value = e.key;
        //set the player's u key to equal the new value of the input
        player[index].keys.u = e.key;
        //set the output div to display the new key
        input.nextElementSibling.innerHTML = e.key;

    });

});

var down = document.querySelectorAll(`.d`);
down.forEach((input, index) => {
    //set the in;put's value to the appropriate player's current keys d property
    input.value = player[index].keys.d;
    //focus event
    input.addEventListener(`focus`, e => {
        currentState = `pause`;
    })
    //blur event
    input.addEventListener(`blur`, e => {
        currentState = `game`;
    })
    //key down event
    input.addEventListener(`keydown`, e => {
        //make the input value equal the key that was pressed
        input.value = e.key;
        //set the player's d key to equal the new value of the input
        player[index].keys.d = e.key;
        //set the output div to display the new key
        input.nextElementSibling.innerHTML = e.key;

    });
});

var straight = document.querySelectorAll(`.s`);
straight.forEach((input, index) => {
    //set the input's value to the appropriate player's current keys s property
    input.value = player[index].keys.s;
    //focus event
    input.addEventListener(`focus`, e => {
        currentState = `pause`;
    })
    //blur event
    input.addEventListener(`blur`, e => {
        currentState = `game`;
    })
    //key down event
    input.addEventListener(`keydown`, e => {
        //make the input value equal the key that was pressed
        input.value = e.key;
        //set the player's s key to equal the new value of the input
        player[index].keys.s = e.key;
        //set the output div to display the new key
        input.nextElementSibling.innerHTML = e.key;

    });
});
*/


