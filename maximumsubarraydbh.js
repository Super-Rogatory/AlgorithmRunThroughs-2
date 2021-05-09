const sum = (V,start,end) => {
    let total = 0;
    while(start < end){
        total += V[start];
        start += 1; 
    }
    return total;
}
function maximum_subarray_recurse(V, low, high) {
    if (low === high) {
        return [low, low + 1];
    } else {
        let middle = Math.floor((low + high) / 2);
        
        let [leftlow, lefthigh] = maximum_subarray_recurse(V, low, middle);
        let [rightlow, righthigh] = maximum_subarray_recurse(V, middle + 1, high);
        let [crosslow, crosshigh] = maximum_subarray_crossing(V, low, middle, high);
        
        // finding the maximum sum among the three values
        let leftsum = sum(V,leftlow,lefthigh);
        let rightsum = sum(V, rightlow, righthigh);
        let cross_sum = sum(V, crosslow, crosshigh);
        if(leftsum > rightsum && leftsum > cross_sum){
            return [leftlow, lefthigh];
        } else if(rightsum > leftsum && rightsum > cross_sum){
            return [rightlow, righthigh];
        } else {
            return [crosslow, crosshigh];
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
    return [b, e + 1];
}

function maximum_subarray_dbh(V){
    return maximum_subarray_recurse(V, 0, V.length - 1);
}

console.log(maximum_subarray_dbh([2,2,2,2,2]));
