class Solution 
{
    //Function to check if the number is sparse or not.
    isSparse(n)
    {
        // code here
         return (n & (n >> 1)) === 0 ? 1 : 0;
    }
}
