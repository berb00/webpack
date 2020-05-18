array()

function array () {
    let temp = null

    // =====  C  ====
    temp = twoSum()                      // 1. 两数之和
    temp = removeDuplicates()            // 26. 删除排序数组中的重复项
    temp = removeDuplicates1()           // 26. 删除排序数组中的重复项
    temp = removeElement()               // 27. 移除元素

    // =====  B  ====
    // =====  A  ====
    // =====  M  ====

    console.log('temp: ', temp)
}

//#######################################   C  ######################################
/*
1. 两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:
    给定 nums = [2, 7, 11, 15], target = 9
    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
*/

function twoSum (nums, target) { // M
    nums = nums || [3, 3]
    target = target || 6
    const len = nums.length

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
}

/*
26. 删除排序数组中的重复项
给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

示例:
    给定数组 nums = [1,1,2]
    函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。

    给定 nums = [0,0,1,1,1,2,2,3,3,4]
    函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

    你不需要考虑数组中超出新长度后面的元素。
*/

/**
 * @param {number[]} nums
 * @return {number}
方法：双指针法
    数组完成排序后(从小到大排列)
    首先注意数组是有序的，那么重复的元素一定会相邻。
    要求删除重复元素，实际上就是将不重复的元素移到数组的左侧。

    放置两个指针
        i:  慢指针  在前
        j:  快指针  在后
    只要 nums[i] == nums[j]，我们就增加 j 以跳过重复项(j 后移一位)。

    如果不相等，将 j 位置的元素复制到 i+1 位置上，i 后移一位，j 后移 1 位
    重复上述过程，直到 j 等于数组长度。

    当我们遇到 nums[j] != nums[i]时，跳过重复项的运行已经结束，
    因此我们必须把它（nums[j]）的值复制到 nums[i+1]。
    然后递增 i，接着我们将再次重复相同的过程，直到 j 到达数组的末尾为止。

    j - i > 1:
        数组中没有重复元素时，每次比较时 nums[i] 都不等于 nums[j]，因此就会将 j 指向的元素原地复制一遍，这个操作其实是不必要的

复杂度分析
    时间复杂度：O(n)，假设数组的长度是 n，那么 i 和 j 分别最多遍历 n 步。
    空间复杂度：O(1)。

 */
function removeDuplicates (nums) {
    nums = nums || [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const len = nums.length
    let i = 0

    if (len < 2) return len
    for (let j = 1; j < len; j++) {
        if (nums[j] !== nums[i] && j - i > 1) {
            nums[++i] = nums[j]
        }
    }

    console.log('removeDuplicates: ', nums)
    return i + 1
}

function removeDuplicates1 (nums) { // 该方法产生了新数组 不是操作原数组
    nums = nums || [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const newarr = Array.from(new Set(nums))

    console.log('removeDuplicates: ', newarr)
    return newarr.length
}

/*
27. 移除元素
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例:
    给定 nums = [3,2,2,3], val = 3,
    函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

    给定 nums = [0,1,2,2,3,0,4,2], val = 2,
    函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
    注意这五个元素可为任意顺序。

    你不需要考虑数组中超出新长度后面的元素。
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}

 */
function removeElement (nums, val) {
    nums = nums || [0, 1, 2, 2, 3, 0, 4, 2]    //  [3,2,2,3]
    val = val || 2
    const len = nums.length
    let i = 0
    for (let j = 0; j < len; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++
        }
    }

    console.log('removeElement: ', nums)
    return i
}

//#######################################   B  ######################################

//#######################################   A  ######################################
