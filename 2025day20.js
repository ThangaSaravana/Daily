//easy question for the day ....

class Solution{
    RedOrGreen(n, str){
        //code here
        
        let rcount = 0
        let gcount = 0
        
        for(let i=0;i<str.length;i++){
            
            if(str[i]=="R"){
                rcount++
            }else{
                gcount++
            }
        }
        
        if(rcount>gcount){
            return gcount
        }else{
            return rcount
        }
    }
}
