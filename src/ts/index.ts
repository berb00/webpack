function sayHello (person: string) {
    let temp = 'Hello, ' + person
    return temp
}

let user = 'berb00'
console.log(sayHello(user))



// 基本数据类型
function baseData () {
    // boolean
    let bool1: boolean = true
    let bool2: boolean = false
    let bool3: boolean = Boolean(0)
    let bool4: boolean = Boolean(1)      // 返回一个布尔值
    let bool5: boolean = new Boolean(0)  // 返回一个Boolean对象 而不是布尔值

    //  number
    let num1: number = 10
    let num2: number = 0x10     // 十六进制
    let num3: number = 0b10     // ES6中的二进制 被编译为十进制
    let num4: number = 0o10     // ES6中的八进制 被编译为十进制
    let num5: number = NaN
    let num6: number = Infinity 

    // string
    let name: string = 'berb00'
    let age: number = 10
    let sentence: string = `hello, my name is ${name}, 
    I'll be ${age + 1} years old next month`

    // 空值
    // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
    let unusable1: void = undefined
    let unusable2: void = null
    let unusable3: undefined = undefined
    let unusable4: null = null

    let num7: number = undefined    // 正常
    let num8: number = unusable4    // 正常
    let num9: number = unusable1    // error

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

// 对象的类型--接口
function baseInterface () {
    interface Person {          // 定义一个接口
        name: string
        tel: number             // 必选属性
        age?: number            // 可选属性 
        [propName: string]: any // 可以添加任意属性
        readonly id: number     // 只读属性
    }

    let berb: Person = {        // 定义一个变量
        id: 111,
        name: 'berb',
        tel: 1111
    }
}


// 数组
function baseArray () {
    let arr0: any[] = [1, 5, 'fsdfs', {name: 'fsdf'}]
    let arr1: number[] = [1, 2, 4, 5]       // 只允许存储number类型值

    // 数组泛型
    let arr2: Array<number> = [1, 2, 5, 3]

    //接口描述数组
    interface numArray {
        [index: number]: number
    }
    let arr3: numArray = [1, 2, 3, 5]

}

// 函数声明(参数数量、参数类型、返回类型都是确定的)
function sum(x: number, y: number): number {
    return x + y
}

// 函数表达式1(mySum1进行类型推断) 
// y: 默认值
// z: 可选参数(可选参数只能放在参数列表后面)
let mySum1 = function (x: number, y: number = 10, z?: number): number {
    if (z) {
        return x + y + z
    } else {
        return x + y
    }
}

// 函数表达式2(手动给mySum2添加类型)   // 不是箭头函数
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
}

// 接口定义函数形状
interface SearchFunc {
    (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1
}

// 剩余参数 items只能是最后一个参数
function push(array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item)
    })
}
let a: any[] = []
push(a, 1, 2, 3)


// 重载 
function reverse(x: number): number     // 数字翻转     返回数字
function reverse(x: string): string     // 字符串翻转   返回字符串
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}
















































