(function() {
    const initDesktopUI = () => {
        const h = document.querySelector('#header');
        const c = document.querySelector('#content') || document.querySelector('.main');
        
        // 如果 header 还没出来，脚本不退出，等 500ms 再试一次
        if (!h) {
            setTimeout(initDesktopUI, 500);
            return;
        }

        // 1. 生成桌面图标 (确保在 body 最前面)
        if (!document.querySelector('#desktop-icons')) {
            const icons = document.createElement('div');
            icons.id = 'desktop-icons';
            icons.style.cssText = "position:fixed;top:100px;left:20px;z-index:9999;display:flex;flex-direction:column;gap:20px;pointer-events:auto;";
            
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
            document.body.appendChild(icons);
        }

        // 2. 生成右上角控制按钮 (强制插入到 header)
        if (!document.querySelector('#win-controls')) {
            const bts = document.createElement('div');
            bts.id = 'win-controls';
            // 使用 fixed 相对屏幕定位，避免被 header 的 overflow 裁剪
            bts.style.cssText = "position:fixed;top:40px;right:6%;display:flex;gap:15px;height:40px;align-items:center;z-index:10002;pointer-events:auto;";
            
            const actions = [
                ['—', () => { if (c) c.style.display = (c.style.display === 'none' ? 'block' : 'none'); }], 
                ['▢', () => { if(c){c.style.display='block'; c.style.left='5%'; c.style.top='80px';} h.style.left='5%'; h.style.top='40px'; }], 
                ['×', () => { location.reload(); }]
            ];

            actions.forEach(([txt, fn]) => {
                const b = document.createElement('span');
                b.innerText = txt;
                b.style.cssText = "cursor:pointer;font-size:18px;color:#5f6368;padding:5px 10px;font-family:sans-serif;font-weight:bold;user-select:none;";
                b.onclick = (e) => { e.stopPropagation(); fn(); };
                bts.appendChild(b);
            });
            document.body.appendChild(bts); // 改为挂载到 body，防止被 header 遮挡
        }
    };

    // 页面加载完成后运行
    if (document.readyState === 'complete') {
        initDesktopUI();
    } else {
        window.addEventListener('load', initDesktopUI);
    }
})();
