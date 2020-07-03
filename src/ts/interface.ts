// 对象的类型--接口
function baseInterface () {
    interface Person {          // 定义一个接口
        name: string
        tel: number             // 必选属性
        age?: number            // 可选属性
        [propName: string]: any // 可以添加任意属性
        readonly id: number     // 只读属性
    }

    const berb: Person = {        // 定义一个变量
        id: 111,
        name: 'berb',
        tel: 1111
    }
}


