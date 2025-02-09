//Binary array sorting gfg
class Solution {
    // Function to sort the binary array in non-decreasing order
    binSort(arr) {
        // code here
        let zero = 0
        let one = 0
        
        for(let i = 0;i<arr.length;i++){
            if(arr[i]==0){
                zero++
            }else{
                one++
            }
        }
        
        for(let i = 0;i<arr.length;i++){
            if(i<zero){
                arr[i]=0
            }else{
                arr[i]=1
            }
        }
    }
}
