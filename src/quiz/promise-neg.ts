const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function checkRow(arr: number[]): Promise<number[]> {
    return new Promise((resolve, reject) => {
        if(arr.length == 0) {
            reject("empty array")
        }
        let sum = 0
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] < 0) {
                resolve(arr)
            }
        }
        resolve([])
    })
}


let neg_row: Promise<number[]>[] = []
array2D_3.forEach((arr) => {
    neg_row.push(checkRow(arr))
})

const neg_row_print = Promise.any(neg_row)
neg_row_print.then((vals) => {
    console.log(vals)
}).catch((reason) => {
    console.log(reason)
})