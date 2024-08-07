function getinput(){
    //获取到搜索框中的关键字
    let input_key= document.getElementById("searchInput");
    //获取关键字，不带空格，忽略大小写
    let key_word=input_key.value.trim().toLowerCase();
    console.log(key_word);
    //获取到搜索内容后，让main列表只展示包含关键字的内容
    let get_items = document.querySelectorAll('.item');
    //console.log(get_items);
    for(let i = 1; i < get_items.length; i++)
    {
        let get_content_id = get_items[i].querySelector('#item-content')
        let get_content = get_content_id.textContent.trim().toLowerCase();
        //console.log(get_content);
        if(get_content.includes(key_word))
        {
            get_items[i].style.display = 'flex';
        }
        else{
            get_items[i].style.display = 'none';
        }
    }
    
    
    // 遍历每个项目，根据关键字过滤显示
    
}
//enter键
document.addEventListener('keydown', function(event) {if(event.key === 'Enter'){getinput()}});

export default {
    getinput,
};