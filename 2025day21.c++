// solved the missing and repeating arr question with c++ with TUF tutorial

 public:
    vector<int> findTwoElement(vector<int>& arr) {
        // code here
        
        int n = arr.size();
        
        int hasharr[n+1] = {0};      // initializing a hasharr with the value  of all elements as 0
        
        for(int i = 0;i<n;i++){
            hasharr[arr[i]]++;         // updating the value in the hash array .. like increasing the count ...[{0,0},{1,1},{2,2},{3,0},{4,2}]...... this is the example of a hash arr
        }
        
        int missing = -1 ;
        int repeating = -1;
        
        for(int j=1;j<=n+1;j++){
            if(hasharr[j]==2){
                repeating =j;
            }else if(hasharr[j]==0){
                missing = j;
            }
            
            if(missing != -1 && repeating !=-1){
                break;
            }
        }
        
        return {repeating,missing};
    }
