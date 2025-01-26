    int divisibleBy5(string N){
        // code here 
        int n = stoi(N);  // stoi dont covert large strings into numbers........   
        if(n%5==0){
            return 1;
        }else{
            return 0;
        }
    }

 // Check if the last digit is '0' or '5'
    char lastDigit = N[N.size() - 1];
    if (lastDigit == '0' || lastDigit == '5') {
        return 1; // Divisible by 5
    }
    return 0; // Not divisible by 5

