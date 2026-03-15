
window.onload = function() {
    // 1. 修改顶部导航条文字
    var blogTitle = document.querySelector('.blogTitle');
    if(blogTitle) {
        blogTitle.innerHTML = "没有用功努力,不做没用的功！weich22.github.io";
    }

    // 2. 创建桌面图标容器
    var desktop = document.createElement('div');
    desktop.id = 'custom-desktop';
    document.body.insertBefore(desktop, document.body.firstChild);

    // 3. 定义你想添加的图标链接
    const icons = [
        { name: '必应搜索', url: 'https://www.bing.com', icon: '🔍' },
        { name: '友情链接', url: '/post/you-qing-lian-jie.html', icon: '🤝' }, // 假设你创建了一个友链Issue
        { name: 'GitHub', url: 'https://github.com/weich22', icon: '🐙' }
    ];

    // 4. 循环生成图标
    icons.forEach(item => {
        var iconDiv = document.createElement('div');
        iconDiv.className = 'desktop-icon';
        iconDiv.innerHTML = `<div class="icon-img">${item.icon}</div><div class="icon-text">${item.name}</div>`;
        iconDiv.onclick = function() { window.open(item.url, '_blank'); };
        desktop.appendChild(iconDiv);
    });
};
