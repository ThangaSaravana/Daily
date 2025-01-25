// sum of n natural numbers using c++
  public:
    int sumOfNaturals(int n) {
        // code here
        
        int sum = 0;
        
        for(int i = 1;i<=n;i++){
            sum=sum+i;
        }
        
        return sum;
    }
