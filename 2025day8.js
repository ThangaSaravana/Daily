class Solution{
    delAlternate(S){
        //code here
        let str1 =  S.split("")
        
        let arr = []
        
        arr.push(str1[0])
        
        for(let i = 2;i<str1.length;i++){
            if(i%2==0){
                arr.push(str1[i])
            }
        }
        
        let result =  arr.join("")
        
        return result
    }
}
