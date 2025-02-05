class Solution {
    getPairs(arr) {
        // code here
        // WE gonna use 2 pointer approach here for a optimized solution.....
        let answer = []
        let i = 0
        let j = arr.length-1
        
        let nwarr = arr.sort((a,b)=>a-b)
        
        while(i<j){
            if(nwarr[i]+nwarr[j]>0){
               j--
            }else if(nwarr[i]+nwarr[j]<0){
               i++
            }else{
                let ans = []
                
                if(nwarr[i]+nwarr[j]==0){
                    ans.push(nwarr[i])
                    ans.push(nwarr[j])
                }
                
                answer.push(ans)
                
                i++
                j--
                
                while(i<j && nwarr[i]==nwarr[i-1]){
                   i++
                }
                
                while(i<j && nwarr[j]==nwarr[j+1]){
                    j--
                }
                
                
            }
        }
        
        return answer
        
    }
}
