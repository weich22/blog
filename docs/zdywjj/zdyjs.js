(function() {
    const runDesktopJS = () => {
        const h = document.querySelector('#header');
        const c = document.querySelector('#content') || document.querySelector('.main');
        
        if (!h) {
            setTimeout(runDesktopJS, 300);
            return;
        }

        // 1. 注入桌面图标
        if (!document.getElementById('my-desktop-icons')) {
            const icons = document.createElement('div');
            icons.id = 'my-desktop-icons';
            icons.style.cssText = "position:fixed;top:100px;left:15px;z-index:500;display:flex;flex-direction:column;gap:15px;pointer-events:auto;";
            [{n:'必应',i:'https://www.bing.com/favicon.ico'},{n:'GitHub',i:'https://github.githubassets.com/favicons/favicon.svg'}]
            .forEach(o => {
                const t = document.createElement('div');
                t.style.textAlign = "center";
                t.innerHTML = `<img src="${o.i}" style="width:35px;height:35px;border-radius:6px;box-shadow:0 2px 5px rgba(0,0,0,0.3);"><div style="color:white;font-size:10px;margin-top:2px;text-shadow:1px 1px 2px #000;">${o.n}</div>`;
                icons.appendChild(t);
            });
            document.body.prepend(icons);
        }

        // 2. 注入控制按钮 (增加 order 确保排在最后)
        if (!document.getElementById('win-btn-group')) {
            const btnGroup = document.createElement('div');
            btnGroup.id = 'win-btn-group';
            btnGroup.style.cssText = "display:flex;gap:10px;margin-left:10px;flex-shrink:0;z-index:10005;order:3 !important;";

            const acts = [
                ['—', () => { if(c) c.style.display = (c.style.display==='none'?'block':'none'); }],
                ['▢', () => { if(c){c.style.display='block'; c.style.left='5%'; c.style.top='84px';} h.style.left='5%'; h.style.top='40px'; }],
                ['×', () => { location.reload(); }]
            ];

            acts.forEach(([txt, fn]) => {
                const b = document.createElement('div');
                b.innerText = txt;
                b.style.cssText = "cursor:pointer;padding:5px 5px;font-size:16px;color:#5f6368;font-weight:bold;line-height:1;user-select:none;";
                b.onclick = (e) => { e.preventDefault(); e.stopPropagation(); fn(); };
                btnGroup.appendChild(b);
            });
            h.appendChild(btnGroup);
        }
    };

    if (document.readyState === 'complete') runDesktopJS();
    else window.addEventListener('load', runDesktopJS);
})();
