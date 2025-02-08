//Amstrong Number --->  gfg
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
//...ceil the floor --gfg

class Solution {
    getFloorAndCeil(x, arr) {
        // code here
        let floor = -1
        let ceil = -1
        
        for(let i=0;i<arr.length;i++){
            if(arr[i]<=x){
                if(floor!=-1){
                    let num = Math.max(arr[i],floor)
                    floor = num
                }else{
                    floor = arr[i] 
                }
               
            }
            if(arr[i]>=x){
                if(ceil!=-1){
                    let num = Math.min(arr[i],ceil)
                    ceil = num
                }else{
                    ceil = arr[i]
                }
                
            }
        }
        
        let ans = [floor,ceil]
        
        return ans
    }
}
