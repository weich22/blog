function setupDesktop() {
    // 防止重复创建
    if (document.getElementById('blog-desktop')) return;

    const desktop = document.createElement('div');
    desktop.id = 'blog-desktop';
    desktop.style.cssText = "position:fixed; top:30px; left:20px; z-index:50; display:flex; flex-direction:column; gap:20px;";

    const icons = [
        { name: '必应', img: 'https://www.bing.com/favicon.ico', link: 'https://bing.com' },
        { name: 'GitHub', img: 'https://github.githubassets.com/favicons/favicon.svg', link: 'https://github.com' }
    ];

    icons.forEach(icon => {
        const item = document.createElement('div');
        item.style.cssText = "text-align:center; cursor:pointer; width:60px;";
        item.innerHTML = `
            <img src="${icon.img}" style="width:40px;height:40px;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.3);">
            <div style="color:white;font-size:11px;margin-top:4px;text-shadow:1px 1px 2px #000;">${icon.name}</div>
        `;
        item.onclick = () => window.open(icon.link, '_blank');
        desktop.appendChild(item);
    });

    document.body.prepend(desktop);
}

// 采用安全轮询，确保 body 加载后才注入
const checkInterval = setInterval(() => {
    if (document.body) {
        setupDesktop();
        clearInterval(checkInterval);
    }
}, 500);
