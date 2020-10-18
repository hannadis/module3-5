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
    name: "Erna"
    age: 30,
    married: false, 
    purchases: ["phone", "clothes", "shoes", "coffee"] 
};

console.log(user.purchases);