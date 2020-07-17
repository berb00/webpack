
// 数组
function baseArray () {
    const arr0: any[] = [1, 5, 'fsdfs', { name: 'fsdf' }]
    const arr1: number[] = [1, 2, 4, 5]       // 只允许存储number类型值

    // 数组泛型
    const arr2: Array<number> = [1, 2, 5, 3]

    //接口描述数组
    interface numArray {
        [index: number]: number
    }
    const arr3: numArray = [1, 2, 3, 5]
}


