function bubbleSort(arr) {

    function swap(arr, a, b){
        const temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
    }

    for(let i = 0; i < arr.length; i ++){
        let swapped = false
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                swap(arr, j, j+1)
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr;
}

module.exports = bubbleSort;