(function(){
    // 获取 Gmeek 原生的三个核心区块
    const h = document.querySelector("#header"),
          c = document.querySelector("#content") || document.querySelector(".main"),
          f = document.querySelector("#footer");
    
    // 如果头部和主体都存在，则进行结构重排
    if(h && c){
        // 将头部移到主体上方
        c.parentNode.insertBefore(h, c);
        // 如果有页脚，将其紧贴在主体下方
        if(f) c.parentNode.insertBefore(f, c.nextSibling);
    }
    console.log("Window-Layout-Deployed-1200px");
})();
