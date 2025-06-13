
// function to determine if user is attmepting a risky action in game, used to calculate answer in success chart.//
function riskyActionCheck(){
    riskyAction = prompt(`Are you attempting a 'Risky Action'? Enter 'yes' or 'no'.`).toUpperCase()

    if (riskyAction != 'YES' && riskyAction != 'NO'){
        riskyActionCheck();
    }else{
        return riskyAction;
    }
}


// function returns string yes or no after checking if model is conmsidered "downed".//
function downedModelCheck(){
    downedModel = prompt(`Is the model currently downed? Enter "yes" or no".`).toUpperCase()

    if (downedModel != 'YES' && riskyAction != 'NO'){
        downedModelCheck();
    }else{
        return downedModel;
    }
}

function roll(){

    // extra dice calculator. Calculates number of extra dice roll based on positivce and negative modifiers------//

    let positiveDice = 1;
    let negativeDice = -1;

    positiveDice *= parseInt(prompt("Enter Number of '+DICE'"))
    negativeDice *= parseInt(prompt("Enter Number of '-DICE'"))

    
    let totalExtra = positiveDice + (negativeDice);
    if (Number.isNaN(totalExtra) == true){
        return(document.getElementById('diceRolled').innerHTML = `Valid input not detected. Please try again.`);

    }
    
    extraDice = Math.abs(totalExtra)
    
    console.log("+DICE:"+negativeDice)
    console.log("-Dice:"+positiveDice)
    console.log(`${extraDice}D6 added to roll.`)
    
    riskyActionCheck();    
    // dice rolling function - rolls dice 2+extradice times, stores sorted into an array-------------//

    diceRolledArray = [];
    numOfDice = 2 + extraDice;

    // numOfDice is equal to the total number of dice rolling for the action.

    // dice rolling---------------------------//
    for (i = 0; i < numOfDice; i++){
        roll = Math.floor(Math.random()*6)+1
        // console.log(`*Rolls dice*`)
        console.log(roll)
        diceRolledArray.push(roll)
        console.log(diceRolledArray)

        // sorting part-----------------------//
        diceRolledArray.sort((a,b) => a-b);
        console.log(diceRolledArray)
        
        }

    /*calculates total score for the roll--------------*/ 

    let highestTwo = diceRolledArray[(diceRolledArray.length)-1] + diceRolledArray[(diceRolledArray.length)-2];

    let lowestTwo = diceRolledArray[0]+ diceRolledArray[1];

    /* purpose here is for the program to decide whether to total the two highest, or two lowest numbers
    depending on if the value from the variable 'total' is positive or negative.*/
 
    document.getElementById('diceRolled').innerHTML = `Rolling ${numOfDice}D6, you roll a ${diceRolledArray}.`;
    

    if (totalExtra < 0 ){
        totalScore = lowestTwo;
        // console.log(`The lowest two numbers are chosen, your result is: ${totalScore}`);
        // alert(`The lowest two numbers are chosen, your result is: ${totalScore}.`);
        document.getElementById('diceResult').innerHTML = `The lowest two numbers are chosen, your result is: ${totalScore}`;
        
    } else {
        totalScore = highestTwo;
        // console.log(`The highest two numbers are chosen, your result is: ${totalScore}`);
        // alert(`The highest two numbers are chosen, your result is: ${totalScore}`);
        document.getElementById('diceResult').innerHTML = `The highest two numbers are chosen, your result is: ${totalScore}`;
    }


    // action Success Chart check--------------//
    console.log(`Consulting the Action Success Chart and various ancient texts...`);

    if (totalScore >= 12){
        console.log(`Critial Success (Ranged and Melee attacks add + 1 DICE to injury rolls.)!`);
        document.getElementById('actionResult').innerHTML = `Critial Success! (Ranged and Melee attacks add + 1 DICE to injury rolls.)`;
    } else if (totalScore >= 7 && totalScore <= 11) {
        console.log(`Your action is a success.`);
        document.getElementById('actionResult').innerHTML = `Congratulations, your action is a success.`;
    } else if (totalScore < 6 && riskyAction == 'YES'){
        console.log(`You utterly failed your action attempt, your model's activation ends.`);
        document.getElementById('actionResult').innerHTML = `You failed your risky action attempt, and so your model's activation ends.`;
    } else{
        console.log(`You failed your action attempt. You may not take this same action again.`);
        document.getElementById('actionResult').innerHTML = `You failed your action attempt. You may not take this same action again.`;
    }

}

document.getElementById("tcDice").addEventListener("click", roll);

// injury dice roll//

function injuryRoll(){

    let bloodMarkers = 0
    let positiveDice = 1;
    let negativeDice = -1;
    let bloodbath = false;
    let downedModel = '';
    diceRolledArray = [];
    const D6 = 2;

    
    // Runs downedModelCheck---//
    downedModelCheck();

    bloodMarkers += parseInt(prompt("Enter the number of blood markers being used:"))*-1 
    positiveDice *= parseInt(prompt("Enter the amount of '+DICE':"))
    negativeDice *= parseInt(prompt("Enter the amount of '-DICE' other than blood markers:"))
    // prompt("is the model down?")

    
    let totalExtra = positiveDice + (negativeDice + bloodMarkers);
    if (Number.isNaN(totalExtra) == true){
        return(document.getElementById('diceRolled').innerHTML = `Valid input not detected. Please try again.`);

    }
    
    extraDice = Math.abs(totalExtra)
    
    console.log("+DICE:"+negativeDice)
    console.log("-Dice:"+positiveDice)
    console.log(`${extraDice}D6 added to roll.`)

    if (bloodMarkers >=6){
        bloodbath = true;
        D6 = 3;

    } else if (downedModel == True && bloodMarkers >= 3){
            bloodbath = true;
            D6 = 3;
    }

    numOfDice = D6 + extraDice;



    //Roll loop-------------------------------------------------//

    for (i = 0; i < numOfDice; i++){
        roll = Math.floor(Math.random()*6)+1
        // console.log(`*Rolls dice*`)
        console.log(roll)
        diceRolledArray.push(roll)
        console.log(diceRolledArray)

        // sorting part-----------------------//
        diceRolledArray.sort((a,b) => a-b);
        console.log(diceRolledArray)
        
        }

         /*calculates total score for the roll--------------*/ 

    let highestTwo = diceRolledArray[(diceRolledArray.length)-1] + diceRolledArray[(diceRolledArray.length)-2];

    let lowestTwo = diceRolledArray[0]+ diceRolledArray[1];

     /* purpose here is for the program to decide whether to total the two highest, or two lowest numbers
    depending on if the value from the variable 'total' is positive or negative.*/
 
    // document.getElementById('diceRolled').innerHTML = `Rolling ${numOfDice}D6, you roll a ${diceRolledArray}.`;

    // ^^^^^^^fix line above^^^^^^
    

    if (totalExtra < 0 ){
        totalScore = lowestTwo;
        // console.log(`The lowest two numbers are chosen, your result is: ${totalScore}`);
        // alert(`The lowest two numbers are chosen, your result is: ${totalScore}.`);
        document.getElementById('diceResult').innerHTML = `The lowest two numbers are chosen, your result is: ${totalScore}`;
        
    } else {
        totalScore = highestTwo;
        // console.log(`The highest two numbers are chosen, your result is: ${totalScore}`);
        // alert(`The highest two numbers are chosen, your result is: ${totalScore}`);
        document.getElementById('diceResult').innerHTML = `The highest two numbers are chosen, your result is: ${totalScore}`;
    }
    
}

function dTwentyRoller(){

    numOfDice = parseInt(prompt(' enter number of dice to roll:'))
    diceResult = []

    for (i = 0; i < numOfDice; i++){
        roll = Math.floor(Math.random()*20)+1
        console.log('Rolling')
        console.log(roll)
        diceResult.push(roll)
    }

    console.log(diceResult)
    if (numOfDice > 1) {
        
        document.getElementById('d20Result').innerHTML = `You rolled ${diceResult.splice(0, diceResult.length-1)}, and ${diceResult.splice(diceResult[diceResult.length-2])} `;
     } else{
        document.getElementById('d20Result').innerHTML = `You rolled a ${diceResult}`;
     }
}

document.getElementById("d20BTN").addEventListener("click", dTwentyRoller);

