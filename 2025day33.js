
class Solution {
    //Function to print the pattern.
    printTriangle(N)
    {
        //your code here
         let result = '';
    for (let i = N; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += j;
            if (j < i) result += ' ';
        }
        result += '\n';
    }
    console.log(result.trim());
    }
}
