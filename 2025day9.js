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
