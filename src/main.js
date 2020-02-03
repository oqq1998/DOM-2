// const api = window.jQuery(".test") //不返回元素,返回api对象
// api.addClass('red')
//     .addClass('blue')
//     .addClass('green') //链式操作,this就是api
jQuery(".test1") 
    .addClass('red')
    .addClass('blue')
 //直接省略变量名也可以,等同于1~4行

jQuery('.test1')
    .find('.child')
    .addClass('yellow')
    .end() //结束chlid回到test1
    .addClass('green')
