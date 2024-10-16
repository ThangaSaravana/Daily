//printing first n fibonacci series


public:
    //Function to return list containing first n fibonacci numbers.
    vector<long long> printFibb(int n) 
    {
        //code here
        vector<long long> f(n);   //handle vector as same as an array....
        if(n==1){
            f[0]=1;
            return f;
        }
        f[0]=f[1]=1;
        for(int i = 2;i<n;i++){
         f[i]=f[i-2]+f[i-1];
        }
        
        
        return f;
    }