function checkArrays(a1, a2) {
    let map = new Map();
    
    // First array a1 processing
    a1.forEach(x => {
        map.set(x, (map.get(x) || 0) + 1);
    });
    
    // Second array a2 processing
    for (let x of a2) {
        if (map.has(x)) {
            if (map.get(x) === 1) {
                map.delete(x);
            } else {
                map.set(x, map.get(x) - 1);
            }
        } else {
            return "No";
        }
    }
    return "Yes";
}

let a1 = [1, 2, 3, 4, 5];  // Example arrays
let a2 = [2, 3, 4, 5, 1];

console.log(checkArrays(a1, a2));  // Output: Yes
