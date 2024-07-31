/*--------
    Make the Options Button 
    . on click
    . show or hide the `.sides` div
---------*/
var options = document.querySelector(`#options h2`);
options.addEventListener(`click`, e =>document.querySelector(`.sides`).classList.toggle(`hidden`));
/*---------
    Program the two fill inputs to do the following:
    . Display the correct colors on the inputs and outputs and paddles    
    . using an `input` event
        . Change the player's fill property to the value of the input
        . Change the pad's fill property  to the player's fill property
        . Show the fill's hex code in the output div 

-----------*/
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

/*---------
    Program the six key inputs to do the following:
    . Display the correct key names for each player   
    . using a `keydown` event
        .Display the correct key name in the input
        .Change the player's key to the value of the input
        .Show the player's key in the output div 
-----------*/
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