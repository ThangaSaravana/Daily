
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

//...Alternates in an Array....
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


//... Immediate smaller element

class Solution {
    immediateSmaller(arr,n){
       //code here
       
       for(let i = 0;i<n-1;i++){
           if(arr[i]>arr[i+1]){
               arr[i]=arr[i+1]
           }else{
               arr[i]=-1
           }
       }
       arr[n-1] = -1
       
       return arr
    }
}