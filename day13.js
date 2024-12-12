const findTriplet =(arr)=> {
    // code here
     let triplet = false
    
    for(let i = 0;i<arr.length-2;i++){
        if(arr[i]+arr[i+1]==arr[i+2]){
           triplet = true
        }
    }
     
     console.log(triplet)  
}

findTriplet([6865 ,8921 ,22468, 20392, 27390, 31530, 8847 ,26964 ,20505, 21692, 7535 ,31540 ,18233 ,19549 ,30152 ,12717, 28032 ,25526 ,23414 ,7868, 26691, 22744, 18960, 28208 ,6250 ,7192 ,30569, 10775, 7450 ,22557, 2909])


//elements in range 
class Solution {
    check_elements(arr, n, A, B) {
        // code here
        let contains = true
        let nosarr =  []
        for(let i = A;i<=B;i++){
            nosarr.push(i)
        }
        for(let i = 0;i<nosarr.length;i++){
            if(!arr.includes(nosarr[i])){
                contains = false
            }
        }
        
        return contains
    }
}
