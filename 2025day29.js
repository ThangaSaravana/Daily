class Solution {
    utility(number) {
        // write your if statement here
        if(number>100){
            console.log("Big")
            // return "Big"
        }else{
            console.log("Number")
            // return "Number"
        }
        // write your else statement here
    }
}
class Solution{
    LastIndex(s, p){
        //code here
        let ind = -1 
        
        for(let i = 0;i<s.length;i++){
            if(p===s[i]){
                ind = i
            }
        }
        
        return ind 
    }
}
