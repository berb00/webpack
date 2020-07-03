function sayHello (person: string) {
    const temp = 'Hello, ' + person
    return temp
}



const user = 'berb00'
console.log(sayHello(user))


// 函数声明(参数数量、参数类型、返回类型都是确定的)
function sum (x: number, y: number): number {
    return x + y
}

// 函数表达式1(mySum1进行类型推断)
// y: 默认值
// z: 可选参数(可选参数只能放在参数列表后面)
const mySum1 = function (x: number, y: number = 10, z?: number): number {
    if (z) {
        return x + y + z
    } else {
        return x + y
    }
}

// 函数表达式2(手动给mySum2添加类型)   // 不是箭头函数
const mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
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
function push (array: any[], ...items: any[]) {
    items.forEach(function (item) {
        array.push(item)
    })
}
const a: any[] = []
push(a, 1, 2, 3)

// 重载
function reverse(x: number): number     // 数字翻转     返回数字
function reverse(x: string): string     // 字符串翻转   返回字符串
function reverse (x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''))
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('')
    }
}
