
//value equal to index value



class Solution {
    // Function to find elements in the array that are equal to their index.
    valueEqualToIndex(arr) {
        // code here
           let arr1 = []
        for(let i = 0;i<=arr.length;i++){
            if(arr[i]==i+1){
                 arr1.push(i+1)
               
            }
        }
         return arr1
    }
}

class Solution {
    print(arr) {
        // code here
        let arr1 = []
        arr1.push(arr[0])
        
        for(let i=2;i<arr.length;i++){
            if(i%2==0){
                arr1.push(arr[i])
            }
        }
        
        console.log(arr1.join(" "))
    }
}