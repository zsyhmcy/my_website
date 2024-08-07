import botton from './botton.js'
import search from './search.js'
import lib from'./lib.js'
import list from './list.js'

// 将函数绑定到全局对象 window
window.getinput = search.getinput;
window.addItem = lib.addItem;
window.downn = botton.down;
window.upp = botton.up;
window.showContent = botton.showContent;

//Add_content
function Add_content(jsondata){
    fetch(jsondata).then(function(response){
        return response.json();
    
        }).then(function(data){
            for(let i = 0; i <data.length; i++){
                lib.addItem(jsondata,i);
            }
        });
}


//main
Add_content("data.json");
Add_content("test.json");




