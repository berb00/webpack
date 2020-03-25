// RegExp 

// new RegExp(pattern, attributes);
// pattern:            匹配模式
// attributes:         g-全局匹配 i-不区分大小写  m-多行匹配

// test()              检索字符串中的指定值。返回值是 true 或 false。
// exec()              检索字符串中的指定值。返回值是被找到的值。如果没有发现匹配，则返回 null。
// compile()           用于改变 RegExp.





let str1 = 'sdgfsgfsdgfsdgfhs363526432sfhsghfgsy'
let tel = '18838052776'
let email = '1148312706@qq.com'

let re_tel = '\d{3}-\d{8}|\d{4}-\{7,8}'                                         // 匹配国内电话号码
let re_tel1 = '0?(13|14|15|17|18|19)[0-9]{9}'                                   // 匹配国内手机号码
let re_tel2 = '[0-9-()（）]{7,18}'                                              // 匹配国内电话号码
let re_chinese = '[\u4e00-\u9fa5]'                                              // 匹配中文字符
let re_doublechar = '[^\x00-\xff]'                                              // 匹配双字节字符(包括汉字在内)
let re_null = '\n\s*\r'                                                         // 匹配空白行
let re_url = '^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+'                         // 匹配网址URL
let re_qq = '[1-9][0-9]{4,}'                                                    // 匹配腾讯QQ号
let re_qq1 = '[1-9]([0-9]{5,11})'                                               // 匹配腾讯QQ号
let re_postOffice = '[1-9]\d{5}(?!\d)'                                          // 匹配中国邮政编码
let re_idnum = '^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$'                 // 匹配18位身份证号
let re_idnum1 = '\d{17}[\d|x]|\d{15}'                                           // 匹配18位身份证号
let re_email = '\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}'         // 匹配Email地址
let re_email1 = '\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}'        // 匹配Email地址
let re_negativeFloat = '-([1-9]\d*.\d*|0.\d*[1-9]\d*)'                          // 匹配负浮点数
let re_positiveFloat = '[1-9]\d*.\d*|0.\d*[1-9]\d*'                             // 匹配正浮点数
let re_integer = '-?[1-9]\d*'                                                   // 匹配整数
let re_positiveInteger = '[1-9]\d*'                                             // 匹配正整数
let re_negativeInteger = '-[1-9]\d*'                                            // 匹配负整数
let re_date = '\d{4}(\-|\/|.)\d{1,2}\1\d{1,2}'                                      // 匹配日期格式
let re_IP = '(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)'        // 匹配IP




module.exports = {}



