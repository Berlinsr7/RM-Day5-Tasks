var user = [{
    "name": "Berlin",
    "age": "18",
    "gender": "Male",
    "hasLicense": "true"
},
{
    "name": "Sam",
    "age": 17,
    "gender": "Male",
    "hasLicense": "false"
}]

//for loop
for(var i=0; i<user.length; i++)
{
    console.log(`
Using For Loop:    
Name: ${user[i].name} 
Age: ${user[i].age}`);
}

//for in loop
for(var i in user)
{
    console.log(`
Using For-In loop:
Name: ${user[i].name} 
Age: ${user[i].age}`);
}

//for of loop
for(var i of user)
{
    console.log(`
Using For-of loop:
Name: ${i.name} 
Age: ${i.age}`);
}

//forEach loop
user.forEach(ele => console.log(`
Using For Each loop:
name: ${ele.name}
age: ${ele.age}`));