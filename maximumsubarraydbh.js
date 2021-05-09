function maximum_subarray_recurse(V, low, high) {
    if (low === high) {
        return [low, low + 1, V[low]];
    } else {
        let middle = Math.floor((low + high) / 2);
        
        let [leftlow, lefthigh, leftsum] = maximum_subarray_recurse(V, low, middle);
        console.log(`: Entirely Left: ${[leftlow, lefthigh, leftsum]}`); 

        let [rightlow, righthigh, rightsum] = maximum_subarray_recurse(V, middle + 1, high);
        console.log(`: Entirely Right: ${[rightlow, righthigh, rightsum]}`); 

        let [crosslow, crosshigh, cross_sum] = maximum_subarray_crossing(V, low, middle, high);
        console.log(`: Crossing: ${[crosslow, crosshigh, cross_sum]}`); 
        
        // finding the maximum sum among the three values
        if(leftsum > rightsum && leftsum > cross_sum){
            return [leftlow, lefthigh, leftsum];
        } else if(rightsum > leftsum && rightsum > cross_sum){
            return [rightlow, righthigh, rightsum];
        } else {
            return [crosslow, crosshigh, cross_sum];
        }
    }
}
function maximum_subarray_crossing(V, low, middle, high) {
    let left_sum = right_sum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let b = e = 0;
    // potential off by one error
    for (let i = middle; i >= low; i--) {
        sum += V[i];
        if (sum > left_sum) {
            left_sum = sum;
            b = i;
        }
    }
    sum = 0;
    for (let j = middle + 1; j <= high; j++) {
        sum += V[j];
        if (sum > right_sum) {
            right_sum = sum;
            e = j;
        }
    }
    return [b, e + 1, left_sum + right_sum];
}

function maximum_subarray_dbh(V){
    return maximum_subarray_recurse(V, 0, V.length - 1);
}

console.log(maximum_subarray_dbh([1,2,-9,2,2]));
