stack()

function stack () {
    let temp = null

    // =====  C  ====
    temp = isValid()                      // 20. 有效的括号
    temp = nextGreaterElement()           // 496. 下一个更大元素 I
    temp = calPoints()                    // 682. 棒球比赛
    temp = backspaceCompare()             // 844. 比较含退格的字符串
    temp = removeOuterParentheses()       // 1021. 删除最外层的括号
    temp = removeDuplicates()             // 1047. 删除字符串中的所有相邻重复项
    temp = maxSlidingWindow()             // 面试题59 - I. 滑动窗口的最大值

    // =====  B  ====
    // =====  A  ====
    // =====  M  ====

    console.log('temp: ', temp)
}

//#######################################   C  ######################################
/*
20. 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：
    左括号必须用相同类型的右括号闭合。
    左括号必须以正确的顺序闭合。

注意空字符串可被认为是有效字符串。

示例:
    输入: "()"          输出: true
    输入: "()[]{}"      输出: true
    输入: "{[]}"        输出: true
    输入: "{[}]"        输出: false
    输入: "(]"          输出: false
    输入: "([)]"        输出: false

*/
/**
 * @param {string} s
 * @return {boolean}
 算法原理
    栈先入后出特点恰好与本题括号排序特点一致，即若遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，
    则遍历完所有括号后 stack 仍然为空；
    建立哈希表 dic 构建左右括号对应关系：key 左括号，value 右括号；
    这样查询 2 个括号是否对应只需 O(1) 时间复杂度；
    建立栈 stack，遍历字符串 s 并按照算法流程一一判断。

算法流程
    如果 c 是左括号，则入栈 push；
    否则通过哈希表判断括号对应关系，若 stack 栈顶出栈括号 stack.pop() 与当前遍历括号 c 不对应，则提前返回 false。

提前返回 false
    提前返回优点： 在迭代过程中，提前发现不符合的括号并且返回，提升算法效率。
    解决边界问题：
        栈 stack 为空： 此时 stack.pop() 操作会报错；因此，我们采用一个取巧方法，给 stack 赋初值 ? ，
        并在哈希表 dic 中建立 key:′?′，value:′?′ 的对应关系予以配合。
        此时当 stack 为空且 c 为右括号时，可以正常提前返回 false；
        字符串 s 以左括号结尾： 此情况下可以正常遍历完整个 s，但 stack 中遗留未出栈的左括号；
        因此，最后需返回 len(stack) == 1，以判断是否是有效的括号组合。

复杂度分析
    时间复杂度 O(N)：正确的括号组合需要遍历 1 遍 s；
    空间复杂度 O(N)：哈希表和栈使用线性的空间大小。

 */
function isValid (s) {
    s = s || '()[]{{}}'
    const len = s.length
    const dic = { '{': '}', '[': ']', '(': ')', '?': '?' }
    const stack = ['?']

    if (!len) return true
    if (len % 2) return false

    for (const i of s) {
        if (dic[i]) { // 开括号入栈
            stack.push(i)
        } else if (dic[stack.pop()] !== i) { // 栈顶开括号字典值 匹配 闭括号
            return false
        }
    }

    return stack.length === 1
}

/*
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
    push(x) —— 将元素 x 推入栈中。
    pop() —— 删除栈顶的元素。
    top() —— 获取栈顶元素。
    getMin() —— 检索栈中的最小元素。

示例:
    MinStack minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.

*/
/**
 * initialize your data structure here.
 */
function MinStack () {
    this.arr = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    const len = this.arr.length
    this.arr[len] = x
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const len = this.arr.length
    for (let i = 0; i < len - 1; i++) {
        this.arr[i] = this.arr[i + 1]
    }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[0]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {

}

/*
496. 下一个更大元素 I
给定两个没有重复元素的数组 nums1 和 nums2 ，其中nums1 是 nums2 的子集。
找到 nums1 中每个元素在 nums2 中的下一个比其大的值。
nums1 中数字 x 的下一个更大元素是指 x 在 nums2 中对应位置的右边的第一个比 x 大的元素。
如果不存在，对应位置输出-1。

示例 1:
    输入: nums1 = [4,1,2], nums2 = [1,3,4,2].
    输出: [-1,3,-1]
    解释:
        对于num1中的数字4，你无法在第二个数组中找到下一个更大的数字，因此输出 -1。
        对于num1中的数字1，第二个数组中数字1右边的下一个较大数字是 3。
        对于num1中的数字2，第二个数组中没有下一个更大的数字，因此输出 -1。
示例 2:
    输入: nums1 = [2,4], nums2 = [1,2,3,4].
    输出: [3,-1]
    解释:
        对于num1中的数字2，第二个数组中的下一个较大数字是3。
        对于num1中的数字4，第二个数组中没有下一个更大的数字，因此输出 -1。

注意:
    nums1和nums2中所有元素是唯一的。
    nums1和nums2 的数组大小都不超过1000。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function nextGreaterElement (nums1, nums2) {    // M
    nums1 = nums1 || [4, 1, 2, 8]
    nums2 = nums2 || [1, 3, 4, 2, 5, 6, 8, 10]

    const len1 = nums1.length
    const len2 = nums2.length
    const arr = []

    for (let i = 0; i < len1; i++) {
        const index = nums2.indexOf(nums1[i])
        for (let j = index; j < len2; j++) {
            if (nums1[i] < nums2[j]) {
                arr.push(nums2[j])
                break
            } else if (j === len2 - 1) {
                arr.push(-1)
            }
        }
    }

    return arr
}

/*
682. 棒球比赛
    你现在是棒球比赛记录员。
    给定一个字符串列表，每个字符串可以是以下四种类型之一：
    1.整数（一轮的得分）：直接表示您在本轮中获得的积分数。
    2. "+"（一轮的得分）：表示本轮获得的得分是前两轮有效 回合得分的总和。
    3. "D"（一轮的得分）：表示本轮获得的得分是前一轮有效 回合得分的两倍。
    4. "C"（一个操作，这不是一个回合的分数）：表示您获得的最后一个有效 回合的分数是无效的，应该被移除。

    每一轮的操作都是永久性的，可能会对前一轮和后一轮产生影响。
    你需要返回你在所有回合中得分的总和。

示例 1:
    输入: ["5","2","C","D","+"]
    输出: 30
    解释:
        第1轮：你可以得到5分。总和是：5。
        第2轮：你可以得到2分。总和是：7。
        操作1：第2轮的数据无效。总和是：5。
        第3轮：你可以得到10分（第2轮的数据已被删除）。总数是：15。
        第4轮：你可以得到5 + 10 = 15分。总数是：30。
示例 2:
    输入: ["5","-2","4","C","D","9","+","+"]
    输出: 27
    解释:
        第1轮：你可以得到5分。总和是：5。
        第2轮：你可以得到-2分。总数是：3。
        第3轮：你可以得到4分。总和是：7。
        操作1：第3轮的数据无效。总数是：3。
        第4轮：你可以得到-4分（第三轮的数据已被删除）。总和是：-1。
        第5轮：你可以得到9分。总数是：8。
        第6轮：你可以得到-4 + 9 = 5分。总数是13。
        第7轮：你可以得到9 + 5 = 14分。总数是27。
注意：
    输入列表的大小将介于1和1000之间。
    列表中的每个整数都将介于-30000和30000之间。
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
function calPoints (ops) {
    ops = ops || ['5', '-2', '4', 'C', 'D', '9', '+', '+']
    let len = ops.length
    const arr = []   // 存储每轮有效分数的栈
    let sum = 0
    for (let i = 0; i < len; i++) {
        switch (ops[i]) {
            case '+':
                len = arr.length
                arr.push(arr[len - 2] + arr[len - 1])
                break
            case 'C':
                arr.pop()
                break
            case 'D':
                arr.push(arr[arr.length - 1] * 2)
                break
            default:
                arr.push(Number(ops[i]))
                break
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] !== -1 ? sum += arr[i] : ''
    }

    return sum
}

/*
844. 比较含退格的字符串
给定 S 和 T 两个字符串，当它们分别被输入到空白的文本编辑器后，判断二者是否相等，并返回结果。 # 代表退格字符。

示例：
    输入：S = "ab#c", T = "ad#c"            输出：true
    解释：S 和 T 都会变成 “ac”。

    输入：S = "ab##", T = "c#d#"            输出：true
    解释：S 和 T 都会变成 “”。

    输入：S = "a##c", T = "#a#c"            输出：true
    解释：S 和 T 都会变成 “c”。

    输入：S = "a#c", T = "b"                输出：false
    解释：S 会变成 “c”，但 T 仍然是 “b”。
*/

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare (S, T) { // M
    S = S || 'ab##'
    T = T || 'c#d#'

    const stacks = []
    const stackt = []
    const lens = S.length
    const lent = T.length
    const len = lens > lent ? lens : lent
    for (let i = 0; i < len; i++) {
        S[i] ? S[i] === '#' ? stacks.pop() : stacks.push(S[i]) : ''
        T[i] ? T[i] === '#' ? stackt.pop() : stackt.push(T[i]) : ''
    }

    return stacks.join('') === stackt.join('')
}

/*
1021. 删除最外层的括号
有效括号字符串为空 ("")、"(" + A + ")" 或 A + B，其中 A 和 B 都是有效的括号字符串，+ 代表字符串的连接。
例如，""，"()"，"(())()" 和 "(()(()))" 都是有效的括号字符串。
如果有效字符串 S 非空，且不存在将其拆分为 S = A+B 的方法，我们称其为原语（primitive），其中 A 和 B 都是非空有效括号字符串。
给出一个非空有效字符串 S，考虑将其进行原语化分解，使得：S = P_1 + P_2 + ... + P_k，其中 P_i 是有效括号字符串原语。
对 S 进行原语化分解，删除分解中每个原语字符串的最外层括号，返回 S 。

示例：
    输入："(()()) (())"                  输出："()()()"
    解释：
        输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
        删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。

    输入："(()()) (()) (()(()))"          输出："()()()()(())"
    解释：
        输入字符串为 "(()()) (()) (()(()))"，原语化分解得到 "(()())" + "(())" + "(()(()))"，
        删除每个部分中的最外层括号后得到 "()()" + "()" + "()(())" = "()()()()(())"。

    输入："()()"                        输出：""
    解释：
        输入字符串为 "()()"，原语化分解得到 "()" + "()"，
        删除每个部分中的最外层括号后得到 "" + "" = ""。

*/

/**
 * @param {string} S
 * @return {string}
 */
function removeOuterParentheses (S) {
    S = S || '(()())(())(()(()))'

    const len = S.length
    let L = 1    // 开括号数
    let R = 0    // 闭括号数
    let str = ''

    for (let i = 1; i < len; i++) {
        S[i] === '(' ? L++ : R++
        if (R !== L) {
            str += S[i]
        } else {
            i++
            L = 1
            R = 0
        }
    }
    return str
}

/*
1047. 删除字符串中的所有相邻重复项
    给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
    在 S 上反复执行重复项删除操作，直到无法继续删除。
    在完成所有重复项删除操作后返回最终的字符串。答案保证唯一。

示例：
    输入："abbaca"          输出："ca"
    解释：
    例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。
    之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
*/
/**
 * @param {string} str
 * @return {string}
 */
function removeDuplicates (str) {   // M
    str = str || 'ammbccbaca'

    const len = str.length
    const stack = []

    for (let i = 0; i < len; i++) {
        stack[stack.length - 1] === str[i] ? stack.pop() : stack.push(str[i])
    }
    return stack.join('')
}

/*
面试题59 - I. 滑动窗口的最大值
    给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
示例:
    输入:   nums = [1,3,-1,-3,5,3,6,7], k = 3              输出: [3,3,5,5,6,7]
            nums = [1,-1] , k = 1                               [1,-1]
    解释:
        滑动窗口的位置                最大值
        ---------------               -----
        [1  3  -1] -3  5  3  6  7      3
        1 [3  -1  -3] 5  3  6  7       3
        1  3 [-1  -3  5] 3  6  7       5
        1  3  -1 [-3  5  3] 6  7       5
        1  3  -1  -3 [5  3  6] 7       6
        1  3  -1  -3  5 [3  6  7]      7
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function maxSlidingWindow (nums, k) { // M 没有用到Stack
    nums = nums || [1, -1] // [1,3,-1,-3,5,3,6,7]
    k = k || 1
    const len = nums.length
    const arr = []
    if (!k || !len) return []
    if (k === 1) return nums

    for (let i = 0; i < len - k + 1; i++) {
        const windowitem = nums.slice(i, i + k)
        arr.push(getMax(windowitem))
    }

    function getMax (arr) {
        let max = 0
        const arrlen = arr.length
        for (let i = 0; i < arrlen; i++) {
            max > arr[i] ? '' : max = arr[i]
        }
        return max
    }
    return arr
}

//#######################################   B  ######################################

//#######################################   A  ######################################
