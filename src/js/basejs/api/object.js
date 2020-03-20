var obja = { a: 1, b: 'str', c: [1, 2, 3]}

// Object.is()                         比较两个值是否相同。所有 NaN 值都相等（这与==和===不同）。两个值相同的不同对象false
// Object.assign(obja, objb..)         通过复制一个或多个对象来创建一个新的对象。对像属性都添加到obja上并返回obja
// Object.create()                     使用指定的原型对象和属性创建一个新对象。

function test_is () {
    var a = 10,
        b = 10,
        str1 = 'str',
        str2 = 'str',
        obj1 = { a: 1, b: '2'},
        obj2 = { a: 1, b: '2'},
        arr1 = [1, 2, '3'],
        arr2 = [1, 2, '3'],
        nan1 = NaN,
        nan2 = NaN

    console.log('test_is-num', Object.is(a, b))         // true
    console.log('test_is-str', Object.is(str1, str2))   // true
    console.log('test_is-nan', Object.is(nan1, nan2))   // true

    console.log('test_is-obj', Object.is(obj1, obj2))   // false
    console.log('test_is-arr', Object.is(arr1, arr2))   // false

}
function test_assign () {
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}
    var objb = { d: 1, e: 'eee'}
    var temp = {}

    Object.assign(temp, obja, objb)

    console.log('test_assign', temp)
}
function test_create () {
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}
    var objb = Object.create(obja)
    var objc = Object.create(null)

    console.log('test_create', objb, objc)
}


// Object.defineProperty()             给对象添加一个属性并指定该属性的配置。
// Object.defineProperties()           给对象添加多个属性并分别指定它们的配置。



// Object.getOwnPropertyDescriptor()   返回对象指定的属性配置。
// Object.getOwnPropertyNames()        返回一个数组，它包含了指定对象所有的可枚举或不可枚举的属性名。
// Object.getOwnPropertySymbols()      返回一个数组，它包含了指定对象自身所有的符号属性。



// Object.getPrototypeOf()             返回指定对象的原型对象。 
// Object.setPrototypeOf()             设置对象的原型（即内部 [[Prototype]] 属性）到另一个对象或null。。

function test_setPrototypeOf () {
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}

    var proto = Object.getPrototypeOf(obja)
    var dict = Object.setPrototypeOf(obja, null);
    var protodict = Object.getPrototypeOf(dict)

    console.log('test_setPrototypeOf-proto', proto, dict, protodict)
}

// Object.freeze()                     冻结对象：其他代码不能删除或更改任何属性
// Object.seal()                       防止其他代码删除对象的属性。
// Object.preventExtensions()          防止对象的任何扩展。
// Object.isFrozen()                   判断对象是否已经冻结。
// Object.isSealed()                   判断对象是否已经密封。
// Object.isExtensible()               判断对象是否可扩展。    
function test_freeze () {           // 不可对对象有任何变更操作
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}
    Object.freeze(obja)
    obja.a = 2          // 不可更改属性
    obja.d = 'd'        // 不可新增属性
    delete obja.c       // 不可删除属性

    console.log('test_freeze', obja)
    console.log('isFrozen', Object.isFrozen(obja))
}
function test_seal () {             // 可更改对象属性
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}
    Object.seal(obja)
    obja.a = 2          // 可更改属性
    obja.d = 'd'        // 不可新增属性
    delete obja.c       // 不可删除属性

    console.log('test_seal', obja)
    console.log('isSealed', Object.isSealed(obja))
}
function test_preventExtensions () { // 可删除修改对象属性
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}
    Object.preventExtensions(obja)
    obja.a = 2          // 可更改属性
    delete obja.c       // 可删除属性
    obja.d = 'd'        // 不可新增属性

    console.log('test_preventExtensions', obja)
    console.log('isExtensible', Object.isExtensible(obja))
}



// Object.keys()                       返回一个包含所有给定对象自身可枚举属性名称的数组。
// Object.values()                     返回给定对象自身可枚举值的数组。
// Object.entries()                    返回给定对象自身可枚举属性的 [key, value] 数组。
function test_entries () {
    var obja = { a: 1, b: 'str', c: [1, 2, 3]}
    var keys = Object.keys(obja)
    var values = Object.values(obja)
    var entries = Object.entries(obja)

    console.log('keys:', keys)
    console.log('values:', values)
    console.log('entries:', entries)
}

module.exports = {
    test_is,
    test_assign,
    test_create,
    test_freeze,
    test_seal,
    test_preventExtensions,
    test_entries,
    test_setPrototypeOf
}