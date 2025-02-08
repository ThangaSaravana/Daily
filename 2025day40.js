class Solution {
    armstrongNumber(n) {
        // code here
        let N = n.toString()
        let n1 = n
        
        let sum = 0
        
        let i = 0
        
        while(i<N.length){
            let num = n1%10
            sum = sum + num*num*num
            n1 = Math.floor(n1/10)
            i++
        }
        
        if(sum === n ){
            return true 
        }else{
            return false
        }
    }
}
