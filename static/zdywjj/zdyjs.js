(function(){
    const h = document.querySelector('#header');
    const c = document.querySelector('#content') || document.querySelector('.main');
    if(!h) return;

    // 1. 生成桌面图标
    const icons = document.createElement('div');
    icons.style.cssText = "position:fixed;top:100px;left:20px;z-index:500;display:flex;flex-direction:column;gap:20px;";
    
    const iconList = [
        {n:'必应', i:'https://www.bing.com/favicon.ico'},
        {n:'GitHub', i:'https://github.githubassets.com/favicons/favicon.svg'}
    ];

    iconList.forEach(o => {
        const t = document.createElement('div');
        t.style.textAlign = "center";
        t.innerHTML = `<img src="${o.i}" style="width:40px;height:40px;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.3);">
                       <div style="color:white;font-size:11px;margin-top:4px;text-shadow:1px 1px 2px #000;">${o.n}</div>`;
        icons.appendChild(t);
    });
    document.body.prepend(icons);

    // 2. 生成右上角控制按钮
    const bts = document.createElement('div');
    bts.style.cssText = "position:absolute;right:10px;top:0;display:flex;gap:15px;height:40px;align-items:center;z-index:1100;";
    
    const resetPos = () => {
        if(c){ c.style.display='block'; c.style.left='5%'; c.style.top='80px'; }
        h.style.left='5%'; h.style.top='40px';
    };

    const actions = [
        ['—', () => { if(c) c.style.display='none'; }], 
        ['▢', resetPos], 
        ['×', () => { location.reload(); }]
    ];

    actions.forEach(([txt, fn]) => {
        const b = document.createElement('span');
        b.innerText = txt;
        b.style.cssText = "cursor:pointer;font-size:16px;color:#5f6368;padding:5px;font-family:sans-serif;";
        b.onclick = fn;
        bts.appendChild(b);
    });
    h.appendChild(bts);
})();

