// //printing multiplication table .....

for(let i = 1;i<=20;i++){
    console.log(`${i} x ${2} = ${i*2}`)
}

// //printing square numbers.........

for(let i = 1;i<=20;i++){
    console.log(`The Square of ${i} is ${i*i}`);
}

// //printing cube numbers

for(let i = 1;i<=20;i++){
    console.log(`The Cube of ${i} is ${i*i*i}`);
}

//printing  even numbers 

console.log("The even numbers between 1 and 100");
for(let i = 2;i<=100;i++){
  
    if(i%2==0){
        console.log(i);
    }

    // the loop will run 100 times and print only 50 numbers ....in  order to reduce the running time of the loop to only 50 times then we have to use increment inside the loop
    // initialize i to 2
    // console.log(i);
    // i++

}

//printing odd numbers 

console.log("The odd numbers between 1 and 100");
for(let i = 1;i<=100;i++){
  
    if(i%2 !==0){
        console.log(i);
    }

    // the loop will run 100 times and print only 50 numbers ....in  order to reduce the running time of the loop to only 50 times then we have to use increment inside the loop
    // initialize i to 1
    // console.log(i);
    // i++

}