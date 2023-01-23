let arr = [1,3,3,4,2,1]
function arrayNumber() {
    
for (let i=0; i < arr.length; i++) {
    let item = arr[i]
    if (item % 2 === 0) {
        console.log(item)
    }
}
for (let i=0; i < arr.length; i++) {
    let it = arr[i]
    if (it % 2 !== 0) {
        console.log(it)
    }
}
}
arrayNumber();