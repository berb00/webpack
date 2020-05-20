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
