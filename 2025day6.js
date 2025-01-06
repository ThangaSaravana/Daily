class Solution {
    isVowel(c) {
        //code here
        let v = c.toLowerCase()
        
        if(v=="a" || v=="e" || v=="i" || v=="o" || v=="u" ){
            return "YES"
        }else{
            return "NO"
        }
    }
}