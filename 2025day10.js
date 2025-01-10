class Solution 
{
    //Function to remove common characters and concatenate two strings.
    concatenatedString(s1, s2)
    {
        // code here
        let str1 = ''
        let str2 = ""
        
        for(let i = 0;i<s1.length;i++){
            if(!s2.includes(s1[i])){
                str1+=s1[i]
            }
        }
        
        for(let i = 0;i<s2.length;i++){
            if(!s1.includes(s2[i])){
                str2+=s2[i]
            }
        }
        
        let outstr  = str1+str2
        
        if(outstr.length>0){
            return outstr
        }else{
            return -1
        }
        
        
    }
}


/// Set Kth bit 


class Solution{
    setKthBit(n, k){
        //code here
        n = n|(1<<k)
        return n
    }
}


//sort a string 


class Solution {
    //Function to sort the given string.
    sort(s)
    {
        //your code here
        let str = s.split("").sort().join("")
        
        return str
    }
}
