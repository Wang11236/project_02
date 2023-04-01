function resolveData(data) {
    let arr = []
    for(let k in data){
        arr.push(k+'='+data[k])
    }
    return arr.join('&')
}

function itdashen(options){
    let xhr = new XMLHttpRequest()
    //调用resolveData函数，将参数转化为查询字符串
    let str = resolveData(options.data)

    if(options.method.toUpperCase() === 'GET'){
        //发起GET请求
        xhr.open('GET',options.url+'?'+str)
        xhr.send()
    }else if(options.method.toUpperCase() === 'POST'){
        //发起POST请求
        xhr.open('POST',options.url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(str)
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            let res = JSON.parse(xhr.responseText)
            //调用success对象方法
            options.success(res)
        }
    }
}  
