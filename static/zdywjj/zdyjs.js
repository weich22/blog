const myApps = [
    { name: '必应搜索', url: 'https://www.bing.com', img: 'https://www.bing.com/favicon.ico' },
    { name: '谷歌搜索', url: 'https://www.google.com', img: 'https://www.google.com/favicon.ico' }
];

function initWinSystem() {
    // 1. 获取原生内容（增加容错处理）
    const getAvatar = () => document.querySelector('.avatar-user')?.src || "";
    const getTitle = () => document.querySelector('.blogTitle')?.innerText || "Blog Title";
    const getSub = () => document.querySelector('.blogTitle')?.nextElementSibling?.innerText || "";

    // 2. 创建桌面图标层
    if(!document.getElementById('desktop-layer')){
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
    }

    // 3. 创建仿真窗口结构（如果已存在则不创建）
    if(!document.getElementById('win-window')){
        const winWrap = document.createElement('div');
        winWrap.id = 'win-window';
        winWrap.innerHTML = `
            <div class="win-header">
                <div class="win-title-area">Chromium - ${getTitle()}</div>
                <div class="win-btns">
                    <button onclick="minWin()">—</button>
                    <button onclick="maxWin()">▢</button>
                    <button class="close-btn" onclick="closeWin()">×</button>
                </div>
            </div>
            <div class="win-nav-bar">
                <img class="win-avatar" src="${getAvatar()}">
                <div class="win-info">
                    <span class="win-blog-name">${getTitle()}</span>
                    <span class="win-blog-sub">${getSub()}</span>
                </div>
            </div>
            <div id="win-body"></div>
        `;
        document.body.appendChild(winWrap);
    }

    // 4. 关键：持续检测并搬运文章列表 (解决显示在背景的问题)
    const moveContent = () => {
        const mainContent = document.querySelector('.main');
        const winBody = document.getElementById('win-body');
        if (mainContent && winBody && mainContent.parentElement !== winBody) {
            winBody.appendChild(mainContent);
            console.log("Content moved to window!");
        }
    };

    // 执行搬运
    setInterval(moveContent, 500); // 每半秒检查一次，防止 Gmeek 异步加载后又跳回背景
}

// 按钮逻辑保持不变
function minWin() { document.getElementById('win-window').style.display = 'none'; }
function maxWin() {
    const win = document.getElementById('win-window');
    if (win.style.width === '100%') {
        win.style.top = '5%'; win.style.left = '10%'; win.style.width = '80%'; win.style.height = '85%';
    } else {
        win.style.top = '0'; win.style.left = '0'; win.style.width = '100%'; win.style.height = '100%';
    }
}
function closeWin() { document.getElementById('win-window').style.display = 'none'; }

// 启动
initWinSystem();
