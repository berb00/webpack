module.exports = {
    root: true,
    
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended'
    ],
    plugins: [
        '@typescript-eslint'
    ],
    


    
    parser: "@typescript-eslint/parser",
    parserOptions: {
      parser: require.resolve('babel-eslint'),
      ecmaVersion: 2018,
      sourceType: 'module'
    },
  
    env: {
      es6: true,
      node: true
    },
  
    globals: {
      document: false,
      navigator: false,
      window: false
    },
  
    rules: {
      // 0 禁用此规则 1 不符合规则即给出警告 2 不符合规则即报错
      'accessor-pairs': 2,// 在对象中使用getter/setter
      'arrow-spacing': [2, { 'before': true, 'after': true }],// 箭头函数前后括号
      'block-spacing': [1, 'always'],// 块级作用域缩进 https://eslint.org/docs/rules/block-spacing#rule-details
      'brace-style': [2, '1tbs', { 'allowSingleLine': true }],// 大括号风格，允许写在一行 https://eslint.org/docs/rules/brace-style#require-brace-style-brace-style
      'camelcase': [2, { 'properties': 'never' }],// 强制驼峰命名法 
      'comma-dangle': [2, 'never'],// 对象字面量项尾不能有逗号
      'comma-spacing': [2, { 'before': false, 'after': true }],// 逗号前后的空格
      'comma-style': [2, 'last'],// 逗号风格，换行时在行首还是行尾
      'constructor-super': 2,// 非派生类不能调用super，派生类必须调用super
      'curly': [2, 'multi-line'],// 块级作用域可以不带大括号 https://eslint.org/docs/rules/curly#require-following-curly-brace-conventions-curly
      'dot-location': [2, 'property'],// 对象访问符的位置，换行的时候在行首 https://eslint.org/docs/rules/dot-location#enforce-newline-before-and-after-dot-dot-location
      'eol-last': 2,// 文件以单一的换行符结束
      'eqeqeq': [2, 'allow-null'], // 必须使用全等
      'generator-star-spacing': [2, { 'before': true, 'after': true }],// generate函数的前后空格
      'handle-callback-err': [2, '^(err|error)$' ],// nodejs函数处理错误
      'indent': [2, 4, { 'SwitchCase': 1 }],// 缩进风格，switch缩进风格
      'jsx-quotes': [2, 'prefer-single'],// jsx使用单引号
      'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],// 对象字面量中冒号添加后空格
      'keyword-spacing': [2, { 'before': true, 'after': true }],// 关键字前后空格
      'new-cap': [2, { 'newIsCap': true, 'capIsNew': false }],// 新建对象实例首字母必须大写
      'new-parens': 2,// new时必须加小括号
      'no-array-constructor': 2,// 禁止使用数组构造器 https://eslint.org/docs/rules/no-array-constructor#rule-details
      'no-caller': 2, // 禁止使用arguments.caller或arguments.callee
      'no-class-assign': 2, // 禁止给类赋值
      'no-cond-assign': 2,// 禁止在条件表达式中使用赋值语句
      'no-const-assign': 2,//禁止修改const声明的变量
      'no-control-regex': 2,//禁止在正则表达式中使用控制字符
      'no-delete-var': 2,//不能对var声明的变量使用delete操作符
      'no-dupe-args': 2,//函数参数不能重复
      'no-dupe-class-members': 2, //对象成员不能重复
      'no-dupe-keys': 2,//在创建对象字面量时不允许键重复
      'no-duplicate-case': 2,//switch中的case标签不能重复
      'no-empty-character-class': 2,//正则表达式中的[]内容不能为空
      'no-empty-pattern': 2,// https://eslint.org/docs/rules/no-empty-pattern#version
      'no-eval': 2,//禁止使用eval
      'no-ex-assign': 2,//禁止给catch语句中的异常参数赋值
      'no-extend-native': 2,//禁止扩展native对象
      'no-extra-bind': 2,//禁止不必要的函数绑定
      'no-extra-boolean-cast': 2,//禁止不必要的bool转换
      'no-extra-parens': [2, 'functions'],//禁止非必要的括号
      'no-fallthrough': 2,//禁止switch穿透
      'no-floating-decimal': 2,//禁止省略浮点数中的0 .5 3.
      'no-func-assign': 2,//禁止重复的函数声明
      'no-implied-eval': 2,////禁止使用隐式eval
      'no-inner-declarations': [2, 'functions'],//禁止在块语句中使用声明（变量或函数）
      'no-invalid-regexp': 2,//禁止无效的正则表达式
      'no-irregular-whitespace': 2,//不能有不规则的空格
      'no-iterator': 2,//禁止使用__iterator__ 属性
      'no-label-var': 2,//label名不能与var声明的变量名相同
      'no-labels': [2, { 'allowLoop': false, 'allowSwitch': false }],
      'no-lone-blocks': 2,//禁止标签声明
      'no-mixed-spaces-and-tabs': 2,//禁止混用tab和空格
      'no-multi-spaces': [2, { "ignoreEOLComments": true }],//不能用多余的空格
      'no-multi-str': 2,//字符串不能用\换行
      'no-multiple-empty-lines': [2, { 'max': 1 }],//空行最多不能超过2行
      'no-native-reassign': 2,//不能重写native对象
      'no-negated-in-lhs': 2,//in 操作符的左边不能有!
      'no-new-object': 2,//禁止使用new Object()
      'no-new-require': 2,//禁止使用new require
      'no-new-symbol': 2,// 使用Symbol()而不能使用new
      'no-new-wrappers': 2,// https://eslint.org/docs/rules/no-new-wrappers#disallow-primitive-wrapper-instances-no-new-wrappers
      'no-obj-calls': 2,//不能调用内置的全局对象，比如Math() JSON()
      'no-octal': 2,//禁止使用八进制数字
      'no-octal-escape': 2,//禁止使用八进制转义序列
      'no-path-concat': 2,//node中不能使用__dirname或__filename做路径拼接
      'no-proto': 2,//禁止使用__proto__属性
      'no-redeclare': 2,//禁止重复声明变量
      'no-regex-spaces': 2,//禁止在正则表达式字面量中使用多个空格
      'no-return-assign': [2, 'except-parens'],//return 语句中不能有赋值表达式
      'no-self-assign': 2,// 不能自声明
      'no-self-compare': 2,// 不能自比较
      'no-sequences': 2,//禁止使用逗号运算符
      'no-shadow-restricted-names': 2,//严格模式中规定的限制标识符不能作为声明时的变量名使用
      'no-spaced-func': 0,// 函数调用时 函数名与()之间不能有空格
      'no-sparse-arrays': 2,//禁止稀疏数组， [1,,2]
      'no-this-before-super': 2,//在调用super()之前不能使用this或super
      'no-throw-literal': 2,//禁止抛出字面量错误 throw "error";
      'no-trailing-spaces': 2,//一行结束后面不要有空格
      'no-undef': 2,//不能有未定义的变量
      'no-undef-init': 2,//变量初始化时不能直接给它赋值为undefined
      'no-unexpected-multiline': 2,//避免多行表达式
      'no-unmodified-loop-condition': 2,//不使用未定义的循环条件
      'no-unneeded-ternary': [2, { 'defaultAssignment': false }],//禁止不必要的嵌套 https://eslint.org/docs/rules/no-unneeded-ternary#disallow-ternary-operators-when-simpler-alternatives-exist-no-unneeded-ternary
      'no-unreachable': 2,//不能有无法执行的代码
      'no-unsafe-finally': 2,// finally中不能执行有歧义的代码
      'no-unused-vars': [2, { 'vars': 'all', 'args': 'none' }],//不声明未使用的变量
      'no-useless-call': 2,//禁止不必要的call和apply
      'no-useless-computed-key': 2,//不声明无用的键
      'no-useless-constructor': 2,// https://eslint.org/docs/rules/no-useless-constructor#disallow-unnecessary-constructor-no-useless-constructor
      'no-useless-escape': 0,// https://eslint.org/docs/rules/no-useless-escape#disallow-unnecessary-escape-usage-no-useless-escape
      'no-whitespace-before-property': 2,// 对象键之前无空格
      'no-with': 2,//禁用with
      'one-var': [2, { 'initialized': 'never' }],//禁用连续声明
      'operator-linebreak': [2, 'after', { 'overrides': { '?': 'before', ':': 'before' } }],//换行时运算符在行尾还是行首
      'padded-blocks': [2, 'never'],//块语句内行首行尾不能空行
      'quotes': [2, 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],//使用单引号
      'semi': [2, 'never'],//不使用语句强制分号结尾
      'semi-spacing': [2, { 'before': false, 'after': true }],//分号前后空格
      'space-before-blocks': [2, 'always'],//不以新行开始的块{前面需要有空格
      'space-before-function-paren': [2, 'always'],//函数定义时括号前面需要有空格
      'space-in-parens': [2, 'never'],//小括号里面不需要有空格
      'space-infix-ops': 2,//中缀操作符周围需要有空格
      'space-unary-ops': [2, { 'words': true, 'nonwords': false }],//一元运算符的前/后要不要加空格
      'spaced-comment': [0, 'always', { 'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ','] }],//注释风格需要有空格
      'template-curly-spacing': [2, 'never'],//模板中{}包裹的变量不需要空格
      'use-isnan': 2,//禁止比较时使用NaN，只能用isNaN()
      'valid-typeof': 2,//必须使用合法的typeof的值
      'wrap-iife': [2, 'any'],//立即执行函数表达式的小括号风格任意一种都可以
      'yield-star-spacing': [2, 'both'],// generate 函数 yeild风格
      'yoda': [2, 'never'],//禁止尤达条件
      'prefer-const': 2,//优先使用const
      'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,//禁止使用debugger,开发环境允许使用
      'object-curly-spacing': [2, 'always', { objectsInObjects: false }],//大括号内是否允许不必要的空格
      'array-bracket-spacing': [2, 'never'],//是否允许非空数组里面有多余的空格
    //   'vue-libs/jsx-uses-vars': 2,
    //   'vue/require-v-for-key': 0
    }
}