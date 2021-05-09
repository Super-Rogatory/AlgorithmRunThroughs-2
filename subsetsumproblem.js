const reducer = (accumulator, currentValue) => accumulator + currentValue;
function subset_sum_exhaustive(U, t) {
    let n = U.length;
    for(let bits = 0; bits <= Math.pow(2,n) - 1; bits++) {
        let candidate = [];
        for(let j = 0; j <= n - 1; j++) {
            if(((bits >> j) & 1) === 1) {
                candidate.push(U[j]);
            }
            if(candidate.length > 0 && candidate.reduce(reducer) === t) {
                return candidate;
            }
        }
    }
    return [];
}
console.log(subset_sum_exhaustive([-2,3,7,1], 9));