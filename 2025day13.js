//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', () => {
    inputString = inputString.trim().split('\n').map(str => str.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine().trim());
    for (let i = 0; i < t; i++) {
        let arr = readLine().trim().split(" ").map(x => parseInt(x));
        let obj = new Solution();
        let res = obj.arraySortedOrNot(arr);
        console.log(res ? "true" : "false");
    }
}

// } Driver Code Ends


// User function Template for javascript

class Solution {
    arraySortedOrNot(arr) {
        // code here
        let sorted = true
        
        for(let i = 0; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                return false
                break
            }
        }
        
        return sorted
        }
    
}
