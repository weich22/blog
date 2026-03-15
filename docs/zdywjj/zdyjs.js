// 1. 桌面图标配置
const myLinks = [
    { name: '必应', url: 'https://www.bing.com', icon: 'https://www.bing.com/favicon.ico' },
    { name: '谷歌', url: 'https://www.google.com', icon: 'https://www.google.com/favicon.ico' }
];

function setupDesktop() {
    // 插入图标链接
    const desktop = document.createElement('div');
    desktop.id = 'desktop-layer';
    myLinks.forEach(link => {
        const div = document.createElement('div');
        div.className = 'desktop-app';
        div.innerHTML = `<img src="${link.icon}"><span>${link.name}</span>`;
        div.onclick = () => window.open(link.url, '_blank');
        desktop.appendChild(div);
    });
    document.body.appendChild(desktop);

    // 动态确保个性签名显示（如果原生的没显示出来）
    const title = document.querySelector('.blogTitle');
    if (title) {
        title.innerHTML += `<span style="font-size:12px; font-weight:normal; display:block; color:#666;">没有用功努力,不做没用的功！weich22.github.io</span>`;
    }
}

// 确保在页面加载后执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupDesktop);
} else {
    setupDesktop();
}
