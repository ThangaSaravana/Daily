// const findTriplet =(arr)=> {
//     // code here
//      let triplet = false
    
//     for(let i = 0;i<arr.length-2;i++){
//         if(arr[i]+arr[i+1]==arr[i+2]){
//            triplet = true
//         }
//     }
     
//      console.log(triplet)  
// }

// findTriplet([6865 ,8921 ,22468, 20392, 27390, 31530, 8847 ,26964 ,20505, 21692, 7535 ,31540 ,18233 ,19549 ,30152 ,12717, 28032 ,25526 ,23414 ,7868, 26691, 22744, 18960, 28208 ,6250 ,7192 ,30569, 10775, 7450 ,22557, 2909])


// //elements in range 
// class Solution {
//     check_elements(arr, n, A, B) {
//         // code here
//         let contains = true
//         let nosarr =  []
//         for(let i = A;i<=B;i++){
//             nosarr.push(i)
//         }
//         for(let i = 0;i<nosarr.length;i++){
//             if(!arr.includes(nosarr[i])){
//                 contains = false
//             }
//         }
        
//         return contains
//     }
// }
// //count squares in gfg 
// class Solution {
//     // Function to count the number of perfect squares.
//     countSquares(n) {
//         // your code here
//         let sqrarr = []
//         for(let i = 1;i<n;i++){
//             let sqr =  i*i
//             if(sqr<n){
//                 sqrarr.push(sqr)
//             }else if(sqr>n){
//                 break;
//             }
//         }
//         return sqrarr.length
//     }
// }

// //find the median 
// class Solution {
//     findMedian(arr) {
//         // code here.
//         let n = arr.length 
//         let newarr  = arr.sort((a,b)=>a-b)
        
//         if(n%2==0){
//             let mid = n/2
//             let avg =  (newarr[mid-1]+newarr[mid])/2
//             return Math.floor(avg)
            
//         }else{
//             let mid = Math.floor(n/2)
//             return Math.floor(newarr[mid])
//         }
//     }
// }

const is_palindrome=(n)=>{
    //code here
   
    let narr = n.toString().split("")
    // console.log("now arr",narr)
    let clone =[...narr]                       //This is the best practice while cloning an array because sometimes it will modify the original array so always clone like this 
    let arrn =  clone.reverse()
    console.log(arrn )
    if(narr.join("")===arrn.join("")){
        // console.log("this is narr",narr)
        // console.log("yes")
        return "Yes"
    }else{
        // console.log("No")
          return "No"
       
    }
    
}
is_palindrome(10)


let arr = ['0','1']
console.log(arr.reverse())