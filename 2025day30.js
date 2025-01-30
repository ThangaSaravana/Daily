// find kth rotation gfg ....
class Solution {
    findKRotation(arr) {
        // Code Here
       let min = arr[0]
       
       for(let i = 0;i<arr.length;i++){
           min = Math.min(min,arr[i])
       }
       
       let ans = arr.indexOf(min)
       
       return ans 
    }
}
//.... the time complexity is O(n)

// .. find the minimum distance in an array 

class Solution {

    minDist(arr, x, y) {
        // code here
       let ans = -1 
       let xind = -1 
       let yind = -1 
       let min;
       
       for(let i = 0;i<arr.length;i++){
           if(arr[i]==x){
               xind = i ;
               if(yind!=-1){
                   if(ans==-1){
                       ans = Math.abs(xind - yind)
                   }else{
                         min = Math.abs(xind - yind)
                        ans = Math.min(ans,min)
                   }
               }
           }else if(arr[i]==y){
               yind = i;
               if(xind != -1){
                   if(ans==-1){
                       ans =  Math.abs(xind - yind)
                   }else{
                    min =  Math.abs(xind - yind)
                    ans = Math.min(ans,min)
                   }
               }
           }
       }
       
       return ans
    }
}                   

// .... try to understand this logic .....  we are using single loop 
