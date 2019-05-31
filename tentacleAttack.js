console.log("prepare yourself for tentacles!!");
/*
    a vicious squid beast from the deep

    Please note that our squid beast is an object. 

    Our object contains not just values like string, booleans and numbers, but also functions too

*/
let antagonist = {
    beastType: "Giant Squid Beast",
    numTentacles: 8,
    beastColour: "black",
    numBeaks: 1,
    preferNomNoms: "humans flesh",
    isHungry: true,
    hasMercy: false,
    gender:"male",
    /*
        our antagonist likes to eat lunch, but he isn't a perfect predator.  Sometimes he misses his prey.  
        Every time this page runs, the outcome will be different
        morsel is the nickname for the instance of a beachgoer that the squid beast is trying to eat
    */
    eatLunch: function(morsel){
        //in javascript our percentages go from 0 to 1.  0 is 0% and 1 is 100%
        //our squid beast has a 49% chance of getting his prey
        const eaten = 0.49;
        //Math.random() is a function for getting a random number between 0 and 1
        const escapeChance = Math.random();
        //if the random escape chance number is high than the eaten number, the prey escapes
        if(escapeChance > eaten){
            return `Not today squidbeast! ${morsel.name} escapes!`;
        }
        return `${morsel.name}:  Auuuuggghhh!  Nooooo!  The terror!`;
    }
};

/*
    our protagonists are beach goers

    Since we have more than one of them, we make an ES5 function

    an ES5 function is a class, one that is named with an upper case letter at the start
    BeachGoer instead of beachGoer, the difference is the upper case B at the start of the name

    our BeachGoer is a blueprint, it lays out what belongs to every beachgoer.
    they all have names, species and can play fetch.
*/
function BeachGoer(species,name){
    this.species = species;
    this.name = name;
    console.log(`Hi, I'm ${this.name} and I'm a ${this.species}`);
    this.playFetch = function(player){
        console.log(`${this.name} is playing fetch with ${player}`);
    }
};
/*
we make two beachgoers, Parker and his wonder dog Spot
Since beachgoers all have a species and a name, we pass in a species and a name for each of them

we declare each beachgoer with let, and use the "new" keyword to tell javascript that we are building an instance of the class/blueprint of BeachGoer
*/
let spot = new BeachGoer("Poodle", "Spot");
let parker = new BeachGoer("Human", "Parker");

/*
    our antagonist, the dastardly squidbeast views our beachgoers as food.  OH NO!
    we declare an array called "squidlyNomNoms" which holds references to each of our beach goers
*/
let squidlyNomNoms = [parker, spot]; 
/*
    who will survive?  will anyone survive?
    To start our story, we place our instructions inside of our "theTerrorOfFetch" function
*/
function theTerrorOfFetch(){
    console.log("it was a delightful day on the beach when, the squidbeast came for it prey!!!");
    /*
        spot and parker both contain the function play fetch.
        
        In spots version, this.name refers to "Spot", and we pass in who spot is playing fetch with

        squidlyNomNoms[0] represents the parker instance.

        so when we ask it to look for squidlyNomNoms[0].name, it returns "Parker"
    */
    spot.playFetch(squidlyNomNoms[0].name);
    /*
        in last weeks class we talked about loops. 

        loops are great because we can code instructions once, and our loop runs them on all members of our array

        our antagonist(the deadly squid beast), wants to eat our beach goers.  The number of beach goers changes all the time
        lets make a loop to account for any number of members of squidlyNomNoms
    */
    for(let i=0;i<squidlyNomNoms.length;i++){
        console.log(antagonist.eatLunch(squidlyNomNoms[i]));    
    }
};
/*
    when we call theTerrorOfFetch()  we start our story
*/
theTerrorOfFetch();


/*
    Bonus:  How would we toggle the value of hungry in this object?  Check out the code for the answer
*/
let appetite = {
    isHungry: true,
    toggleHungry: function(){
        console.log(`before: ${this.isHungry}`);
        //isHungry is a boolean, it must be either true or false.  ! means "not"
        //if something isn't true, it is false
        //if something isn't false, it is true
        this.isHungry = !this.isHungry;
        console.log(`after: ${this.isHungry}`);
    }
}
//lets toggle it back and forth to see what happens!  Check your console log :)
appetite.toggleHungry();
console.log("play it again Sam!");
appetite.toggleHungry();


