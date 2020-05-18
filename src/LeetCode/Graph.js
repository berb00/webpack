array()

function array () {
    let temp = null

    // =====  C  ====
    // temp = findJudge()                 // 997. 找到小镇的法官
    temp = gardenNoAdj()               // 1042. 不邻接植花
    // =====  B  ====
    // =====  A  ====
    // =====  M  ====

    console.log('temp: ', temp)
}

//#######################################   C  ######################################
/*
997. 找到小镇的法官
在一个小镇里，按从 1 到 N 标记了 N 个人。传言称，这些人中有一个是小镇上的秘密法官。(法官是这样一个点：出度为0，并且入度为N-1)
如果小镇的法官真的存在，那么：
    小镇的法官不相信任何人。                    // 出度为0
    每个人（除了小镇法官外）都信任小镇的法官。   // 入度为N-1
    只有一个人同时满足属性 1 和属性 2 。

给定数组 trust，该数组由信任对 trust[i] = [a, b] 组成，表示标记为 a 的人信任标记为 b 的人。
如果小镇存在秘密法官并且可以确定他的身份，请返回该法官的标记。否则，返回 -1。

示例:
输入：N = 2, trust = [[1,2]]                                输出：2
输入：N = 3, trust = [[1,3],[2,3]]                          输出：3
输入：N = 3, trust = [[1,3],[2,3],[3,1]]                    输出：-1
输入：N = 3, trust = [[1,2],[2,3]]                          输出：-1
输入：N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]        输出：3

*/
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge (N, trust) {
    N = N || 3
    trust = trust || [[1, 2], [2, 3]]
    const len = trust.length
    const cnt = []               //  统计出入度

    for (let i = 0; i < N + 1; i++) {
        cnt[i] = 0
    }

    for (let i = 0; i < len; i++) {
        cnt[trust[i][0]]--     // 出度--
        cnt[trust[i][1]]++     // 入度++
    }

    for (let i = 1; i <= N; i++) {
        if (cnt[i] == N - 1) return i
    }

    return -1
}

/*
1042. 不邻接植花

有 N 个花园，按从 1 到 N 标记。在每个花园中，你打算种下四种花之一。
paths[i] = [x, y] 描述了花园 x 到花园 y 的双向路径。
另外，没有花园有 3 条以上的路径可以进入或者离开。
你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。
以数组形式返回选择的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1, 2, 3, 4 表示。保证存在答案。

示例:
输入：N = 3, paths = [[1,2],[2,3],[3,1]]                            输出：[1,2,3]
输入：N = 4, paths = [[1,2],[3,4]]                                  输出：[1,2,1,2]
输入：N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]          输出：[1,2,3,4]
*/

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
function gardenNoAdj (N, paths) {   // temp
    N = N || 4
    paths = paths || [[1, 2], [2, 3], [3, 4], [4, 1], [1, 3], [2, 4]]
    const len = paths.length
    const table = []
    const color = []

    for (let i = 0; i < len; i++) {
        table[Math.max(paths[i][0], paths[i][1]) - 1].push(Math.min(paths[i][0], paths[i][1]) - 1)
    }

    for (let i = 1; i < N; i++) {
        const col_set = [1, 2, 3, 4]
        for (let j = 0; j < table[i].length; j++) {
            // col_set.erase(color[table[i][j]]);
            col_set.slice(color[table[i][j]])
        }
        color[i] = col_set[0]
    }

    return color
}

//#######################################   B  ######################################

//#######################################   A  ######################################
