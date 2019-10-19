// Array###########################

// 1. `all`：布尔全等判断
const all = (arr, fn = Boolean) => arr.every(fn);

// 2. `allEqual`：检查数组各项相等
const allEqual = arr => arr.every(val => val === arr[0]);

// 3.`approximatelyEqual`：约等于
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon;

// 4.`arrayToCSV`：数组转`CSV`格式（带空格的字符串）
const arrayToCSV = (arr, delimiter = ',') =>
  arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');

// 5.`arrayToHtmlList`：数组转`li`列表 此代码段将数组的元素转换为<li>标签，并将其附加到给定ID的列表中。
const arrayToHtmlList = (arr, listID) =>
  (el => (
    (el = document.querySelector('#' + listID)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  ))();

// 6. `average`：平均数
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;

// 7. `averageBy`：数组对象属性平均数 此代码段将获取数组对象属性的平均值
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;

  // 8.`bifurcate`：拆分断言后的数组 可以根据每个元素返回的值，使用reduce()和push() 将元素添加到第二次参数fn中 。
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
// 9. `castArray`：其它类型转数组
const castArray = val => (Array.isArray(val) ? val : [val]);

// 10. `compact`：去除数组中的无效/无用值
const compact = arr => arr.filter(Boolean);

// 11. `countOccurrences`：检测数值出现次数
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// 12. `deepFlatten`：递归扁平化数组
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

// 13. `difference`：寻找差异 此代码段查找两个数组之间的差异。
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};

// 14. `differenceBy`：先执行再寻找差异 在将给定函数应用于两个列表的每个元素之后，此方法返回两个数组之间的差异。
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};

// 15. `dropWhile`：删除不符合条件的值 此代码段从数组顶部开始删除元素，直到传递的函数返回为true。
const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};

// 16. `flatten`：指定深度扁平化数组 此代码段第二参数可指定深度。
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);

// 17. `indexOfAll`：返回数组中某值的所有索引 此代码段可用于获取数组中某个值的所有索引，如果此值中未包含该值，则返回一个空数组。
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);

// 18. `intersection`：两数组的交集
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};

// 19. `intersectionWith`：两数组都符合条件的交集 此片段可用于在对两个数组的每个元素执行了函数之后，返回两个数组中存在的元素列表。
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};

// 20. `intersectionWith`：先比较后返回交集
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

// 21. `minN`：返回指定长度的升序数组
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

// 22. `negate`：根据条件反向筛选
const negate = func => (...args) => !func(...args);

// 23. `randomIntArrayInRange`：生成两数之间指定长度的随机数组
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// 24. `sample`：在指定数组中获取随机数
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

// 25. `sampleSize`：在指定数组中获取指定长度的随机数
// 此代码段可用于从数组中获取指定长度的随机数，直至穷尽数组。使用Fisher-Yates算法对数组中的元素进行随机选择。
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr.slice(0, n);
};

// 26. `shuffle`：“洗牌” 数组 此代码段使用Fisher-Yates算法随机排序数组的元素。
const shuffle = ([...arr]) => {
  let m = arr.length;
  while (m) {
    const i = Math.floor(Math.random() * m--);
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
};

// 27. `nest`：根据`parent_id`生成树结构（阿里一面真题） 根据每项的parent_id，生成具体树形结构的对象。
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter(item => item[link] === id)
    .map(item => ({ ...item, children: nest(items, item.id) }));


// Function ####################################
// 1.`attempt`：捕获函数运行异常 该代码段执行一个函数，返回结果或捕获的错误对象。
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};

// 2. `defer`：推迟执行 此代码段延迟了函数的执行，直到清除了当前调用堆栈。
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

// 3. `runPromisesInSeries`：运行多个`Promises`
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
const delay = d => new Promise(r => setTimeout(r, d));

// 4. `timeTaken`：计算函数执行时间
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

// 5. `createEventHub`：简单的发布/订阅模式
/*创建一个发布/订阅（发布-订阅）事件集线，有emit，on和off方法。
使用Object.create(null)创建一个空的hub对象。
emit，根据event参数解析处理程序数组，然后.forEach()通过传入数据作为参数来运行每个处理程序。
on，为事件创建一个数组（若不存在则为空数组），然后.push()将处理程序添加到该数组。
off，用.findIndex()在事件数组中查找处理程序的索引，并使用.splice()删除。 */

const createEventHub = () => ({
  hub: Object.create(null),
  emit(event, data) {
    (this.hub[event] || []).forEach(handler => handler(data));
  },
  on(event, handler) {
    if (!this.hub[event]) this.hub[event] = [];
    this.hub[event].push(handler);
  },
  off(event, handler) {
    const i = (this.hub[event] || []).findIndex(h => h === handler);
    if (i > -1) this.hub[event].splice(i, 1);
    if (this.hub[event].length === 0) delete this.hub[event];
  }
});

// 6.`memoize`：缓存函数
// 通过实例化一个Map对象来创建一个空的缓存。
// 通过检查输入值的函数输出是否已缓存，返回存储一个参数的函数，该参数将被提供给已记忆的函数；如果没有，则存储并返回它。
const memoize = fn => {
  const cache = new Map();
  const cached = function(val) {
    return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
  };
  cached.cache = cache;
  return cached;
};

// 7. `once`：只调用一次的函数
const once = fn => {
  let called = false
  return function () {
    if (!called) {
      called = true
      fn.apply(this, arguments)
    }
  }
};

// 8.`flattenObject`：以键的路径扁平化对象
// 使用递归。
// 利用Object.keys(obj)联合Array.prototype.reduce()，以每片叶子节点转换为扁平的路径节点。
// 如果键的值是一个对象，则函数使用调用适当的自身prefix以创建路径Object.assign()。
// 否则，它将适当的前缀键值对添加到累加器对象。
// prefix除非您希望每个键都有一个前缀，否则应始终省略第二个参数。
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});

// 9. `unflattenObject`：以键的路径展开对象 与上面的相反，展开对象。
// 这个的用途，在做Tree组件或复杂表单时取值非常舒服。
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});

// String #################
// 1.`byteSize`：返回字符串的字节长度
const byteSize = str => new Blob([str]).size;

// 2. `capitalize`：首字母大写
const capitalize = ([first, ...rest]) =>
  first.toUpperCase() + rest.join('');

// 3. `capitalizeEveryWord`：每个单词首字母大写
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

// 4. `decapitalize`：首字母小写
const decapitalize = ([first, ...rest]) =>
  first.toLowerCase() + rest.join('')

// 5. `luhnCheck`：银行卡号码校验（`luhn`算法）
// Luhn算法的实现，用于验证各种标识号，例如信用卡号，IMEI号，国家提供商标识号等。
// 与String.prototype.split('')结合使用，以获取数字数组。获得最后一个数字。实施luhn算法。如果被整除，则返回，否则返回。
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};


// 6. `splitLines`：将多行字符串拆分为行数组。
// 使用String.prototype.split()和正则表达式匹配换行符并创建一个数组。
const splitLines = str => str.split(/\r?\n/);

// 7. `stripHTMLTags`：删除字符串中的`HTMl`标签
// 从字符串中删除HTML / XML标签。
// 使用正则表达式从字符串中删除HTML / XML 标记。
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

// Object #########################
// 1. `dayOfYear`：当前日期天数
const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 2. `forOwn`：迭代属性并执行回调
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));

// 3. `Get Time From Date`：返回当前24小时制时间的字符串
const getColonTimeFromDate = date => date.toTimeString().slice(0, 8);

// 4. `Get Days Between Dates`：返回日期间的天数
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);

// 5. `is`：检查值是否为特定类型。
const is = (type, val) => ![, null].includes(val) && val.constructor === type;

// 6. `isAfterDate`：检查是否在某日期后
const isAfterDate = (dateA, dateB) => dateA > dateB;

// 7. `isBeforeDate`：检查是否在某日期前
const isBeforeDate = (dateA, dateB) => dateA < dateB;

// 8 `tomorrow`：获取明天的字符串格式时间
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};

// 9. `equals`：全等判断
// 在两个变量之间进行深度比较以确定它们是否全等。
// 此代码段精简的核心在于Array.prototype.every()的使用。
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};

// Number #########################
// 1. `randomIntegerInRange`：生成指定范围的随机整数
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 2. `randomNumberInRange`：生成指定范围的随机小数
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

// 3. `round`：四舍五入到指定位数
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// 4. `sum`：计算数组或多个数字的总和
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

// 5. `toCurrency`：简单的货币单位转换
const toCurrency = (n, curr, LanguageFormat = undefined) =>
  Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);


// Brower #################
// 1. `bottomVisible`：检查页面底部是否可见
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight);

// 2. `Create Directory`：检查创建目录
// 此代码段调用fs模块的existsSync()检查目录是否存在，如果不存在，则mkdirSync()创建该目录。
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);

// 3. `currentURL`：返回当前链接`url`
const currentURL = () => window.location.href;

// 4. `distance`：返回两点间的距离
// 该代码段通过计算欧几里得距离来返回两点之间的距离。
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

// 5. `elementContains`：检查是否包含子元素
// 此代码段检查父元素是否包含子元素。
const elementContains = (parent, child) => parent !== child && parent.contains(child);

// 6. `getStyle`：返回指定元素的生效样式
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

// 7. `getType`：返回值或变量的类型名
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

// 8. `hasClass`：校验指定元素的类名
const hasClass = (el, className) => el.classList.contains(className);

// 9. `hide`：隐藏所有的指定标签
const hide = (...el) => [...el].forEach(e => (e.style.display = 'none'));

// 10. `httpsRedirect`：`HTTP` 跳转 `HTTPS`
const httpsRedirect = () => {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
};

// 11.`insertAfter`：在指定元素之后插入新元素
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);

// 12.`insertBefore`：在指定元素之前插入新元素
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);

// 13. `isBrowser`：检查是否为浏览器环境
// 此代码段可用于确定当前运行时环境是否为浏览器。这有助于避免在服务器（节点）上运行前端模块时出错。
const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// 14. ` isBrowserTab`：检查当前标签页是否活动
const isBrowserTabFocused = () => !document.hidden;

// 15. `nodeListToArray`：转换`nodeList`为数组
const nodeListToArray = nodeList => [...nodeList];

// 16. `Random Hexadecimal Color Code`：随机十六进制颜色
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

// 17. `scrollToTop`：平滑滚动至顶部
// 该代码段可用于平滑滚动到当前页面的顶部。
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

// 18. `smoothScroll`：滚动到指定元素区域
// 该代码段可将指定元素平滑滚动到浏览器窗口的可见区域。
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });

// 19. `detectDeviceType`：检测移动/PC设备
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';

// 20. `getScrollPosition`：返回当前的滚动位置
// 默认参数为window ，pageXOffset(pageYOffset)为第一选择，没有则用scrollLeft(scrollTop)
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 21. `size`：获取不同类型变量的长度
// 这个的实现非常巧妙，利用Blob类文件对象的特性，获取对象的长度。
// 另外，多重三元运算符，是真香。
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0;

// 22. `escapeHTML`：转义`HTML` 用来防XSS攻击啦。
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );

// Other
// 防抖
function debounce (fn, delay) {
  let timer = null;
  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  }
}
// 节流
function throttle (fn, delay) {
  let flag = true;
  return function () {
    if (!flag) return;
    flag = false;

    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, delay);
  }
}

module.exports = {
  // array
  all,
  allEqual,
  approximatelyEqual,
  arrayToCSV,
  arrayToHtmlList,
  average,
  averageBy,
  bifurcate,
  castArray,
  compact,
  countOccurrences,
  deepFlatten,
  difference,
  differenceBy,
  dropWhile,
  flatten,
  indexOfAll,
  intersection,
  intersectionBy,
  intersectionWith,
  minN,
  negate,
  randomIntArrayInRange,
  sample,
  sampleSize,
  shuffle,
  nest,

  // Function
  attempt,
  defer,
  runPromisesInSeries,
  timeTaken,
  createEventHub,
  memoize,
  once,
  flattenObject,
  unflattenObject,

  // String
  byteSize,
  capitalize,
  capitalizeEveryWord,
  decapitalize,
  luhnCheck,
  splitLines,
  stripHTMLTags,

  // Object
  dayOfYear,
  forOwn,
  getColonTimeFromDate,
  getDaysDiffBetweenDates,
  is,
  isAfterDate,
  isBeforeDate,
  tomorrow,
  equals,


  // Number
  randomIntegerInRange,
  randomNumberInRange,
  round,
  sum,
  toCurrency,


  // Brower
  bottomVisible,
  createDirIfNotExists,
  currentURL,
  distance,
  elementContains,
  getStyle,
  getType,
  hasClass,
  hide,
  httpsRedirect,
  insertAfter,
  insertBefore,
  isBrowser,
  detectDeviceType,
  isBrowserTab,
  nodeListToArray,
  randomHexColorCode,
  scrollToTop,
  smoothScroll,
  getScrollPosition,
  size,
  escapeHTML,

  // Other
  debounce,
  throttle
  

}