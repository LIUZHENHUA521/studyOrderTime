function quickSort(arr) {
    if (arr.length === 0) {
        return []
    }
    let left = [];
    let right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[0]) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return [...quickSort(left), arr[0], ...quickSort(right)]
}
//双指针法本质在于元素与走点两两比较
function quickSort1(arr) {
    var swap = (a,b)=>{
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    var helper = (left,right)=>{
        if(left>right){
            return
        }
        let start = left
        let end = right
        while(left<right){
            while(arr[right]>arr[left]){
                right--
            }
            swap(left,right)
            while(arr[left]<arr[right]){
                left++
            }
            swap(left,right)
        }
        helper(start,left-1)
        helper(left+1,end)
    }
    helper(0,arr.length-1)
    return arr
}
console.log(quickSort1([1,2,3,4,5,6,7,8]))