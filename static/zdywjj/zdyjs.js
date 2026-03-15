const myApps = [
    { name: '必应搜索', url: 'https://www.bing.com', img: 'https://www.bing.com/favicon.ico' },
    { name: '谷歌搜索', url: 'https://www.google.com', img: 'https://www.google.com/favicon.ico' }
];

function initWinSystem() {
    // 1. 提取 Gmeek 原生数据
    const originalTitle = document.querySelector('.blogTitle')?.innerText || "我的博客";
    const originalSub = document.querySelector('.blogTitle')?.nextElementSibling?.innerText || "";
    const mainContent = document.querySelector('.main');

    // 2. 创建桌面图标
    const desktop = document.createElement('div');
    desktop.id = 'desktop-layer';
    myApps.forEach(app => {
        const item = document.createElement('div');
        item.className = 'desktop-app';
        item.innerHTML = `<img src="${app.img}"><span>${app.name}</span>`;
        item.onclick = () => window.open(app.url, '_blank');
        desktop.appendChild(item);
    });
    document.body.appendChild(desktop);

    // 3. 创建仿真窗口结构
    const winWrap = document.createElement('div');
    winWrap.id = 'win-window';
    winWrap.innerHTML = `
        <div class="win-header">
            <div class="win-title-area">${originalTitle}</div>
            <div class="win-btns">
                <button onclick="minWin()">—</button>
                <button onclick="maxWin()">▢</button>
                <button class="close-btn" onclick="closeWin()">×</button>
            </div>
        </div>
        <div id="win-body">
            <div style="text-align:center; padding: 20px 0; border-bottom: 1px dashed #eee;">
                <h1 style="font-size:24px; margin-bottom:5px;">${originalTitle}</h1>
                <p style="color:#666; font-size:14px;">${originalSub}</p>
            </div>
            <div id="real-content"></div>
        </div>
    `;
    document.body.appendChild(winWrap);

    // 4. 将 Gmeek 原生的文章列表真正地“塞进”窗口内部
    const realContentContainer = document.getElementById('real-content');
    if (mainContent && realContentContainer) {
        realContentContainer.appendChild(mainContent);
    }
}

// 窗口交互函数
function minWin() {
    const win = document.getElementById('win-window');
    win.style.opacity = '0';
    win.style.transform = 'scale(0.9) translateY(20px)';
    setTimeout(() => win.style.display = 'none', 300);
}

function maxWin() {
    const win = document.getElementById('win-window');
    if (win.style.width === '100%') {
        win.style.top = '5%'; win.style.left = '10%'; win.style.width = '80%'; win.style.height = '85%';
    } else {
        win.style.top = '0'; win.style.left = '0'; win.style.width = '100%'; win.style.height = '100%';
    }
}

function closeWin() {
    document.getElementById('win-window').style.display = 'none';
}

// 页面加载完成后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWinSystem);
} else {
    initWinSystem();
}
