(function(){
    const h = document.querySelector("#header");
    const c = document.querySelector("#content") || document.querySelector(".main");
    const f = document.querySelector("#footer");
    const tr = h ? h.querySelector(".title-right") : null;

    if (h && c) {
        // 核心：实现窗口拼接结构
        c.parentNode.insertBefore(h, c);
        // 核心：确保按钮组在 Header 内部，防止长标题换行时图标乱跑
        if (tr) h.appendChild(tr);
        // 核心：页脚吸附
        if (f) c.parentNode.insertBefore(f, c.nextSibling);
    }
})();
