class Solution {
/**
* @param number a1
* @param number a2
* @param number n

* @returns number
*/
    nthTermOfAP(a1, a2, n) {
        // code here
        
        let  diff =  a2-a1
        
        let ans = []
        
        let A1 = a1
        
        ans.push(A1)
        
        for(let i=1;i<n;i++){
           
           A1 = A1+diff
           
           ans.push(A1)
           
        }

//second ques for the day ....


        class Solution{
    printTillN(n){
        //code here
        
        const printnum = (n)=>{
            
             if(n>0){
                 printnum(n-1)
                 process.stdout.write(n + " "); 
             }
             
             return;
        }
        
        printnum(n)
    }
}

        
        return ans[n-1]
    }
}
