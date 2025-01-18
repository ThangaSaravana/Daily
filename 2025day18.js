class Solution {
    simpleInterest(P, R, T) {
        // code here
        const ans =  (P*R*T)/100
        
        const final =  ans.toFixed(2)
        return final
    }
}

///simple interest sum .... gfg


// second question of the day using chatgpt for the optimized solution .........

if (arr.size() < 2) {
        return 0; // Not enough elements to compute a difference
    }

    std::sort(arr.begin(), arr.end()); // Sort the array in ascending order

    int min = INT_MAX;

    // Compare consecutive elements in the sorted array
    for (int i = 0; i < arr.size() - 1; i++) {
        int diff = arr[i + 1] - arr[i]; // Absolute difference (already positive due to sorting)
        min = std::min(min, diff);      // Update the minimum difference
    }

    return min;



//...Actually this is my brute force method ....and i will solve that using javascript but in c++ i tries with the help of chatgpt

 int minimumDifference(vector<int>& arr) {
      if (arr.size() < 2) {
        return 0; // Not enough elements to compute a difference
    }

    int min = INT_MAX; // Initialize to the maximum possible value

    for (int i = 0; i < arr.size() ; i++) {
        
        for(int j = 0;j<arr.size();j++){
            
            if(i==j){
                continue;
            }else{
                int diff = std::abs(arr[i] - arr[j]); // Compute absolute difference
             if (diff < min) {
                min = diff; //
            }
            
            
             
               } 
        //Update the minimum difference
        }
    }

    return min;
    }

