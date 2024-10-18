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



async function calculateSum(array2D_1: number[][]): Promise<number> {
    try {
        let promises: Promise<number>[] = []
        array2D_1.forEach((arr) => {
            promises.push(sumRow(arr))
        })
        const final = await Promise.all(promises)

        let sum = 0
        final.forEach((val) => {sum += val})
        console.log(sum)
        return sum
    } catch {
        throw 'error'
    }
}

calculateSum(array2D_1)

