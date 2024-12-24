const names = ['Jutin' , 'Sarah' , 'Christopher'] ;

//while loop
console.log('-----while----');
let index = 0 ;
while (index < names.length) {
    const name = names[index];
    console.log(name);
        index++;
}

//for loop
const names = ['Justin' , 'Sarah' , 'Christopher'];

for (let index = 0 ; index < names.length ; index++) {
    const name = names[index];
    console.log(name);
}

// for of
const names = ['Jutin' , 'Sarah' , 'Christopher'] ;

for (let name of names) {
    console.log(name);
}

// do while loop **sniplet