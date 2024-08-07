function downn(event){
    event.style.backgroundColor = '#444';
    event.style.color = '#fff';/* 设置文字颜色为白色 */
}
function upp(event){
    event.style.backgroundColor = '#333';
    event.style.color = "aliceblue"; 
}

function showContent(event){
    if(event.innerText === '个人信息' && document.getElementById('person').style.display == 'none'){
        document.getElementById('person').style.display = 'block'; // 显示
        document.getElementById('column').style.display = 'none'; // 隐藏
        document.getElementById('calssify').style.display = 'none'; // 隐藏
    }
    else if(event.innerText === '专栏目录' && document.getElementById('column').style.display == 'none'){
        document.getElementById('person').style.display = 'none'; // 隐藏
        document.getElementById('column').style.display = 'block'; // 显示
        document.getElementById('calssify').style.display = 'none'; // 隐藏
    }
    else if(event.innerText === '文章分类' && document.getElementById('calssify').style.display == 'none'){
        document.getElementById('person').style.display = 'none'; // 隐藏
        document.getElementById('column').style.display = 'none'; // 隐藏
        document.getElementById('calssify').style.display = 'block'; // 显示
    }
    else
    {
        document.addEventListener('click', function(event) {
            // 获取触发事件的目标元素
            let clickedElement = event.target;
            
            // 判断点击的元素是否是标签
            if (clickedElement.tagName.toLowerCase() === 'body' || clickedElement.tagName.toLowerCase() === 'header') {
                document.getElementById('person').style.display = 'none'; // 隐藏
                document.getElementById('column').style.display = 'none'; // 隐藏
                document.getElementById('calssify').style.display = 'none'; // 隐藏
            }
        });
    }
}

window.downn = downn;
window.upp = upp;
window.showContent = showContent;
export default {
    down:downn,
    up:upp,
    showContent
};

