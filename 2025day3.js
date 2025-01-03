class Solution{
    greatestOfThree(A, B, C){
        //code here
        let greater ;
        
        if(A>B&&A>C){
            greater=A
        }else if(B>A&&B>C){
            greater=B
        }else{
            greater=C
        }
        
        return greater
    }
}