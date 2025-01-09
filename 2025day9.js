class Solution {
    // Function to find the size of different data types.
    dataTypeSize(str) {
        // your code here
        let charsize = 1
        let intsize = 4
        let doublesize = 8
        
        if(str=="Character"){
            return charsize
        }else if(str == "Integer"|| str =="Float"){
            return intsize
        }else if(str == "Double"){
            return doublesize
        }else if( str =="Long" ){
            return doublesize
        }
        else{
            return -1
        }
    }
}
//... this is the second ques for this day 

class Solution{
    modify(s){
        //code here
        let res = s.replaceAll(" ","")
        
        return res
    }
}

///third program for the day........


class Solution {
    isDigitSumPalindrome(n) {
        // code here
        let str =  n.toString()
        
        let sum = 0
        
        for(let i = 0;i<str.length;i++){
            
            sum+=parseInt(str[i])
            
        }
        
        let st = sum.toString()
        let str1 = "";
        
        let sumclone =  sum
        
        let i = 0
        while(i<st.length){
            let n = sumclone%10
            str1+=n
            let num = sumclone/10
            sumclone = Math.floor(num)
            i++
        }
        
        if(str1==sum){
            return true
        }else{
            return false
        }
    }
}
