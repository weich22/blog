const myLinks = [
    { name: '必应', url: 'https://www.bing.com', icon: 'https://www.bing.com/favicon.ico' },
    { name: 'GitHub', url: 'https://github.com', icon: 'https://github.githubassets.com/favicons/favicon.svg' }
];

function safeInject() {
    // 1. 如果 body 还没出来，或者图标已经存在，就跳过
    if (!document.body || document.getElementById('desktop-layer')) return;

    const desktop = document.createElement('div');
    desktop.id = 'desktop-layer';
    
    myLinks.forEach(link => {
        const item = document.createElement('div');
        item.style.cssText = "text-align:center; cursor:pointer; width:60px; transition: 0.2s;";
        item.innerHTML = `
            <img src="${link.icon}" style="width:45px; height:45px; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.5);">
            <div style="color:white; font-size:12px; margin-top:5px; text-shadow:1px 1px 3px #000; font-weight:bold;">${link.name}</div>
        `;
        item.onclick = () => window.open(link.url, '_blank');
        desktop.appendChild(item);
    });

    // 2. 使用insertAdjacentElement，比appendChild更安全
    document.body.insertAdjacentElement('afterbegin', desktop);
}

// 采用多重保险：加载时运行，且每秒检查一次直到成功
safeInject();
const checkTimer = setInterval(() => {
    safeInject();
    if (document.getElementById('desktop-layer')) clearInterval(checkTimer);
}, 1000);
