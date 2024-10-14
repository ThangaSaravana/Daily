#include <iostream>
#include <unordered_map>
#include <vector>
using namespace std;

string checkArrays(vector<long>& a1, vector<long>& a2) {
    unordered_map<long, int> map;
    
    // First array a1 processing
    for (long x : a1) {
        map[x]++;
    }
    
    // Second array a2 processing
    for (long x : a2) {
        if (map.find(x) != map.end()) {
            if (map[x] == 1) {
                map.erase(x);
            } else {
                map[x]--;
            }
        } else {
            return "No";
        }
    }
    return "Yes";
}

int main() {
    vector<long> a1 = {1, 2, 3, 4, 5};  // Example arrays
    vector<long> a2 = {2, 3, 4, 5, 1};

    cout << checkArrays(a1, a2) << endl;  // Output: Yes
    return 0;
}
