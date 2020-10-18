const names = ['hanna', 'erna', 'anna', 'sara', 'elisabet', 'eva']

//if I want to add something to each name like "hello" I would use a Loop
// we can define the single value in the for()

//inside the () its possible to add anything 
// (the name) (of) (the thing you want to loop through)
for(name of names){
    console.log(name); // this is going to loop through each of the names 6 times because there are 6 names 

}


for(name of names){
    console.log('hello there ${name}'); //there is a way to add to this - like adding hello or something to each name 
}
//with this all of the names get "hello there" infront of themm 


for(name of names){
    console.log(name);
    if(name === 'Anna'){ 
    console.log('Anna is in my list'); // this is going to run until it gets to the end
    break; //after the name we want is found we can use this command 
    } // now its going to stop running after the name Anna
}
// if we want to stop at some name and not keep on runing through all the names
// we need to make a break - with break it is going to stop looping through all of the names 
// if we want to check if the name equals to something we can use ===



// WHILE LOOP 

// we can create somekind of variable - and when it reaches the top of the variable it will stop looping 


let loading = 0;
//we have to use the while keyword and add a statement into the ()
while(loading < 100){ //while the loading is smaller then 100 its going to keep on looping
    console.log('website is still loading'); // this is going to run forever because the statement will always be true
    
    loading += 1; //this will make it false at some point - we can also use loading++ 

    // so when it reaches 100 times or goes to 101 it change to false 
}
//this statement has to stop running at some point 
// as long as this statement is true, this is going to keep on running
// its going to stay as a "0" - because 0 is of course smaller than a 100 
//we have to make a statement that will make this false at some point 


// OBJECTS 

const user = {
    name: "Sara",
    age: 30,
    married: false, 
    purchases: ["phone", "clothes", "shoes", "coffee"] 
}; // also possible to add function that are specific to this object they are called methods

console.log(user.purchases); // we get the list of the purchases



//for...in
//  variable   object with three properties inside         label      value
var cities = {'Iceland':'Reykjavik', 'Greenland':'Nuuk', 'Denmark':'Copenhagen'}
                //properties


// var in object
// use "let" for loops (recommended)
// looking at the properties that are inside object called in this case "cities"
// the "prop" part can be called whatever I want, just in this case reffered to properties
// prop is a variable that is holding all of those values (inside the cities)
//cities is the thing that its looping through 
//if there are for example 3 things it will loop 3 times 
for(let prop in cities){
    //console.log(prop);
    //console.log(cities[prop])
// if I want to get all of the information in one statement I will use
    console.log("in", prop, "the capital is", cities[prop]);
//  this will look like 
// "in Iceland the capital is Reykjavik" and so on with all of the cities. 
}
// we use the for...in loop - if looking at a object instead of array 
//and you dont know how many items there are because the length is missing
//still the variable as a counter through the loop 
// the for.. in can also be used for a Array 

// it would just be 0, 1, 2, 3, 4 instead of in this case the country name. 
// would be like: 

var pets = ["atlas", "klaki", "marvel", "bangsi"]
for(let propp in pets){
    console.log("in", propp, "we have the names", pets[propp]);
    // this will be: "in 0 we have the name atlas" "in 1 we have the name klaki" and so on. 
}