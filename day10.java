//value equal to index value

class Solution {
    public List<Integer> valueEqualToIndex(List<Integer> nums) {
        // code here
        List<Integer>arr = new ArrayList();
        for(int i=0;i<nums.size();i++){
            if(nums.get(i)==i+1){
                arr.add(i+1);
            }
        }
        
        return arr;
    }
}