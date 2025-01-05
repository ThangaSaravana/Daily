class Solution {
    //Function to remove consonants from a string.
    removeConsonants(s)
    {
        //your code here
        let arr = s.split("")
        let ans = []
        let out = "No Vowel"
        
        const handleVowles = (val)=>{
            if(val=="a" || val == "A" || val=="e" || val=="E" || val =="i" || val=="I" || val=="o" || val=="O" || val=="u"|| val=="U"){
                 ans.push(val)
            }
        }
        
        for(let i = 0;i<arr.length;i++){
            handleVowles(arr[i])
        }
        
        if(ans.length>0){
            return ans.join("")
        }else{
            return out;
        }
    }
}