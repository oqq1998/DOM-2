window.jQuery = function (selectorOrArray) {
//接受选择器或字符串,根据选择器得到一些元素,然后返回一个可以操作元素的对象
    let elements
    if (typeof selectorOrArray === 'string') {
        elements=document.querySelectorAll(selectorOrArray)
    } else if(selectorOrArray instanceof Array){
        elements=selectorOrArray
    }
    console.log("我是jQuery")
//     const api = { //api是jQuery构造出来的一个对象
//         addClass : function(className) {
//             for (let i = 0; i < elements.length; i++){//遍历所有元素
//                 elements[i].classList.add(className) //给元素新添加类名
//             }
//             return this //返回这个对象本身就可以实现链式操作,在这里this就是api
//         }
//     }//api对象的key为addClass,value是一个function
//     return api
//     //不return elements,return可以操作elements的api
// }
    return { //不声明api直接返回对象也可以
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                const element = elements[i]
                element.classList.add(className)
            }
            return this
        },
        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array=array.concat(elements2)
            }//意思是array=array+elements
            array.oldApi = this //这个this是旧Api
            // const newApi=jQuery(array)
            // return newApi
            return jQuery(array) //上两行的简写
        },
        oldApi:selectorOrArray.oldApi, //获取数组的oldApi
        end() { 
            return this.oldApi //这个this是新的Api
        },
        each(fn) {  //each用于遍历elements
            for (let i = 0; i < elements.length; i++){
                fn.call(null,elements[i],i)
            }
            return this //this就是Api对象!!!!!!!!
        },
        print() { //print用于打出元素
            console.log(elements) //elements就是对应的元素们!!!!!
        },
        parent() { 
            this.each((node) => {
                if (array.indexOf(node.parentNode) === -1)//===-1意思是还没有push过,push过就什么都不做
                { array.push(node.parentNode) }
                
            })
            return jQuery(array)
        },
        children() { 
            const array = []
            this.each((node) => {
                array.push(...node.children) //...是展开操作符,意思是把数组拆开,第n个元素当第n个参数
            })
            return jQuery(array)
        }

    }
}
