(function(){
    // 1. 获取 头部、主体、底部 元素
    const h = document.querySelector("#header"),
          c = document.querySelector("#content") || document.querySelector(".main"),
          f = document.querySelector("#footer");
    
    if(h && c){
        // 2. 将头部搬运到主体上方
        c.parentNode.insertBefore(h, c);
        
        // 3. 【关键改动】将右侧按钮组挪到 header 的末尾，方便 CSS 绝对定位固定它
        const tr = h.querySelector(".title-right");
        if(tr) h.appendChild(tr);
        
        // 4. 将底部搬运到主体下方
        if(f) c.parentNode.insertBefore(f, c.nextSibling);
    }
})();
