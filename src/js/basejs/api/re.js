// RegExp

// new RegExp(pattern, attributes);
// pattern:            匹配模式
// attributes:         g-全局匹配 i-不区分大小写  m-多行匹配

// test()              检索字符串中的指定值。返回值是 true 或 false。
// exec()              检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
// compile()           用于改变 RegExp.

// const str1 = 'sdgfsgfsdgfsdgfhs363526432sfhsghfgsy'
// const tel = '18838052776'
// const email = '1148312706@qq.com'

const reTel = '\d{3}-\d{8}|\d{4}-\{7,8}'
const reTel1 = '0?(13|14|15|17|18|19)[0-9]{9}'
const reTel2 = '[0-9-()（）]{7,18}'
const reChinese = '[\u4e00-\u9fa5]'
const reDoublechar = '[^\x00-\xff]'
const reNull = '\n\s*\r'
const reUrl = '^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+'
const reQq = '[1-9][0-9]{4,}'
const reQq1 = '[1-9]([0-9]{5,11})'
const rePostOffice = '[1-9]\d{5}(?!\d)'
const reIdnum = '^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$'
const reIdnum1 = '\d{17}[\d|x]|\d{15}'
const reEmail = '\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}'
const reEmail1 = '\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}'
const reNegativeFloat = '-([1-9]\d*.\d*|0.\d*[1-9]\d*)'
const rePositiveFloat = '[1-9]\d*.\d*|0.\d*[1-9]\d*'
const reInteger = '-?[1-9]\d*'
const rePositiveInteger = '[1-9]\d*'
const reNegativeInteger = '-[1-9]\d*'
const reDate = '\d{4}(\-|\/|.)\d{1,2}\d{1,2}'
const reIP = '(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)'

module.exports = {
    reTel,                          // 匹配国内电话号码
    reTel1,                         // 匹配国内手机号码
    reTel2,                         // 匹配国内电话号码
    reChinese,                      // 匹配中文字符
    reDoublechar,                   // 匹配双字节字符(包括汉字在内)
    reNull,                         // 匹配空白行
    reUrl,                          // 匹配网址URL
    reQq,                           // 匹配腾讯QQ号
    reQq1,                          // 匹配腾讯QQ号
    rePostOffice,                   // 匹配中国邮政编码
    reIdnum,                        // 匹配18位身份证号
    reIdnum1,                       // 匹配18位身份证号
    reEmail,                        // 匹配Email地址
    reEmail1,                       // 匹配Email地址
    reNegativeFloat,                // 匹配负浮点数
    rePositiveFloat,                // 匹配正浮点数
    reInteger,                      // 匹配整数
    rePositiveInteger,              // 匹配正整数
    reNegativeInteger,              // 匹配负整数
    reDate,                         // 匹配日期格式
    reIP                            // 匹配IP

}

