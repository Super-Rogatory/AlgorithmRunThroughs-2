const sum = (V,start,end) => {
    let total = 0;
    while(start < end){
        total += V[start];
        start += 1; 
    }
    return total;
}
function maximum_subarray_exhaustive(V) {
    let b = 0;
    let e = 1;
    for(let i = 0; i < V.length; i++){
        for(let j = i + 1; j <= V.length; j++){
            if(sum(V,i,j) > sum(V,b,e)){
                b = i;
                e = j;
            }
        }
    }
    return [b, e];
}

console.log(maximum_subarray_exhaustive([1, 2]));