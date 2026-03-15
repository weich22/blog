const myDesktopLinks = [
    { name: '必应', url: 'https://www.bing.com', icon: 'https://www.bing.com/favicon.ico' },
    { name: 'GitHub', url: 'https://github.com', icon: 'https://github.githubassets.com/favicons/favicon.svg' }
];

function initDesktop() {
    if (document.getElementById('desktop-layer')) return;
    const desktop = document.createElement('div');
    desktop.id = 'desktop-layer';
    desktop.style.cssText = "position:fixed; top:40px; left:20px; z-index:1; display:flex; flex-direction:column; gap:20px;";
    
    myDesktopLinks.forEach(link => {
        const item = document.createElement('div');
        item.style.cssText = "text-align:center; cursor:pointer;";
        item.innerHTML = `
            <img src="${link.icon}" style="width:45px; height:45px; border-radius:8px; box-shadow:0 2px 5px rgba(0,0,0,0.5);">
            <div style="color:white; font-size:12px; margin-top:5px; text-shadow:1px 1px 2px #000;">${link.name}</div>
        `;
        item.onclick = () => window.open(link.url, '_blank');
        desktop.appendChild(item);
    });
    document.body.appendChild(desktop);
}

// 执行初始化
initDesktop();
