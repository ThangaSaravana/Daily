class Solution {
    // Function to find equilibrium point in the array.
    findEquilibrium(arr) {
        // code here
        
        let lsum = 0
        let rsum = 0
        
        for(let i=0;i<arr.length;i++){
            rsum +=arr[i]
        }
        
        for(let j=0;j<arr.length;j++){
            rsum = rsum - arr[j]
            
            if(lsum == rsum){
                return j
            }
            
            lsum += arr[j]
        }
        
        return -1
    }
}
//first question find the equilibirium point ...solved with the help of youtube....
//chat gpts story for the questiom 

/*   
### Explanation and Story

Let's imagine you're managing a see-saw game in a park. Your task is to find the **balance point** (equilibrium point) on the see-saw so that it stays perfectly balanced. Here's the code, explained step by step with the story:

---

### Code and Story Explanation

#### **The Problem**:
You're given an array of people's weights on a see-saw, and you need to find the point where the see-saw balances. The balance point is where the sum of weights on the left equals the sum of weights on the right.

---

#### **Code**: 
```javascript
class Solution {
    // Function to find the equilibrium point in the array.
    findEquilibrium(arr) {
        // code here
        
        let lsum = 0
        let rsum = 0
```

1. **Initialization**:
   - `lsum` (left sum) is like tracking the total weight of people on the left of the balance point.
   - `rsum` (right sum) keeps track of the total weight of all people.
   - Both start at `0`.

   🛝 **Story**: You set up a see-saw with a list of people's weights. First, you need to calculate the total weight of everyone (`rsum`) before figuring out the balance.

---

#### **Code**: 
```javascript
        for(let i = 0; i < arr.length; i++) {
            rsum += arr[i];
        }
```

2. **Calculate Total Weight (`rsum`)**:
   - This loop calculates the total weight of everyone on the see-saw. Every person's weight is added to `rsum`.

   🛝 **Story**: You walk around the see-saw and ask everyone their weight, adding it to a notebook. By the end, you know the total weight of everyone.

---

#### **Code**:
```javascript
        for(let j = 0; j < arr.length; j++) {
            rsum = rsum - arr[j];
```

3. **Simulate Balancing**:
   - At each step, subtract the weight of the person at position `j` from `rsum`. This simulates removing the right side of the see-saw as you consider each position as a potential balance point.

   🛝 **Story**: You imagine removing the weight of a person one by one from the right. This helps you focus on the "remaining right weight" at each position.

---

#### **Code**:
```javascript
            if (lsum == rsum) {
                return j;
            }
```

4. **Check Balance**:
   - Compare the current left sum (`lsum`) with the right sum (`rsum`). If they are equal, you've found the balance point, and return the index `j`.

   🛝 **Story**: After removing a person from the right, you check: "Is the weight of people to the left the same as the remaining weight to the right?" If yes, you've found the balance point.

---

#### **Code**:
```javascript
            lsum += arr[j];
```

5. **Update Left Sum (`lsum`)**:
   - Add the current person's weight (`arr[j]`) to `lsum` to account for them as part of the left side.

   🛝 **Story**: Once you've checked a position, you imagine moving that person to the left of the see-saw, adjusting the left-side weight.

---

#### **Code**:
```javascript
        }
        return -1;
    }
}
```

6. **No Balance Point**:
   - If no balance point is found after looping through all positions, return `-1`.

   🛝 **Story**: If the see-saw cannot be balanced, you inform the players: "No balance point here, sorry!"

---

### Example Walkthrough

Input: `arr = [1, 3, 5, 2, 2]`

1. **Total Weight (`rsum`)**:
   - `1 + 3 + 5 + 2 + 2 = 13`

2. **Start Checking Each Position**:
   - `j = 0`:  
     - `rsum = 13 - 1 = 12`
     - `lsum = 0` (not equal, continue)

   - `j = 1`:  
     - `rsum = 12 - 3 = 9`
     - `lsum = 1` (not equal, continue)

   - `j = 2`:  
     - `rsum = 9 - 5 = 4`
     - `lsum = 4` (equal! Return `2`)

Output: The equilibrium point is at index `2`.

---

### Summary

This algorithm efficiently finds the balance point by:
- Precomputing the total weight (`rsum`).
- Iterating through the array, adjusting `lsum` and `rsum` dynamically.
- Returning the first index where `lsum == rsum`.

In our story, the see-saw balanced at position `2`, and everyone had fun! 😊

*/


//missing and repeating ...gfg 

/// by ceating a new array 

class Solution {
    // Function to find two repeating elements in an array of size n.
    findTwoElement(arr) {
        // code here
        
        let ans = []
        
        for(let i =0 ;i<arr.length-1;i++){
            
            if(arr[i]==arr[i+1]){        // this works only for consecutive repeating elements 
                ans.push(arr[i])
            }
            
            
        }
        for(let i = 1;i<=arr.length;i++){
            
           if(!arr.includes(i)){
                ans.push(i)
            }
            
            
        }
        
      
        
        return ans
    }
}
/// but we have to solve the question without creating the new array

//..This is the correct bruteforce solution for this question ......missing and repeating ......

class Solution {
    // Function to find two repeating elements in an array of size n.
    findTwoElement(arr) {
        // code here
        
       let repeating;
       
       let missing;
       
       for(let i = 1;i<=arr.length;i++){
             let count = 0
             
             for(let j= 0;j<arr.length;j++){
                 if(i==arr[j]){
                     count ++
                 }
             }
             
             if(count == 2){
                 repeating = i
             }else if(count == 0){
                 missing = i
             }
       }
       
       return [repeating,missing]
     
    }
}

//.... using hashmap can reduce the time complexity ............

///...solved this question with take u forward with implementing a hasharr ..... in c++ that will be in c+++ 
