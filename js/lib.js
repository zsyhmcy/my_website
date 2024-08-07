function put_content(jsondata,objectt,i){
    // 异步请求 JSON 数据
    fetch(jsondata).then(function(response){
        return response.json();
    
        }).then(function(data){
            //已经取得资料，把资料呈现到画面上
            let a = objectt.querySelector('#a_content');//链接
            //console.log(a);
            let subb = objectt.querySelector('#subb');//时间
            let item = objectt.querySelector('#item-content');//内容
            let im = objectt.querySelector('img');//图片
            //console.log(item);

            //解构赋值
            let  {image,title,P_content,url,date} = data[i];
            //内容
            item.innerHTML = "";    //清空
            item.innerHTML += "<h3>" + title;  
            //获取部分内容即可
            let content = '';
            for(let i = 0; i <= 100; i++)
            {
               content += P_content[i];  
            }
            if(P_content.length <= 100){
                item.innerHTML += '<p style="font-size: 12px;">' + P_content;
            }
            else{
                item.innerHTML += '<p style="font-size: 12px;">' + content + "...";
            }
            
            //图片
            im.innerHTML="";
            im.src = image;
            im.alt = title;
            //链接
            a.href = url;
            //时间
            subb.innerHTML="";
            subb.innerHTML = "发布时间：" + date;
        });
    }
    

//可以添加一个新的item区块
function addItem(jsondata,count) {
    
    // 获取 main 区域的引用
    let mainArea = document.getElementById('main-content');
    //console.log(mainArea);
    //获取 item 元素
    let ThisItem =  mainArea.querySelector('.item');
    
    let newItem = ThisItem.cloneNode(true); //true 表示深拷贝所有后代节点;
    newItem.style.display = 'flex';//显示item
    //修改item
    put_content(jsondata,newItem,count);
    //console.log(newItem);

    // 将 item 元素添加到 main 区域中
    mainArea.appendChild(newItem);  

}


export default {
    addItem:addItem,
    put_content:put_content
};