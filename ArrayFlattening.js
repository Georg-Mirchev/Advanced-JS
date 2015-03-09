Array.prototype.flatten = function () {
    
    function flattenArrayOfArrays(array, result) {
        if (!result) {
            result = [];
        }
        for (var i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                flattenArrayOfArrays(array[i], result);
            } else {
                result.push(array[i]);
            }
        }
        return result;
    }
    
    return flattenArrayOfArrays(this);
}

var array = [0, ["string", "values"], 5.5, [[1, 2, true], [3, 4, false]], 10];
console.log(array);
console.log(array.flatten());