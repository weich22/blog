const customApps = [
    { name: '必应搜索', url: 'https://www.bing.com', img: 'https://www.bing.com/favicon.ico' },
    { name: '谷歌搜索', url: 'https://www.google.com', img: 'https://www.google.com/favicon.ico' }
];

function injectDesktop() {
    // 检查是否已经存在图标层，防止重复插入
    if (document.getElementById('desktop-layer')) return;

    const desktop = document.createElement('div');
    desktop.id = 'desktop-layer';

    customApps.forEach(app => {
        const item = document.createElement('div');
        item.style.cssText = "display:flex;flex-direction:column;align-items:center;cursor:pointer;width:70px;";
        item.innerHTML = `
            <img src="${app.img}" style="width:45px;height:45px;border-radius:8px;box-shadow:0 2px 5px rgba(0,0,0,0.3);">
            <span style="color:white;font-size:12px;margin-top:5px;text-shadow:1px 1px 2px #000;">${app.name}</span>
        `;
        item.onclick = () => window.open(app.url, '_blank');
        desktop.appendChild(item);
    });

    document.body.appendChild(desktop);
}

// 兼容 Gmeek 加载机制
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectDesktop);
} else {
    injectDesktop();
}
