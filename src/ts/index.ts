
// 基本数据类型
function baseData () {
    // boolean
    const bool1: boolean = true
    const bool2: boolean = false
    const bool3: boolean = Boolean(0)
    const bool4: boolean = Boolean(1)      // 返回一个布尔值
    // let bool5: boolean = new Boolean(0)  // 返回一个Boolean对象 而不是布尔值

    //  number
    const num1: number = 10
    const num2: number = 0x10     // 十六进制
    const num3: number = 0b10     // ES6中的二进制 被编译为十进制
    const num4: number = 0o10     // ES6中的八进制 被编译为十进制
    const num5: number = NaN
    const num6: number = Infinity

    // string
    const name: string = 'berb00'
    const age: number = 10
    const sentence: string = `hello, my name is ${name}, 
    I'll be ${age + 1} years old next month`

    // 空值
    // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
    const unusable1: void
    const unusable2: void = null
    const unusable3: undefined
    const unusable4: null = null

    const num7: number    // 正常
    const num8: number = unusable4    // 正常
    // let num9: number = unusable1    // error    void类型不能赋值给number类型

    // 任意值 允许被赋值为任意类型
    let any1: any = 'dasdasdsa'
    any1 = 10                       // 正常
    console.log(any1.myName)
    console.log(any1.myName.firstName)

    // 未声明类型
    let some                        // 等价于 let some: any
    some = 'dsadadas'               // 正常
    some = 45                       // 正常
    some.setName('berb00')

    // 类型推论
    // 定义变量时不指定类型但是赋值，会推断出类型
    // 定义变量时不指定类型且不赋值，会推断为any类型(不进行类型检查)

    // 联合类型 值可以为多种类型中的一种
    let num10: string | number
    num10 = 'seven'
    num10 = 7
}

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


