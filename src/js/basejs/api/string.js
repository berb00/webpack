var str = 'abcdefg1234567'


// 方法
// string.valueOf() 		                    返回某个字符串对象的原始值。
// string.concat(str1,str2,...,strX) 		    连接两个或更多字符串，并返回新的字符串。
// string.trim() 			                    去除字符串两边的空白
function test_trim () {
    
}

// string.charAt(index) 		                返回在指定位置的字符。
// string.charCodeAt(index) 	                返回在指定的位置的字符的 Unicode 编码。
function test_char () {
    var str = 'abcdefg1234567'
    var charat = str.charAt(2)
    var charcodeat = str.charCodeAt(2)

    console.log('test_char', charat, charcodeat)
}



// 切片:
// string.slice(start,end) 			        提取字符串的片断，并在新的字符串中返回被提取的部分。
// string.split(separator,limit) 			    把字符串分割为字符串数组。
// string.substr(start,length) 		        从起始索引号提取字符串中指定数目的字符。
// string.substring(from, to) 		            提取字符串中两个指定的索引号之间的字符。
function test_slice () {

}


// 查找替换:
// string.match(regexp) 			            查找找到一个或多个正则表达式的匹配。
// string.search(searchvalue) 		            查找与正则表达式相匹配的值。
// string.indexOf(searchvalue,start) 		    返回某个指定的字符串值在字符串中首次出现的位置。
// string.lastIndexOf(searchvalue,start)  	    从后向前搜索字符串，并从起始位置（0）开始计算返回字符串最后出现的位置。
// string.replace(searchvalue,newvalue) 		在字符串中查找匹配的子串， 并替换与正则表达式匹配的子串。
function test_search () {

}



// 转换:
// String.fromCharCode(n1,n2,...,nX) 	        将 Unicode 编码转为字符。
// string.toLowerCase() 	                    把字符串转换为小写。
// string.toUpperCase() 	                    把字符串转换为大写。
function test_fromCharCode () {}




module.exports = {
    test_trim,
    test_char,
    test_slice,
    test_search,
    test_fromCharCode
}