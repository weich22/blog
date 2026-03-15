// 图标配置
const myApps = [
    { name: '必应搜索', url: 'https://www.bing.com', img: 'https://www.bing.com/favicon.ico' },
    { name: '谷歌搜索', url: 'https://www.google.com', img: 'https://www.google.com/favicon.ico' },
    { name: '友情链接', url: '/post/you-qing-lian-jie.html', img: '🤝' } // 也可以传emoji
];

function initSystem() {
    // 1. 创建桌面图标层
    const desktop = document.createElement('div');
    desktop.id = 'desktop-layer';
    myApps.forEach(app => {
        const item = document.createElement('div');
        item.className = 'desktop-app';
        item.innerHTML = `
            ${app.img.startsWith('http') ? `<img src="${app.img}">` : `<span style="font-size:40px">${app.img}</span>`}
            <span>${app.name}</span>
        `;
        item.onclick = () => window.open(app.url, '_blank');
        desktop.appendChild(item);
    });
    document.body.appendChild(desktop);

    // 2. 创建仿真窗口
    const mainContent = document.querySelector('.main'); 
    const windowWrap = document.createElement('div');
    windowWrap.id = 'win-window';
    windowWrap.innerHTML = `
        <div class="win-header">
            <div class="win-title">极客日志 - weich22.github.io</div>
            <div class="win-btns">
                <button onclick="minWin()">—</button>
                <button onclick="maxWin()">▢</button>
                <button class="close-btn" onclick="closeWin()">×</button>
            </div>
        </div>
        <div id="win-body"></div>
    `;
    document.body.appendChild(windowWrap);
    
    // 将原博客内容移入新窗口
    const winBody = document.getElementById('win-body');
    if(mainContent) winBody.appendChild(mainContent);

    // 修复 Gmeek 标题
    const blogTitle = document.querySelector('.blogTitle');
    if(blogTitle) blogTitle.innerHTML = "没有用功努力,不做没用的功！weich22.github.io";
}

// 窗口控制逻辑
function minWin() {
    const win = document.getElementById('win-window');
    win.style.transform = 'scale(0.8) translateY(100vh)';
    win.style.opacity = '0';
    setTimeout(() => { win.style.display = 'none'; }, 300);
}

function maxWin() {
    const win = document.getElementById('win-window');
    if (win.style.width === '100%') {
        win.style.top = '50px';
        win.style.left = '15%';
        win.style.width = '70%';
        win.style.height = '85%';
    } else {
        win.style.top = '0';
        win.style.left = '0';
        win.style.width = '100%';
        win.style.height = '100%';
    }
}

function closeWin() {
    document.getElementById('win-window').style.display = 'none';
}

// 唤醒窗口（如果有需要，比如点桌面图标重新打开）
function openWin() {
    const win = document.getElementById('win-window');
    win.style.display = 'flex';
    setTimeout(() => {
        win.style.transform = 'scale(1) translateY(0)';
        win.style.opacity = '1';
    }, 10);
}

document.addEventListener('DOMContentLoaded', initSystem);
