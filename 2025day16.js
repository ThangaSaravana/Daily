class Solution {
    pushZerosToEnd(arr) {
        // code here
        
        let normalarr = []
        let zeroarr = []
        
        for(let i =0;i<arr.length;i++){
            if(arr[i]==0){
                zeroarr.push(0)
            }else{
                normalarr.push(arr[i])
            }
        }
        
        let ans = normalarr.concat(zeroarr)
        arr = ans
    }
}

// this is the first question for the day and the question is moving all zeros to the end of the array ...here i dont want to create an extra array ...modify the same array

//...second question for the day......Transition Point gfg


class Solution {
    transitionPoint(arr) {
        // code here
        if(arr[0]==1){
            return 0
        }
        
        for(let i = 0;i<arr.length;i++){
            if(arr[i]!==0){
                return i
                break
            }
        }
        
        return -1
    }
}

//...the third program of the day...find pair given difference.........

class Solution {
    /**
     * @param number[] arr
     * * @param number x
     * @returns boolean
     */
    findPair(arr, x) {
        // code here
        
        if(arr.length==1){
            return false
        }
        
        
        for(let i=0;i<arr.length;i++){
            for(let j=0;j<arr.length;j++){
                if(i==j){
                    continue
                }else{
                    let ans = arr[i]-arr[j]
                    
                    if(Math.abs(ans)==x){
                        return true
                    }
                }
            }
        }

//....fourth question for the day ..........wave array..........

        class Solution {
    // arr: input array
    // Function to sort the array into a wave-like array.
    convertToWave(arr) {
        // your code here
        
        let n = arr.length
        
        if(n%2!==0){
            n = n-1
        }
        
        
        for(let i =0;i<n;i+=2){
            let temp =  arr[i]
            arr[i]=arr[i+1]
            arr[i+1]= temp
        }
        
        return arr
    }
}
        
        return false
    }
}
