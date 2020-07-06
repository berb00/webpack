/**
 * 闭包demo
 * 
 */

function fun(n,o) {
    console.log(o)
    return {
      fun:function(m){
        return fun(m,n);
      }
    };
  }
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);

//三行a,b,c的输出分别是什么？
//a: undefined,0,0,0
//b: undefined,0,1,2
//c: undefined,0,1,1





