//Function designed to check equality between to objects organized as arrays of key-value pairs
function areDeeplyEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    return false; 
  }

const arrayEquals = (obj1, obj2) => {
    if(typeof obj1 === "object" && typeof obj2 === "object" && obj1 !== null && obj2 !== null) {
        if(Array.isArray(obj1) || Array.isArray(obj2)) return false;
        
        const keys1 = Object.keys(obj1)
        const keys2 = Object.keys(obj2)
    
        if(keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) return false;
          
        for(let key in obj1) {
           let isEqual = areDeeplyEqual(obj1[key], obj2[key])
           if (!isEqual) { return false; }
        }
    
        return true;
    }
}

export { arrayEquals }