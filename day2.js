// sum  of n natural numbers ...............

var n = 10
let val = 0;
for (let i = 0; i <= n; i++) {
    val += i
}
console.log(val)



// printing multiples of a number 
// here multiples of 2 and 4 ...between 1 to 100


let num = 100
for (let i = 1; i <= num; i++) {
    if ((i % 2 == 0) && (i % 7 == 0)) {
        console.log(i)
    }
}



// print 2 ,6,12,20,30,42.........
// its like multiplying with the second number ....1*2,2*3,3*4,4*5,5*6,6*7

// first using 2 loops 

for (let i = 1; i <= 20; i++) {
    let sum = 0
    for (let j = 1; j <= i; j++) {
        sum += 2 * j
    }
    console.log(sum);
}

//using a single loop


for (let i = 1; i <= 30; i++) {
    let n = i * (i + 1)
    console.log(n);
}


//multiplying numbers in reverse order ex... 1 x 10, 2 x 9 , 3 x 8, 4 x 7, 5 x 6.........

// let  i = 1
// let j = 10

// while(j>=1){                                                 //(j>i)
//     console.log(`${i} x ${j}`);
//     i++
//     j--
// }


// print  in this pattern 1,2,4,7,11,16,22,29,37,46,56,67        ..... take the difference between each numbers  ... it will be  1,2,3,4,5,6,7,8,9

let i = 1
let j = 0
while (i <= 67) {
    i += j
    console.log(i);
    j++
}