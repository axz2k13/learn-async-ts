const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumRow(arr: number[]): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            reject("empty array")
        }
        let sum = 0
        for(let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        resolve(sum)
    })
}

let promises: Promise<number>[] = []
array2D_1.forEach((arr) => {
    promises.push(sumRow(arr))
})

const final = Promise.all(promises)
final.then((vals) => {
    let sum = 0
    vals.forEach((val) => {sum += val})
    console.log(sum)
}).catch((reason) => {
    console.log(reason)
})