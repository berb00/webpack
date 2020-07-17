// 基本数据类型

/** 
    Boolean
    Number
    String
    Array
    Tuple
    Enum
    Any
    Void
    Null and Undefined
    Never
    Object
    Type assertions

*/
baseData()
declare function create(o: object | null): void
function baseData () {
    // boolean
    let bool1: boolean = true
    let bool2: boolean = false
    let bool3: boolean = Boolean(0)
    let bool4: boolean = Boolean(1)         // 返回一个布尔值
    // new Boolean(0)是一个对象;boolean是原始数据类型
    // let bool5: boolean = new Boolean(0)     // error TS2322: Type 'Boolean' is not assignable to type 'boolean'.

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

    // array
    let list1: number[] = [1, 2, 3]
    let list2: Array<number> = [1, 2, 3]

    // tuple
    let tuple1: [string, number]    // Declare a tuple type
    tuple1 = ["hello", 10]          // Initialize it

    // enum
    enum Color1 {Red, Green, Blue}      // 默认下表从0开始
    let c1: Color1 = Color1.Green       // 1

    enum Color2 {Red = 1, Green, Blue}
    let c2: Color2 = Color2.Green       // 2

    enum Color3 {Red = 1, Green = 2, Blue = 4}
    let c3: Color3 = Color3.Green       // 2

    enum Color4 {Red = 1, Green, Blue}
    let c4: string = Color4[2]          // Green



    // any 允许被赋值为任意类型
    let any1: any = 'dasdasdsa'
    any1 = 10                           // 正常
    any1 = false                        // 正常
    let any2: any[] = [1, true, "free"]
    any2[1] = 100

    let any3                            // 等价于 let any3: any
    any3 = 'dsadadas'                   // 正常
    any3 = 45                           // 正常


    // void
    // let unusable1: void              // error TS1155: 'let' declarations must be initialized.
    // let unusable3: undefined         // error TS1155: 'let' declarations must be initialized.
    // let num7: number                 // error TS1155: 'let' declarations must be initialized.
    // let num9: number = unusable1     // error    void类型不能赋值给number类型
    let unusable2: void = null
    let unusable3: void = undefined


    // null and undefined
    // undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：
    let u1: undefined = undefined
    let n1: null = null
    let nn1: number = n1                // 正常

    // never

    // object
    create({ prop: 0 })                 // OK
    create(null)                        // OK
    // create(42)                       // Error

    // assertions
    let someValue1: any = "this is a string";
    let strLength1: number = (<string>someValue1).length;

    let someValue2: any = "this is a string";
    let strLength2: number = (someValue2 as string).length;


    // 类型推论
    // 定义变量时不指定类型但是赋值，会推断出类型
    // 定义变量时不指定类型且不赋值，会推断为any类型(不进行类型检查)

    // 联合类型 值可以为多种类型中的一种
    let num10: string | number
    num10 = 'seven'
    num10 = 7


}