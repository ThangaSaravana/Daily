// common in 3 sorted arrays .... gfg my brute force approach...here....
class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        // Code Here
        
        let ans = []
        
        for(let i = 0;i<arr1.length;i++){
            if(arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
                
                if(!ans.includes(arr1[i])){
                     ans.push(arr1[i])
                }
            }
        }
        
       
        return ans
    
    }
}//........includes is inefficient and the time timecomplexity doesnot met 

// using 3 pointer approach....

class Solution {
    // Function to find common elements in three arrays.
    commonElements(arr1, arr2, arr3) {
        // Code Here
        
       let ans = []
       
       let n1 = arr1.length
       let n2 = arr2.length
       let n3 = arr3.length
       
       // 3 pointer approach......
       let i = 0
       let j = 0
       let k = 0
       
        while(i<n1 && j<n2 && k<n3){
            if(arr1[i]==arr2[j]&&arr1[i]==arr3[k]){
                if(ans.length==0|| ans[ans.length-1]!==arr1[i]){            // here checking for duplicates.........
                    ans.push(arr1[i])
                }
                i++
                j++
                k++
            }else if(arr1[i]<arr2[j]){
                i++
            }else if(arr2[j]<arr3[k]){
                j++
            }else{
                k++
            }
        }
       
       return ans
    
    }
}// this is optimal and gives a time complexity of ....o(n1+n2+n3)

// another method using set ......gives by chat gpt
class Solution {
    commonElements(arr1, arr2, arr3) {
        let set2 = new Set(arr2);
        let set3 = new Set(arr3);
        let ans = new Set(); // To store unique common elements
        
        for (let num of arr1) {
            if (set2.has(num) && set3.has(num)) {
                ans.add(num);
            }
        }
        
        return Array.from(ans); // Convert Set back to array
    }
}
// it looks so optimal and has a time complexity of O(n1+n2+n3)...........


// two sum pair with given sum .............gfg my brute force approach hits the time lint O(n^2)

class Solution {
    twoSum(arr, target) {
        // code here
        
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]+arr[j]==target){
                    return true;
                }
            }
        }
        
          return false
    }
}
