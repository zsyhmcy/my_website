import botton from './botton.js'
import search from './search.js'
import lib from'./lib.js'
// 将函数绑定到全局对象 window
window.getinput = search.getinput;
window.addItem = lib.addItem;
window.downn = botton.down;
window.upp = botton.up;
window.showContent = botton.showContent;
//main
fetch("data.json").then(function(response){
    return response.json();

    }).then(function(data){
        for(let i = 0; i <data.length; i++){
            lib.addItem(i);
        }
    });





