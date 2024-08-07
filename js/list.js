document.addEventListener("DOMContentLoaded", function() {
    // 获取所有分类 li 元素
    const columnItems = document.querySelectorAll('#column-list li');

    // 遍历每个 li 元素
    columnItems.forEach(function(item) {
        // 监听点击事件
        item.addEventListener('click', function() {
            // 执行点击后的操作:
            const category = item.getAttribute('data-category').trim().toLowerCase();
            console.log('点击了分类:', category);
            let get_items = document.querySelectorAll('.item');
            for(let i = 1; i < get_items.length; i++)
                {
                    let get_content_id = get_items[i].querySelector('#item-content')
                    let get_content = get_content_id.textContent.trim().toLowerCase();
                    //console.log(get_content);
                    if(get_content.includes(category))
                    {
                        get_items[i].style.display = 'flex';
                    }
                    else{
                        get_items[i].style.display = 'none';
                    }
                }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // 获取所有分类 li 元素
    const calssifyItems = document.querySelectorAll('#classify-list li');

    // 遍历每个 li 元素
    calssifyItems.forEach(function(item) {
        // 监听点击事件
        item.addEventListener('click', function() {
            // 执行点击后的操作:
            const category = item.getAttribute('data-category').trim().toLowerCase();
            console.log('点击了分类:', category);
            let get_items = document.querySelectorAll('.item');
            for(let i = 1; i < get_items.length; i++)
                {
                    let get_content_id = get_items[i].querySelector('#item-content')
                    let get_content = get_content_id.textContent.trim().toLowerCase();
                    //console.log(get_content);
                    if(get_content.includes(category))
                    {
                        get_items[i].style.display = 'flex';
                    }
                    else{
                        get_items[i].style.display = 'none';
                    }
                }
        });
    });
});



export default{}